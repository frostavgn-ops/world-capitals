

class KnowledgeBaseManager {
    constructor() {
        this.countries = [];
        this.filteredCountries = [];
        this.currentFilters = {
            continent: 'all',
            sortBy: 'name',
            searchQuery: ''
        };
        
        this.init();
    }
    
    init() {
        console.log('KnowledgeBaseManager инициализирован');
        
      
        const checkDataManager = setInterval(() => {
            if (typeof DataManager !== 'undefined') {
                clearInterval(checkDataManager);
                this.countries = DataManager.getAllCountries();
                this.filteredCountries = [...this.countries];
                this.renderCountries();
                this.setupEventListeners();
                this.setupModal();
                console.log(`Загружено ${this.countries.length} стран`);
            }
        }, 100);
        
       
        setTimeout(() => {
            if (typeof DataManager === 'undefined') {
                console.error('DataManager не загрузился');
                this.showErrorMessage();
            }
        }, 5000);
    }
    
    showErrorMessage() {
        const grid = document.getElementById('countries-grid');
        if (grid) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Ошибка загрузки данных</h3>
                    <p>База данных стран не загружена. Проверьте подключение data.js</p>
                </div>
            `;
        }
    }
    
    renderCountries() {
        const grid = document.getElementById('countries-grid');
        const noResults = document.getElementById('no-results');
        
        if (!grid) {
            console.error('countries-grid не найден!');
            return;
        }
        
        if (this.filteredCountries.length === 0) {
            grid.innerHTML = '';
            if (noResults) noResults.style.display = 'block';
            return;
        }
        
        if (noResults) noResults.style.display = 'none';
        
        const countriesHTML = this.filteredCountries.map(country => this.createCountryCard(country)).join('');
        grid.innerHTML = countriesHTML;
        
    
        document.querySelectorAll('.country-card').forEach(card => {
            card.addEventListener('click', () => {
                const countryId = parseInt(card.dataset.id);
                this.openCountryModal(countryId);
            });
        });
    }
    
    createCountryCard(country) {
        const continentName = this.getContinentName(country.continent);
        const populationFormatted = this.formatNumber(country.population);
        const areaFormatted = this.formatNumber(country.area);
        
        return `
            <div class="country-card" data-id="${country.id}">
                <div class="country-header">
                    <div class="country-flag">${country.flag}</div>
                    <div class="country-title">
                        <h3>${country.name}</h3>
                        <p>${country.capital}</p>
                    </div>
                </div>
                
                <div class="country-details">
                    <div class="country-info">
                        <div class="info-item">
                            <i class="fas fa-globe-americas"></i>
                            <span>${continentName}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-users"></i>
                            <span>${populationFormatted}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <span>${areaFormatted}</span>
                        </div>
                    </div>
                    
                    <div class="country-actions">
                        <button class="btn btn-sm btn-secondary view-details">
                            <i class="fas fa-info-circle"></i> Подробнее
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getContinentName(continentId) {
        if (typeof DataManager !== 'undefined') {
            return DataManager.getContinentName(continentId);
        }
        
        const continentNames = {
            europe: 'Европа',
            asia: 'Азия',
            africa: 'Африка',
            'north-america': 'Северная Америка',
            'south-america': 'Южная Америка',
            oceania: 'Океания'
        };
        return continentNames[continentId] || continentId;
    }
    
    formatNumber(num) {
        if (num === null || num === undefined || isNaN(num)) return 'Н/Д';
        
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.0', '') + ' млн км²';
        }
        
        if (num >= 1) {
            return num.toFixed(1).replace('.0', '') + ' млн';
        }
        
        return Math.round(num * 1000) + ' тыс';
    }
    
    setupEventListeners() {
    
        const searchInput = document.getElementById('search-input');
        const clearSearch = document.getElementById('clear-search');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.searchQuery = e.target.value;
                this.applyFilters();
            });
        }
        
        if (clearSearch) {
            clearSearch.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                this.currentFilters.searchQuery = '';
                this.applyFilters();
            });
        }
        
        
        const continentFilter = document.getElementById('continent-filter');
        const sortByFilter = document.getElementById('sort-by');
        
        if (continentFilter) {
            continentFilter.addEventListener('change', (e) => {
                this.currentFilters.continent = e.target.value;
                this.applyFilters();
            });
        }
        
        if (sortByFilter) {
            sortByFilter.addEventListener('change', (e) => {
                this.currentFilters.sortBy = e.target.value;
                this.applyFilters();
            });
        }
    }
    
    applyFilters() {
        let filtered = [...this.countries];
        
      
        if (this.currentFilters.continent !== 'all') {
            filtered = filtered.filter(country => 
                country.continent === this.currentFilters.continent
            );
        }
        
        // Поиск
        if (this.currentFilters.searchQuery) {
            const query = this.currentFilters.searchQuery.toLowerCase();
            filtered = filtered.filter(country =>
                (country.name && country.name.toLowerCase().includes(query)) ||
                (country.capital && country.capital.toLowerCase().includes(query)) ||
                (country.languages && country.languages.some(lang => 
                    lang.toLowerCase().includes(query)
                ))
            );
        }
        
        // Сортировка
        filtered = this.sortCountries(filtered, this.currentFilters.sortBy);
        
        this.filteredCountries = filtered;
        this.renderCountries();
    }
    
    sortCountries(countries, sortBy) {
        return [...countries].sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return (a.name || '').localeCompare(b.name || '');
                case 'name-desc':
                    return (b.name || '').localeCompare(a.name || '');
                case 'population':
                    return (b.population || 0) - (a.population || 0);
                case 'population-asc':
                    return (a.population || 0) - (b.population || 0);
                case 'area':
                    return (b.area || 0) - (a.area || 0);
                case 'area-asc':
                    return (a.area || 0) - (b.area || 0);
                default:
                    return 0;
            }
        });
    }
    
    setupModal() {
        this.modal = document.getElementById('country-modal');
        this.modalClose = document.getElementById('modal-close');
        
        if (this.modal && this.modalClose) {
            this.modalClose.addEventListener('click', () => this.closeModal());
            
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.closeModal();
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.modal.style.display === 'block') {
                    this.closeModal();
                }
            });
        }
    }
    
    openCountryModal(countryId) {
        if (typeof DataManager === 'undefined') {
            console.error('DataManager не загружен');
            return;
        }
        
        const country = DataManager.getCountryById(countryId);
        if (!country || !this.modal) return;
        
        const modalName = document.getElementById('modal-country-name');
        const modalBody = document.getElementById('modal-body');
        
        if (modalName) {
            modalName.innerHTML = `
                <span>${country.flag}</span>
                ${country.name} - ${country.capital}
            `;
        }
        
        if (modalBody) modalBody.innerHTML = this.createModalContent(country);
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Добавляем класс для анимации
        this.modal.classList.add('active');
    }
    
    createModalContent(country) {
        const continentName = this.getContinentName(country.continent);
        const languages = country.languages?.join(', ') || 'Информация отсутствует';
        const currency = country.currency || 'Информация отсутствует';
        const fact = country.fact || 'Интересный факт о стране отсутствует';
        const timezone = country.timezone || 'Информация отсутствует';
        
        // Форматирование года основания
        let yearInfo = 'Информация отсутствует';
        let yearIcon = 'fas fa-question-circle';
        
        if (country.established !== undefined && country.established !== null) {
            if (country.established < 0) {
                yearInfo = `Основана в ${Math.abs(country.established)} году до н.э.`;
            } else {
                yearInfo = `Основана в ${country.established} году`;
            }
            yearIcon = 'fas fa-history';
        }
        
        return `
            <div class="country-modal-content">
                <div class="country-modal-header">
                    <div class="country-modal-flag">${country.flag}</div>
                    <div class="country-modal-info">
                        <h3>${country.name}</h3>
                        <div class="country-modal-tags">
                            <span class="tag tag-continent">
                                <i class="fas fa-globe-americas"></i> ${continentName}
                            </span>
                            <span class="tag tag-capital">
                                <i class="fas fa-city"></i> ${country.capital}
                            </span>
                            <span class="tag tag-population">
                                <i class="fas fa-users"></i> ${this.formatNumber(country.population)}
                            </span>
                            <span class="tag tag-area">
                                <i class="fas fa-expand-arrows-alt"></i> ${this.formatNumber(country.area)}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="country-modal-stats">
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-language"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Языки</div>
                            <div class="stat-value">${languages}</div>
                        </div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-money-bill-wave"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Валюта</div>
                            <div class="stat-value">${currency}</div>
                        </div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Часовой пояс</div>
                            <div class="stat-value">${timezone}</div>
                        </div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="${yearIcon}"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Год основания</div>
                            <div class="stat-value">${yearInfo}</div>
                        </div>
                    </div>
                </div>
                
                <div class="country-modal-details">
                    <div class="detail-section">
                        <div class="detail-section-header">
                            <i class="fas fa-star" style="color: var(--color-accent);"></i>
                            <h4>Интересный факт</h4>
                        </div>
                        <div class="detail-section-content">
                            <p>${fact}</p>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <div class="detail-section-header">
                            <i class="fas fa-book" style="color: var(--color-primary);"></i>
                            <h4>Информация о стране</h4>
                        </div>
                        <div class="detail-section-content">
                            <p>${country.name} - государство в ${continentName} со столицей в ${country.capital}. Площадь страны составляет ${this.formatNumber(country.area)}, население - ${this.formatNumber(country.population)} человек.</p>
                        </div>
                    </div>
                </div>
                
                <div class="country-modal-actions">
                    <button class="btn btn-primary" onclick="startTestForCountry(${country.id})">
                        <i class="fas fa-question-circle"></i> Пройти тест по этой стране
                    </button>
                    <button class="btn btn-secondary" onclick="window.knowledgeBase.closeModal()">
                        <i class="fas fa-times"></i> Закрыть
                    </button>
                </div>
            </div>
        `;
    }
    
    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            setTimeout(() => {
                this.modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
}

// Глобальная функция для запуска теста по стране
function startTestForCountry(countryId) {
    if (typeof DataManager !== 'undefined') {
        const country = DataManager.getCountryById(countryId);
        if (country) {
            // Сохраняем информацию о стране для теста
            sessionStorage.setItem('testCountry', JSON.stringify(country));
            window.location.href = 'tests.html';
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница базы знаний загружена');
    
    // Проверяем, находимся ли мы на странице базы знаний
    if (document.getElementById('countries-grid')) {
        window.knowledgeBase = new KnowledgeBaseManager();
    }
});