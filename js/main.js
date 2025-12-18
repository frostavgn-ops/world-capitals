

function addDynamicStyles(pageName) {
    const styleElement = document.getElementById('dynamic-styles');
    if (!styleElement) return;
    
    let styles = '';
    
    styles += `
        /* Page Header */
        .page-header {
            padding: 3rem 0;
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            color: white;
            text-align: center;
        }
        
        .page-title {
            font-family: 'Unbounded', sans-serif;
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
        }
        
        .page-subtitle {
            font-size: 1.125rem;
            opacity: 0.9;
            margin-bottom: 2rem;
        }
        
        /* Search and Filters */
        .search-filters {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .search-box {
            position: relative;
            margin-bottom: 1.5rem;
        }
        
        .search-box i {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-light);
        }
        
        .search-box input {
            width: 100%;
            padding: 0.875rem 1rem 0.875rem 3rem;
            border: 2px solid transparent;
            border-radius: var(--radius-md);
            font-size: 1rem;
            background: white;
            transition: all var(--transition-fast);
        }
        
        .search-box input:focus {
            outline: none;
            border-color: var(--color-secondary);
            box-shadow: 0 0 0 3px rgba(13, 169, 230, 0.1);
        }
        
        #clear-search {
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            color: var(--color-text-light);
            cursor: pointer;
            padding: 0.5rem;
        }
        
        .filters {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .filter-group label {
            font-weight: 500;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .filter-select {
            padding: 0.625rem 0.875rem;
            border: 2px solid transparent;
            border-radius: var(--radius-md);
            font-size: 0.875rem;
            background: white;
            color: var(--color-text);
            cursor: pointer;
            transition: all var(--transition-fast);
        }
        
        .filter-select:focus {
            outline: none;
            border-color: var(--color-secondary);
            box-shadow: 0 0 0 3px rgba(13, 169, 230, 0.1);
        }
    `;
    
    styleElement.textContent = styles;
}



class KnowledgeBaseManager {
    constructor() {
        console.log('KnowledgeBaseManager инициализирован');
        this.countries = DataManager.getAllCountries();
        this.filteredCountries = [...this.countries];
        this.currentFilters = {
            continent: 'all',
            sortBy: 'name',
            searchQuery: ''
        };
        
        this.init();
    }
    
    init() {
        this.addKnowledgeBaseStyles();
        this.renderCountries();
        this.setupEventListeners();
        this.setupModal();
    }
    
    addKnowledgeBaseStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* ========== СТИЛИ ДЛЯ БАЗЫ ЗНАНИЙ ========== */
            
            /* Countries Grid */
            .countries-section {
                padding: 2rem 0 4rem;
            }
            
            .countries-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 1.5rem;
                margin-top: 2rem;
            }
            
            .country-card {
                background: var(--color-surface);
                border-radius: var(--radius-lg);
                overflow: hidden;
                box-shadow: var(--shadow-md);
                transition: all var(--transition-normal);
                cursor: pointer;
                border: 1px solid var(--color-border);
            }
            
            .country-card:hover {
                transform: translateY(-5px);
                box-shadow: var(--shadow-xl);
                border-color: var(--color-secondary);
            }
            
            .country-header {
                padding: 1.5rem;
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                color: white;
            }
            
            .country-flag {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
            
            .country-title h3 {
                font-size: 1.25rem;
                font-weight: 700;
                margin-bottom: 0.25rem;
            }
            
            .country-title p {
                font-size: 1rem;
                opacity: 0.9;
            }
            
            .country-details {
                padding: 1.5rem;
            }
            
            .country-info {
                margin-bottom: 1.5rem;
            }
            
            .info-item {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 0.75rem;
                font-size: 0.875rem;
                color: var(--color-text-light);
            }
            
            .info-item i {
                width: 20px;
                color: var(--color-secondary);
            }
            
            .country-actions .btn-sm {
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
            }
            
            /* Loading */
            .loading {
                grid-column: 1 / -1;
                text-align: center;
                padding: 3rem;
                color: var(--color-text-light);
            }
            
            .loading i {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            
            /* No Results */
            .no-results {
                text-align: center;
                padding: 3rem;
                color: var(--color-text-light);
            }
            
            .no-results i {
                font-size: 3rem;
                margin-bottom: 1rem;
                color: var(--color-secondary);
            }
            
            .no-results h3 {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
                color: var(--color-text);
            }
            
            /* ========== СТИЛИ ДЛЯ МОДАЛЬНОГО ОКНА ========== */
            
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px);
                z-index: 9999;
                overflow-y: auto;
                animation: fadeIn 0.3s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .modal-content {
                background: var(--color-surface);
                border-radius: var(--radius-xl);
                max-width: 700px;
                margin: 2rem auto;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                animation: slideIn 0.4s ease-out;
                border: 1px solid var(--color-border);
                overflow: hidden;
            }
            
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 2rem;
                border-bottom: 1px solid var(--color-border);
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                color: white;
            }
            
            .modal-header h2 {
                font-family: 'Unbounded', sans-serif;
                font-size: 1.75rem;
                font-weight: 700;
                margin: 0;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .modal-close {
                background: rgba(255, 255, 255, 0.15);
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: white;
                cursor: pointer;
                font-size: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all var(--transition-fast);
            }
            
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.25);
                transform: rotate(90deg);
            }
            
            .modal-body {
                padding: 0;
            }
            
            /* Country Modal Content */
            .country-modal-content {
                padding: 2rem;
            }
            
            .country-modal-header {
                display: flex;
                align-items: center;
                gap: 2rem;
                margin-bottom: 2rem;
                padding-bottom: 1.5rem;
                border-bottom: 2px solid var(--color-border);
            }
            
            .country-modal-flag {
                font-size: 3.5rem;
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                width: 80px;
                height: 80px;
                border-radius: var(--radius-lg);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                box-shadow: var(--shadow-lg);
                flex-shrink: 0;
            }
            
            .country-modal-info {
                flex: 1;
            }
            
            .country-modal-info h3 {
                font-family: 'Unbounded', sans-serif;
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                color: var(--color-primary);
            }
            
            .country-modal-subtitle {
                font-size: 1rem;
                color: var(--color-text-light);
                margin-bottom: 1rem;
                font-style: italic;
            }
            
            .country-modal-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .tag {
                padding: 0.5rem 1rem;
                border-radius: var(--radius-full);
                font-size: 0.875rem;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                transition: all var(--transition-fast);
            }
            
            .tag:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
            }
            
            .tag-continent {
                background: rgba(13, 169, 230, 0.15);
                color: var(--color-secondary);
                border: 1px solid rgba(13, 169, 230, 0.3);
            }
            
            .tag-capital {
                background: rgba(27, 75, 122, 0.15);
                color: var(--color-primary);
                border: 1px solid rgba(27, 75, 122, 0.3);
            }
            
            .tag-population {
                background: rgba(255, 200, 87, 0.15);
                color: var(--color-accent);
                border: 1px solid rgba(255, 200, 87, 0.3);
            }
            
            .tag-area {
                background: rgba(16, 185, 129, 0.15);
                color: var(--color-success);
                border: 1px solid rgba(16, 185, 129, 0.3);
            }
            
            /* Stats Grid */
            .country-modal-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .stat {
                background: var(--color-background);
                border-radius: var(--radius-lg);
                padding: 1.5rem;
                text-align: center;
                border: 1px solid var(--color-border);
                transition: all var(--transition-normal);
            }
            
            .stat:hover {
                transform: translateY(-3px);
                box-shadow: var(--shadow-md);
                border-color: var(--color-secondary);
            }
            
            .stat-icon {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.25rem;
                margin: 0 auto 1rem;
            }
            
            .stat-content {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
            }
            
            .stat-label {
                font-size: 0.875rem;
                color: var(--color-text-light);
                font-weight: 500;
            }
            
            .stat-value {
                font-size: 1.125rem;
                font-weight: 700;
                color: var(--color-primary);
            }
            
            /* Details Sections */
            .country-modal-details {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            
            .detail-section {
                background: var(--color-background);
                border-radius: var(--radius-lg);
                padding: 1.5rem;
                border: 1px solid var(--color-border);
                transition: all var(--transition-normal);
            }
            
            .detail-section:hover {
                border-color: var(--color-secondary);
                box-shadow: var(--shadow-sm);
            }
            
            .detail-section-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
                padding-bottom: 0.75rem;
                border-bottom: 1px solid var(--color-border);
            }
            
            .detail-section-header i {
                font-size: 1.25rem;
                color: var(--color-secondary);
                background: rgba(13, 169, 230, 0.1);
                width: 40px;
                height: 40px;
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .detail-section-header h4 {
                font-size: 1.125rem;
                font-weight: 600;
                color: var(--color-text);
                margin: 0;
            }
            
            .detail-section-content {
                color: var(--color-text-light);
                line-height: 1.6;
            }
            
            .detail-section-content p {
                margin: 0;
                font-size: 0.95rem;
            }
            
            /* Modal Actions */
            .country-modal-actions {
                display: flex;
                gap: 1rem;
                padding-top: 1.5rem;
                border-top: 1px solid var(--color-border);
            }
            
            .country-modal-actions .btn {
                flex: 1;
                padding: 0.875rem 1.5rem;
                font-size: 1rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;
                transition: all var(--transition-normal);
            }
            
            .country-modal-actions .btn:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-lg);
            }
            
            /* Адаптивность */
            @media (max-width: 768px) {
                .countries-grid {
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 1rem;
                }
                
                .modal-content {
                    margin: 1rem;
                    max-width: calc(100% - 2rem);
                }
                
                .country-modal-header {
                    flex-direction: column;
                    text-align: center;
                    gap: 1rem;
                }
                
                .country-modal-tags {
                    justify-content: center;
                }
                
                .country-modal-stats {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .country-modal-actions {
                    flex-direction: column;
                }
                
                .country-modal-actions .btn {
                    width: 100%;
                }
            }
            
            @media (max-width: 480px) {
                .country-modal-stats {
                    grid-template-columns: 1fr;
                }
                
                .modal-header {
                    padding: 1rem;
                }
                
                .modal-header h2 {
                    font-size: 1.25rem;
                }
                
                .country-modal-content {
                    padding: 1.25rem;
                }
            }
        `;
        document.head.appendChild(style);
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
                            <span>${populationFormatted} млн</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <span>${areaFormatted} тыс. км²</span>
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
        const continents = {
            europe: 'Европа',
            asia: 'Азия',
            africa: 'Африка',
            'north-america': 'Северная Америка',
            'south-america': 'Южная Америка',
            oceania: 'Океания'
        };
        return continents[continentId] || continentId;
    }
    
    formatNumber(num) {
        if (num === null || num === undefined || isNaN(num)) return 'Н/Д';
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.0', '');
        }
        return num.toString();
    }
    
    formatCurrency(currency) {
        if (!currency) return 'Информация отсутствует';
        return currency.replace(/\(.*?\)/, '').trim();
    }
    
    setupEventListeners() {
        // Поиск
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
        
        // Фильтры
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
        
        // Фильтрация по континенту
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
                (country.officialName && country.officialName.toLowerCase().includes(query))
            );
        }
        
        // Сортировка
        filtered = this.sortCountries(filtered, this.currentFilters.sortBy);
        
        this.filteredCountries = filtered;
        this.renderCountries();
    }
    
    sortCountries(countries, sortBy) {
        return [...countries].sort((a, b) => {
            const getValue = (obj, prop) => {
                const val = obj[prop];
                return (typeof val === 'number' ? val : (val || '').toLowerCase());
            };
            
            switch (sortBy) {
                case 'name':
                    return getValue(a, 'name').localeCompare(getValue(b, 'name'));
                case 'name-desc':
                    return getValue(b, 'name').localeCompare(getValue(a, 'name'));
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
        
        // Форматирование года основания
        const getYearInfo = () => {
            if (country.established === undefined || country.established === null) {
                return {
                    text: 'Информация о годе основания отсутствует',
                    icon: 'fas fa-question-circle',
                    color: 'var(--color-text-light)'
                };
            }
            
            const year = Math.abs(country.established);
            const era = country.established < 0 ? ' до н.э.' : '';
            
            // Определяем эпоху для иконки
            let icon = 'fas fa-history';
            if (year < 500) icon = 'fas fa-landmark';
            if (year >= 500 && year < 1500) icon = 'fas fa-fort-awesome';
            if (year >= 1500) icon = 'fas fa-building';
            
            return {
                text: `Основана в ${year} году${era}`,
                icon: icon,
                color: 'var(--color-primary)'
            };
        };
        
        // Форматирование часового пояса
        const getTimezoneInfo = () => {
            if (!country.timezone) {
                return {
                    text: 'Информация о часовом поясе отсутствует',
                    icon: 'fas fa-clock',
                    color: 'var(--color-text-light)'
                };
            }
            
            // Определяем иконку по типу часового пояса
            let icon = 'fas fa-globe';
            if (country.timezone.includes('UTC+')) icon = 'fas fa-sun';
            if (country.timezone.includes('UTC-')) icon = 'fas fa-moon';
            if (country.timezone.includes('Москва')) icon = 'fas fa-flag';
            
            return {
                text: country.timezone,
                icon: icon,
                color: 'var(--color-secondary)'
            };
        };
        
        const yearInfo = getYearInfo();
        const timezoneInfo = getTimezoneInfo();
        const languages = country.languages?.join(', ') || 'Информация отсутствует';
        const currency = this.formatCurrency(country.currency) || 'Информация отсутствует';
        const fact = country.fact || 'Дополнительная информация о стране будет добавлена в ближайшее время.';
        
        return `
            <div class="country-modal-content">
                <div class="country-modal-header">
                    <div class="country-modal-flag">${country.flag}</div>
                    <div class="country-modal-info">
                        <h3>${country.officialName || country.name}</h3>
                        ${country.officialName && country.officialName !== country.name ? 
                            `<p class="country-modal-subtitle">${country.name}</p>` : ''}
                        <div class="country-modal-tags">
                            <span class="tag tag-continent">
                                <i class="fas fa-globe-americas"></i> ${continentName}
                            </span>
                            <span class="tag tag-capital">
                                <i class="fas fa-city"></i> ${country.capital}
                            </span>
                            ${country.population ? `
                            <span class="tag tag-population">
                                <i class="fas fa-users"></i> ${this.formatNumber(country.population)} млн
                            </span>
                            ` : ''}
                            ${country.area ? `
                            <span class="tag tag-area">
                                <i class="fas fa-expand-arrows-alt"></i> ${this.formatNumber(country.area)} тыс. км²
                            </span>
                            ` : ''}
                        </div>
                    </div>
                </div>
                
                <div class="country-modal-stats">
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Население</div>
                            <div class="stat-value">${this.formatNumber(country.population)} млн</div>
                        </div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Площадь</div>
                            <div class="stat-value">${this.formatNumber(country.area)} тыс. км²</div>
                        </div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-language"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Официальные языки</div>
                            <div class="stat-value">${languages}</div>
                        </div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-icon">
                            <i class="fas fa-money-bill-wave"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Национальная валюта</div>
                            <div class="stat-value">${currency}</div>
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
                            <i class="${yearInfo.icon}" style="color: ${yearInfo.color};"></i>
                            <h4>История основания столицы</h4>
                        </div>
                        <div class="detail-section-content">
                            <p>${yearInfo.text}</p>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <div class="detail-section-header">
                            <i class="${timezoneInfo.icon}" style="color: ${timezoneInfo.color};"></i>
                            <h4>Часовой пояс</h4>
                        </div>
                        <div class="detail-section-content">
                            <p>${timezoneInfo.text}</p>
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

// ======================== ГЛОБАЛЬНЫЕ ФУНКЦИИ ========================

function startTestForCountry(countryId) {
    const country = DataManager.getCountryById(countryId);
    if (country) {
        sessionStorage.setItem('testCountry', JSON.stringify(country));
        window.location.href = 'tests.html';
    } else {
        alert('Ошибка: данные о стране не найдены');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен, инициализация базы знаний...');
    
   
    if (document.getElementById('countries-grid')) {
     
        if (typeof DataManager === 'undefined') {
            console.error('DataManager не загружен!');
        
            setTimeout(() => {
                if (typeof DataManager !== 'undefined') {
                    window.knowledgeBase = new KnowledgeBaseManager();
                    console.log('База знаний загружена с задержкой');
                } else {
                    console.error('DataManager всё ещё не загружен');
                }
            }, 500);
        } else {
            window.knowledgeBase = new KnowledgeBaseManager();
            console.log('✅ База знаний инициализирована успешно');
            console.log('📊 Загружено стран:', DataManager.getAllCountries().length);
        }
    }
    
    
    if (typeof addDynamicStyles === 'function') {
        addDynamicStyles('knowledge-base');
    }
});


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KnowledgeBaseManager, addDynamicStyles };
}