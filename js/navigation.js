

document.addEventListener('DOMContentLoaded', function() {
    console.log('Navigation.js загружен');
    
   
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
     
        const savedTheme = localStorage.getItem('theme') || 'light';
        
     
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
  
        themeToggle.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            this.innerHTML = isDark ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
        });
    }
    
  
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
           
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
   
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveNavLink();
    
  
    window.NavigationManager = {
        formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        },
        
        showNotification(message, type = 'info') {
            // Создаем уведомление
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                    <span>${message}</span>
                </div>
            `;
            
         
            const style = document.createElement('style');
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: var(--radius-md);
                    color: white;
                    z-index: 10000;
                    animation: slideIn 0.3s ease-out;
                    max-width: 300px;
                    box-shadow: var(--shadow-lg);
                }
                
                .notification-success {
                    background: var(--color-success);
                }
                
                .notification-error {
                    background: var(--color-error);
                }
                
                .notification-info {
                    background: var(--color-secondary);
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            document.body.appendChild(notification);
            
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        },
        
        loadStatistics() {
            const stats = JSON.parse(localStorage.getItem('testStatistics') || '{}');
            return {
                testsTaken: stats.testsTaken || 0,
                averageScore: stats.averageScore || 0,
                bestScore: stats.bestScore || 0,
                correctAnswers: stats.correctAnswers || 0,
                totalQuestions: stats.totalQuestions || 0,
                byContinent: stats.byContinent || {}
            };
        },
        
        updateStatistics(results) {
            const stats = this.loadStatistics();
            
          
            stats.testsTaken = (stats.testsTaken || 0) + 1;
            
          
            const totalScore = (stats.averageScore || 0) * (stats.testsTaken - 1) + results.score;
            stats.averageScore = Math.round(totalScore / stats.testsTaken);
            
       
            if (results.score > (stats.bestScore || 0)) {
                stats.bestScore = results.score;
            }
            
          
            stats.correctAnswers = (stats.correctAnswers || 0) + results.correctAnswers;
            stats.totalQuestions = (stats.totalQuestions || 0) + results.totalQuestions;
            
         
            if (!stats.byContinent) stats.byContinent = {};
            if (!stats.byContinent[results.continent]) {
                stats.byContinent[results.continent] = {
                    tests: 0,
                    averageScore: 0
                };
            }
            
            const continentStats = stats.byContinent[results.continent];
            continentStats.tests++;
            const continentTotalScore = continentStats.averageScore * (continentStats.tests - 1) + results.score;
            continentStats.averageScore = Math.round(continentTotalScore / continentStats.tests);
            
          
            localStorage.setItem('testStatistics', JSON.stringify(stats));
        }
    };
});