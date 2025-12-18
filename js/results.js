

class ResultsManager {
    constructor() {
        this.results = null;
        this.stats = null;
        
        this.init();
    }
    
    init() {
        console.log('ResultsManager инициализирован');
        this.loadResults();
        this.displayResults();
        this.displayStatistics();
        this.setupEventListeners();
        this.checkForConfetti();
    }
    
    loadResults() {
        const resultsJson = sessionStorage.getItem('testResults');
        if (resultsJson) {
            try {
                this.results = JSON.parse(resultsJson);
                console.log('Результаты загружены:', this.results);
            } catch (e) {
                console.error('Ошибка парсинга результатов:', e);
                this.redirectToTests();
            }
        } else {
            console.log('Нет сохраненных результатов, перенаправляем...');
            this.redirectToTests();
        }
        
        
        if (typeof NavigationManager !== 'undefined') {
            this.stats = NavigationManager.loadStatistics();
        }
    }
    
    redirectToTests() {
        setTimeout(() => {
            window.location.href = 'tests.html';
        }, 2000);
    }
    
    displayResults() {
        if (!this.results) return;
        
      
        const scorePercentage = document.getElementById('score-percentage');
        const correctAnswers = document.getElementById('correct-answers');
        
        if (scorePercentage) {
            scorePercentage.textContent = `${this.results.score}%`;
        }
        
        if (correctAnswers) {
            correctAnswers.textContent = `${this.results.correctAnswers}/${this.results.totalQuestions}`;
        }
        
  
        const timeSpent = document.getElementById('time-spent');
        if (timeSpent && this.results.timeSpent && typeof NavigationManager !== 'undefined') {
            timeSpent.textContent = NavigationManager.formatTime(this.results.timeSpent);
        }
        
      
        const difficultyElement = document.getElementById('difficulty');
        if (difficultyElement) {
            const difficultyNames = {
                easy: 'Легкий',
                medium: 'Средний',
                hard: 'Сложный'
            };
            difficultyElement.textContent = difficultyNames[this.results.difficulty] || this.results.difficulty;
        }
        
      
        const continentElement = document.getElementById('continent');
        if (continentElement) {
            const continentNames = {
                all: 'Все континенты',
                europe: 'Европа',
                asia: 'Азия',
                africa: 'Африка',
                'north-america': 'Северная Америка',
                'south-america': 'Южная Америка',
                oceania: 'Океания'
            };
            continentElement.textContent = continentNames[this.results.continent] || this.results.continent;
        }
        
      
        this.updateProgressCircle(this.results.score);
        
     
        this.displayPerformanceMessage(this.results.score);
        
       
        this.displayDetailedResults(this.results.detailedResults);
    }
    
    updateProgressCircle(score) {
        const circle = document.getElementById('circle-progress');
        if (!circle) return;
        
        
        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (score / 100) * circumference;
        
        circle.innerHTML = `
            <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="${radius}" 
                        stroke="var(--color-border)" 
                        stroke-width="8" 
                        fill="none" />
                <circle id="progress-circle" cx="75" cy="75" r="${radius}" 
                        stroke="var(--color-primary)" 
                        stroke-width="8" 
                        fill="none"
                        stroke-dasharray="${circumference}"
                        stroke-dashoffset="${circumference}"
                        transform="rotate(-90 75 75)" />
            </svg>
        `;
        
      
        setTimeout(() => {
            const progressCircle = document.getElementById('progress-circle');
            if (progressCircle) {
                progressCircle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
                progressCircle.style.strokeDashoffset = offset;
            }
        }, 100);
    }
    
    displayPerformanceMessage(score) {
        const messageElement = document.getElementById('performance-message');
        if (!messageElement) return;
        
        let message = '';
        let icon = '';
        let colorClass = '';
        
        if (score === 100) {
            message = 'Идеальный результат! Вы знаток географии!';
            icon = 'fa-trophy';
            colorClass = 'perfect';
        } else if (score >= 80) {
            message = 'Отличный результат! Продолжайте в том же духе!';
            icon = 'fa-star';
            colorClass = 'excellent';
        } else if (score >= 60) {
            message = 'Хороший результат! Есть куда стремиться!';
            icon = 'fa-thumbs-up';
            colorClass = 'good';
        } else if (score >= 40) {
            message = 'Неплохо! Изучите базу знаний для улучшения результата.';
            icon = 'fa-chart-line';
            colorClass = 'average';
        } else {
            message = 'Попробуйте ещё раз! Изучите базу знаний перед следующим тестом.';
            icon = 'fa-redo';
            colorClass = 'poor';
        }
        
        messageElement.innerHTML = `
            <div class="message-content ${colorClass}">
                <div class="message-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="message-text">
                    <h3>${message}</h3>
                    <p>${this.getImprovementTip(score)}</p>
                </div>
            </div>
        `;
    }
    
    getImprovementTip(score) {
        if (score >= 90) return 'Вы практически эксперт! Попробуйте сложный уровень.';
        if (score >= 70) return 'Сосредоточьтесь на континентах, где допустили ошибки.';
        if (score >= 50) return 'Изучите столицы небольших стран и островных государств.';
        return 'Начните с лёгкого уровня и постепенно повышайте сложность.';
    }
    
    displayDetailedResults(detailedResults) {
        const questionsList = document.getElementById('questions-list');
        if (!questionsList || !detailedResults) return;
        
        const questionsHTML = detailedResults.map((result, index) => {
            const isCorrect = result.isCorrect;
            const userAnswer = result.userAnswer || 'Не отвечено';
            
            return `
                <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="question-result-header">
                        <div class="question-number">${index + 1}</div>
                        <div class="question-status">
                            ${isCorrect ? 
                                '<i class="fas fa-check-circle"></i> Правильно' : 
                                '<i class="fas fa-times-circle"></i> Неправильно'
                            }
                        </div>
                    </div>
                    
                    <div class="question-result-content">
                        <div class="question-text">${result.question}</div>
                        
                        <div class="answer-comparison">
                            <div class="answer correct-answer">
                                <div class="answer-label">
                                    <i class="fas fa-check"></i> Правильный ответ:
                                </div>
                                <div class="answer-text">${result.correctAnswer}</div>
                            </div>
                            
                            ${!isCorrect ? `
                            <div class="answer user-answer">
                                <div class="answer-label">
                                    <i class="fas fa-user"></i> Ваш ответ:
                                </div>
                                <div class="answer-text">${userAnswer}</div>
                            </div>
                            ` : ''}
                        </div>
                        
                        ${result.hint ? `
                        <div class="question-hint-small">
                            <i class="fas fa-lightbulb"></i> Подсказка: ${result.hint}
                        </div>
                        ` : ''}
                        
                        <div class="options-list">
                            ${result.options.map((option, optIndex) => {
                                const optionLetter = String.fromCharCode(65 + optIndex);
                                const isCorrectOption = option === result.correctAnswer;
                                const isUserOption = option === userAnswer;
                                
                                let optionClass = '';
                                if (isCorrectOption) optionClass = 'correct-option';
                                if (!isCorrect && isUserOption) optionClass = 'incorrect-option';
                                
                                return `
                                    <div class="option-result ${optionClass}">
                                        <span class="option-letter">${optionLetter}</span>
                                        <span class="option-text">${option}</span>
                                        ${isCorrectOption ? '<i class="fas fa-check"></i>' : ''}
                                        ${(!isCorrect && isUserOption) ? '<i class="fas fa-times"></i>' : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        questionsList.innerHTML = questionsHTML;
    }
    
    displayStatistics() {
        if (!this.stats) return;
        
        const totalTests = document.getElementById('total-tests');
        const averageScore = document.getElementById('average-score');
        const bestScore = document.getElementById('best-score');
        
        if (totalTests) totalTests.textContent = this.stats.testsTaken;
        if (averageScore) averageScore.textContent = `${this.stats.averageScore}%`;
        if (bestScore) bestScore.textContent = `${this.stats.bestScore}%`;
    }
    
    setupEventListeners() {
        // Кнопка поделиться
        const shareBtn = document.getElementById('share-results');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.shareResults();
            });
        }
    }
    
    shareResults() {
        if (!this.results) return;
        
        const shareText = `Я прошёл тест на знание столиц стран мира и набрал ${this.results.score}%! 
Правильных ответов: ${this.results.correctAnswers}/${this.results.totalQuestions}
Попробуй и ты!`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Мои результаты теста по столицам стран мира',
                text: shareText,
                url: window.location.href
            });
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                if (typeof NavigationManager !== 'undefined') {
                    NavigationManager.showNotification('Результаты скопированы в буфер обмена!', 'success');
                } else {
                    alert('Результаты скопированы в буфер обмена!');
                }
            });
        } else {
          
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            alert('Результаты скопированы в буфер обмена!');
        }
    }
    
    checkForConfetti() {
        if (this.results && this.results.score === 100) {
            this.createConfetti();
        }
    }
    
    createConfetti() {
        const confettiCount = 150;
        const colors = ['#1B4B7A', '#0DA9E6', '#FFC857', '#10B981', '#F59E0B'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Случайные свойства
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            confetti.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                left: ${left}vw;
                top: -20px;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: confetti-fall ${duration}s ease-in ${delay}s forwards;
            `;
            
            document.body.appendChild(confetti);
            
            // Удаление после анимации
            setTimeout(() => {
                confetti.remove();
            }, (duration + delay) * 1000);
        }
        
        // Добавляем CSS анимацию
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confetti-fall {
                0% {
                    transform: translateY(-100vh) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница результатов загружена');
    
   
    if (document.getElementById('results-card')) {
        new ResultsManager();
    }
});