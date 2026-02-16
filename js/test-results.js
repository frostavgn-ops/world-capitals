// test-results.js - Результаты тестов
console.log('test-results.js загружен');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница результатов тестов готова');
    
    // Загрузка результатов из localStorage
    const results = localStorage.getItem('testResults');
    if (results) {
        console.log('Найдены результаты тестов:', JSON.parse(results));
    } else {
        console.log('Результаты тестов не найдены');
    }
});