

class TestManager {
    constructor() {
        this.currentTest = null;
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
        this.timer = null;
        this.timeLeft = 0;
        
        this.init();
    }
    
    init() {
        console.log('TestManager инициализирован');
        this.loadStatistics();
        this.setupEventListeners();
        this.setupTestNavigation();
    }
    
    loadStatistics() {
        if (typeof NavigationManager !== 'undefined') {
            const stats = NavigationManager.loadStatistics();
            this.displayStatistics(stats);
        }
    }
    
    displayStatistics(stats) {
        const preview = document.getElementById('stats-preview');
        if (!preview) return;
        
        preview.innerHTML = `
            <div class="stats-grid-small">
                <div class="stat-item-small">
                    <div class="stat-number-small">${stats.testsTaken}</div>
                    <div class="stat-label-small">пройдено тестов</div>
                </div>
                <div class="stat-item-small">
                    <div class="stat-number-small">${stats.averageScore}%</div>
                    <div class="stat-label-small">средний результат</div>
                </div>
                <div class="stat-item-small">
                    <div class="stat-number-small">${stats.bestScore}%</div>
                    <div class="stat-label-small">лучший результат</div>
                </div>
            </div>
            
            ${stats.testsTaken > 0 ? `
            <div class="stats-details">
                <div class="detail-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Правильных ответов: ${stats.correctAnswers} из ${stats.totalQuestions}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-globe-americas"></i>
                    <span>Тестов по континентам: ${Object.keys(stats.byContinent).length}</span>
                </div>
            </div>
            ` : `
            <div class="no-stats">
                <i class="fas fa-chart-line"></i>
                <p>Пройдите первый тест, чтобы увидеть статистику</p>
            </div>
            `}
        `;
    }
    
    setupEventListeners() {

        document.querySelectorAll('.difficulty-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.difficulty-option').forEach(opt => {
                    opt.classList.remove('selected');
                    if (opt.querySelector('.selector-dot')) {
                        opt.querySelector('.selector-dot').classList.remove('active');
                    }
                });
                
                option.classList.add('selected');
                if (option.querySelector('.selector-dot')) {
                    option.querySelector('.selector-dot').classList.add('active');
                }
                
                const level = option.dataset.level;
                document.getElementById('difficulty').value = level;
                
         
                const questionCount = document.getElementById('question-count');
                const questionValue = document.getElementById('question-count-value');
                
                if (questionCount && questionValue) {
                    switch(level) {
                        case 'easy':
                            questionCount.value = 10;
                            questionValue.textContent = '10';
                            break;
                        case 'medium':
                            questionCount.value = 15;
                            questionValue.textContent = '15';
                            break;
                        case 'hard':
                            questionCount.value = 20;
                            questionValue.textContent = '20';
                            break;
                    }
                }
            });
        });
        
     
        document.querySelectorAll('.continent-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.continent-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                option.classList.add('selected');
                const continentInput = document.getElementById('continent');
                if (continentInput) {
                    continentInput.value = option.dataset.continent;
                }
            });
        });
        
      
        const questionCount = document.getElementById('question-count');
        const questionValue = document.getElementById('question-count-value');
        
        if (questionCount && questionValue) {
            questionCount.addEventListener('input', (e) => {
                questionValue.textContent = e.target.value;
            });
        }
        
        // Кнопка начала теста
        const startTestBtn = document.getElementById('start-test');
        if (startTestBtn) {
            startTestBtn.addEventListener('click', () => {
                this.startTest();
            });
        }
        
        // Быстрый тест
        const quickTestBtn = document.getElementById('quick-test');
        if (quickTestBtn) {
            quickTestBtn.addEventListener('click', () => {
                const difficultyInput = document.getElementById('difficulty');
                const continentInput = document.getElementById('continent');
                const questionCountInput = document.getElementById('question-count');
                const questionValueElement = document.getElementById('question-count-value');
                
                if (difficultyInput) difficultyInput.value = 'medium';
                if (continentInput) continentInput.value = 'all';
                if (questionCountInput) questionCountInput.value = '10';
                if (questionValueElement) questionValueElement.textContent = '10';
                
              
                document.querySelectorAll('.difficulty-option').forEach(opt => {
                    opt.classList.remove('selected');
                    if (opt.querySelector('.selector-dot')) {
                        opt.querySelector('.selector-dot').classList.remove('active');
                    }
                });
                
                const mediumOption = document.querySelector('.difficulty-option[data-level="medium"]');
                if (mediumOption) {
                    mediumOption.classList.add('selected');
                    if (mediumOption.querySelector('.selector-dot')) {
                        mediumOption.querySelector('.selector-dot').classList.add('active');
                    }
                }
                
                this.startTest();
            });
        }
        
       
        const backBtn = document.getElementById('back-to-config');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.showConfiguration();
            });
        }
    }
    
    setupTestNavigation() {
  
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        const finishBtn = document.getElementById('finish-test');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.navigateToQuestion(this.currentQuestionIndex - 1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.navigateToQuestion(this.currentQuestionIndex + 1);
            });
        }
        
        if (finishBtn) {
            finishBtn.addEventListener('click', () => {
                this.finishTest();
            });
        }
    }
    
    startTest() {
        const difficultyElement = document.getElementById('difficulty');
        const continentElement = document.getElementById('continent');
        const questionCountElement = document.getElementById('question-count');
        
        if (!difficultyElement || !continentElement || !questionCountElement) {
            console.error('Не найдены элементы настроек теста');
            return;
        }
        
        const difficulty = difficultyElement.value;
        const continent = continentElement.value;
        const questionCount = parseInt(questionCountElement.value);
        
        console.log('Настройки теста:', { difficulty, continent, questionCount });
        
        // Проверяем, загружена ли база данных
        if (typeof DataManager === 'undefined') {
            alert('База данных не загружена. Проверьте подключение data.js');
            return;
        }
        
        // Генерация вопросов
        this.currentTest = DataManager.generateTestQuestions(difficulty, continent, questionCount);
        
        if (!this.currentTest || this.currentTest.length === 0) {
            alert('Не удалось сгенерировать вопросы. Попробуйте другие параметры.');
            return;
        }
        
        console.log(`Сгенерировано ${this.currentTest.length} вопросов`);
        
        // Инициализация ответов пользователя
        this.userAnswers = new Array(this.currentTest.length).fill(null);
        this.currentQuestionIndex = 0;
        
        if (difficulty === 'hard') {
            this.timeLeft = 300; 
            this.startTimer();
        }
        
      
        this.showTestInterface();
        
        this.loadQuestion(0);
    }
    
    showTestInterface() {
        const configSection = document.querySelector('.test-config');
        const testSection = document.getElementById('active-test');
        
        if (configSection && testSection) {
            configSection.style.display = 'none';
            testSection.style.display = 'block';
            
            // Обновление информации о тесте
            const totalQuestions = this.currentTest.length;
            document.getElementById('total-questions').textContent = totalQuestions;
            document.getElementById('current-question').textContent = '1';
            
            // Обновление прогресс-бара
            this.updateProgressBar();
        }
    }
    
    showConfiguration() {
        const configSection = document.querySelector('.test-config');
        const testSection = document.getElementById('active-test');
        
        if (configSection && testSection) {
            configSection.style.display = 'block';
            testSection.style.display = 'none';
           
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
    
    startTimer() {
        const timerElement = document.getElementById('timer-value');
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            
            if (timerElement) {
                timerElement.textContent = NavigationManager.formatTime(this.timeLeft);
            }
            
          
            if (this.timeLeft <= 60) {
                timerElement?.parentElement.classList.add('warning');
            }
            
            if (this.timeLeft <= 30) {
                timerElement?.parentElement.classList.add('critical');
            }
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.finishTest();
            }
        }, 1000);
    }
    
    loadQuestion(index) {
        if (!this.currentTest || index < 0 || index >= this.currentTest.length) {
            console.error('Неверный индекс вопроса:', index);
            return;
        }
        
        this.currentQuestionIndex = index;
        const question = this.currentTest[index];
        
        console.log('Загрузка вопроса', index, question);
        
       
        const currentQuestionElement = document.getElementById('current-question');
        if (currentQuestionElement) {
            currentQuestionElement.textContent = index + 1;
        }
        
        this.updateProgressBar();
        this.updateNavigationButtons();
        
       
        const questionCard = document.getElementById('question-card');
        if (!questionCard) {
            console.error('Не найден элемент question-card');
            return;
        }
        
        const userAnswer = this.userAnswers[index];
        const optionsHTML = this.createOptionsHTML(question.options, userAnswer);
        
        questionCard.innerHTML = `
            <div class="question-header">
                <div class="question-number">Вопрос ${index + 1}</div>
                ${question.hint ? `
                <div class="question-hint">
                    <i class="fas fa-lightbulb"></i> Подсказка: ${question.hint}
                </div>
                ` : ''}
            </div>
            
            <div class="question-text">
                ${question.question}
            </div>
            
            <div class="question-options">
                ${optionsHTML}
            </div>
            
            ${userAnswer !== null ? `
            <div class="answer-feedback">
                <i class="fas fa-check-circle"></i>
                <span>Вы выбрали: ${userAnswer}</span>
            </div>
            ` : ''}
        `;
        
      
        document.querySelectorAll('.option').forEach((option, optionIndex) => {
            option.addEventListener('click', () => {
                this.selectAnswer(index, question.options[optionIndex]);
            });
        });
    }
    
    createOptionsHTML(options, selectedAnswer) {
        if (!options || !Array.isArray(options)) {
            return '<p>Ошибка загрузки вариантов ответа</p>';
        }
        
        return options.map((option, index) => {
            const isSelected = option === selectedAnswer;
            const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
            
            return `
                <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                    <div class="option-selector">
                        <div class="option-letter">${optionLetter}</div>
                        <div class="option-dot ${isSelected ? 'active' : ''}"></div>
                    </div>
                    <div class="option-text">${option}</div>
                </div>
            `;
        }).join('');
    }
    
    selectAnswer(questionIndex, answer) {
        if (questionIndex >= 0 && questionIndex < this.userAnswers.length) {
            this.userAnswers[questionIndex] = answer;
            
        
            if (questionIndex === this.currentQuestionIndex) {
                this.loadQuestion(questionIndex);
            }
            
          
            if (questionIndex < this.currentTest.length - 1) {
                setTimeout(() => {
                    this.navigateToQuestion(questionIndex + 1);
                }, 500);
            }
        }
    }
    
    navigateToQuestion(index) {
        if (index >= 0 && index < this.currentTest.length) {
            this.loadQuestion(index);
        }
    }
    
    updateProgressBar() {
        const progressFill = document.getElementById('progress-fill');
        if (progressFill && this.currentTest) {
            const progress = ((this.currentQuestionIndex + 1) / this.currentTest.length) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        const finishBtn = document.getElementById('finish-test');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }
        
        if (nextBtn && finishBtn) {
            const isLastQuestion = this.currentQuestionIndex === this.currentTest.length - 1;
            nextBtn.style.display = isLastQuestion ? 'none' : 'block';
            finishBtn.style.display = isLastQuestion ? 'block' : 'none';
        }
    }
    
    finishTest() {
        console.log('Завершение теста...');
        
        // Остановка таймера
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // Подсчёт результатов
        const results = this.calculateResults();
        
        if (!results) {
            console.error('Не удалось рассчитать результаты');
            return;
        }
        
        console.log('Результаты теста:', results);
        
        // Сохранение статистики
        if (typeof NavigationManager !== 'undefined') {
            NavigationManager.updateStatistics(results);
        }
        
        // Сохранение результатов для отображения
        sessionStorage.setItem('testResults', JSON.stringify(results));
        
        // Переход на страницу результатов
        window.location.href = 'tests.html';
    }
    
    calculateResults() {
        if (!this.currentTest || this.userAnswers.length === 0) {
            console.error('Нет данных для расчета результатов');
            return null;
        }
        
        let correctAnswers = 0;
        const detailedResults = [];
        
        this.currentTest.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            if (isCorrect) {
                correctAnswers++;
            }
            
            detailedResults.push({
                question: question.question,
                correctAnswer: question.correctAnswer,
                userAnswer: userAnswer || 'Не отвечено',
                isCorrect: isCorrect,
                options: question.options,
                hint: question.hint
            });
        });
        
        const score = Math.round((correctAnswers / this.currentTest.length) * 100);
        
        // Получаем настройки теста
        const difficultyElement = document.getElementById('difficulty');
        const continentElement = document.getElementById('continent');
        
        const difficulty = difficultyElement ? difficultyElement.value : 'medium';
        const continent = continentElement ? continentElement.value : 'all';
        
        return {
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: this.currentTest.length,
            percentage: score,
            timeSpent: difficulty === 'hard' ? 300 - this.timeLeft : null,
            difficulty: difficulty,
            continent: continent,
            detailedResults: detailedResults,
            timestamp: new Date().toISOString()
        };
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница тестов загружена');
    
    // Проверяем, находимся ли мы на странице тестов
    if (document.getElementById('start-test')) {
        // Ждем загрузки DataManager
        const checkDataManager = setInterval(() => {
            if (typeof DataManager !== 'undefined') {
                clearInterval(checkDataManager);
                console.log('DataManager загружен, создаем TestManager');
                window.testManager = new TestManager();
            }
        }, 100);
        
        // Если DataManager не загрузился через 5 секунд
        setTimeout(() => {
            if (typeof DataManager === 'undefined') {
                console.error('DataManager не загрузился');
                const statsPreview = document.getElementById('stats-preview');
                if (statsPreview) {
                    statsPreview.innerHTML = `
                        <div class="no-stats">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>Ошибка загрузки базы данных</p>
                        </div>
                    `;
                }
            }
        }, 5000);
    }
});