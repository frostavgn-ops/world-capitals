

const countriesDatabase = {
    continents: [
        { id: 'all', name: 'Все континенты', emoji: '🌍' },
        { id: 'europe', name: 'Европа', emoji: '🇪🇺' },
        { id: 'asia', name: 'Азия', emoji: '🌏' },
        { id: 'africa', name: 'Африка', emoji: '🌍' },
        { id: 'north-america', name: 'Северная Америка', emoji: '🌎' },
        { id: 'south-america', name: 'Южная Америка', emoji: '🌎' },
        { id: 'oceania', name: 'Океания', emoji: '🌊' }
    ],
    
    difficultyLevels: [
        { id: 'easy', name: 'Легкий', description: 'С подсказками', questions: 10, time: null },
        { id: 'medium', name: 'Средний', description: 'Без подсказок', questions: 15, time: null },
        { id: 'hard', name: 'Сложный', description: 'На время', questions: 20, time: 300 }
    ],

   
    countries: [
        
        {
            id: 1, name: "Россия", capital: "Москва", continent: "europe",
            population: 146.7, area: 17098, flag: "🇷🇺",
            languages: ["Русский"], currency: "Рубль (RUB)",
            timezone: "Московское время (UTC+3)", established: 1147,
            fact: "Крупнейшая страна в мире"
        },
        {
            id: 2, name: "Германия", capital: "Берлин", continent: "europe",
            population: 83.2, area: 357, flag: "🇩🇪",
            languages: ["Немецкий"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1237,
            fact: "Столица была разделена стеной"
        },
        {
            id: 3, name: "Франция", capital: "Париж", continent: "europe",
            population: 67.4, area: 643, flag: "🇫🇷",
            languages: ["Французский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 259,
            fact: "Город света и любви"
        },
        {
            id: 4, name: "Великобритания", capital: "Лондон", continent: "europe",
            population: 67.9, area: 243, flag: "🇬🇧",
            languages: ["Английский"], currency: "Фунт стерлингов (GBP)",
            timezone: "GMT (UTC+0)", established: 43,
            fact: "На нулевом меридиане"
        },
        {
            id: 5, name: "Италия", capital: "Рим", continent: "europe",
            population: 59.6, area: 301, flag: "🇮🇹",
            languages: ["Итальянский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: -753,
            fact: "Вечный город"
        },
        {
            id: 6, name: "Испания", capital: "Мадрид", continent: "europe",
            population: 47.4, area: 506, flag: "🇪🇸",
            languages: ["Испанский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1083,
            fact: "Географический центр страны"
        },
        {
            id: 7, name: "Украина", capital: "Киев", continent: "europe",
            population: 41.3, area: 603, flag: "🇺🇦",
            languages: ["Украинский"], currency: "Гривна (UAH)",
            timezone: "EET (UTC+2)", established: 482,
            fact: "Мать городов русских"
        },
        {
            id: 8, name: "Польша", capital: "Варшава", continent: "europe",
            population: 37.8, area: 312, flag: "🇵🇱",
            languages: ["Польский"], currency: "Злотый (PLN)",
            timezone: "CET (UTC+1)", established: 1300,
            fact: "Столица-феникс"
        },
        {
            id: 9, name: "Румыния", capital: "Бухарест", continent: "europe",
            population: 19.3, area: 238, flag: "🇷🇴",
            languages: ["Румынский"], currency: "Лей (RON)",
            timezone: "EET (UTC+2)", established: 1459,
            fact: "Маленький Париж"
        },
        {
            id: 10, name: "Нидерланды", capital: "Амстердам", continent: "europe",
            population: 17.5, area: 41, flag: "🇳🇱",
            languages: ["Нидерландский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1275,
            fact: "Построена на сваях"
        },
        {
            id: 11, name: "Бельгия", capital: "Брюссель", continent: "europe",
            population: 11.6, area: 30, flag: "🇧🇪",
            languages: ["Нидерландский", "Французский", "Немецкий"],
            currency: "Евро (EUR)", timezone: "CET (UTC+1)", established: 979,
            fact: "Столица ЕС и НАТО"
        },
        {
            id: 12, name: "Чехия", capital: "Прага", continent: "europe",
            population: 10.7, area: 79, flag: "🇨🇿",
            languages: ["Чешский"], currency: "Крона (CZK)",
            timezone: "CET (UTC+1)", established: 870,
            fact: "Город сотни шпилей"
        },
        {
            id: 13, name: "Греция", capital: "Афины", continent: "europe",
            population: 10.4, area: 132, flag: "🇬🇷",
            languages: ["Греческий"], currency: "Евро (EUR)",
            timezone: "EET (UTC+2)", established: -1400,
            fact: "Колыбель демократии"
        },
        {
            id: 14, name: "Португалия", capital: "Лиссабон", continent: "europe",
            population: 10.3, area: 92, flag: "🇵🇹",
            languages: ["Португальский"], currency: "Евро (EUR)",
            timezone: "WET (UTC+0)", established: -1200,
            fact: "Одна из древнейших столиц"
        },
        {
            id: 15, name: "Швеция", capital: "Стокгольм", continent: "europe",
            population: 10.4, area: 450, flag: "🇸🇪",
            languages: ["Шведский"], currency: "Крона (SEK)",
            timezone: "CET (UTC+1)", established: 1252,
            fact: "Город на 14 островах"
        },
        {
            id: 16, name: "Венгрия", capital: "Будапешт", continent: "europe",
            population: 9.6, area: 93, flag: "🇭🇺",
            languages: ["Венгерский"], currency: "Форинт (HUF)",
            timezone: "CET (UTC+1)", established: 1873,
            fact: "Жемчужина Дуная"
        },
        {
            id: 17, name: "Белоруссия", capital: "Минск", continent: "europe",
            population: 9.4, area: 207, flag: "🇧🇾",
            languages: ["Белорусский", "Русский"], currency: "Белорусский рубль (BYN)",
            timezone: "МСК (UTC+3)", established: 1067,
            fact: "Город-герой"
        },
        {
            id: 18, name: "Австрия", capital: "Вена", continent: "europe",
            population: 9.0, area: 83, flag: "🇦🇹",
            languages: ["Немецкий"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: -500,
            fact: "Город музыки"
        },
        {
            id: 19, name: "Швейцария", capital: "Берн", continent: "europe",
            population: 8.7, area: 41, flag: "🇨🇭",
            languages: ["Немецкий", "Французский", "Итальянский", "Романшский"],
            currency: "Франк (CHF)", timezone: "CET (UTC+1)", established: 1191,
            fact: "Федеральный город"
        },
        {
            id: 20, name: "Болгария", capital: "София", continent: "europe",
            population: 6.9, area: 111, flag: "🇧🇬",
            languages: ["Болгарский"], currency: "Лев (BGN)",
            timezone: "EET (UTC+2)", established: 29,
            fact: "Год рождения Иисуса"
        },
        {
            id: 21, name: "Сербия", capital: "Белград", continent: "europe",
            population: 6.7, area: 88, flag: "🇷🇸",
            languages: ["Сербский"], currency: "Динар (RSD)",
            timezone: "CET (UTC+1)", established: 279,
            fact: "Белый город"
        },
        {
            id: 22, name: "Дания", capital: "Копенгаген", continent: "europe",
            population: 5.8, area: 43, flag: "🇩🇰",
            languages: ["Датский"], currency: "Крона (DKK)",
            timezone: "CET (UTC+1)", established: 1167,
            fact: "Город сказок"
        },
        {
            id: 23, name: "Финляндия", capital: "Хельсинки", continent: "europe",
            population: 5.5, area: 338, flag: "🇫🇮",
            languages: ["Финский", "Шведский"], currency: "Евро (EUR)",
            timezone: "EET (UTC+2)", established: 1550,
            fact: "Дочь Балтики"
        },
        {
            id: 24, name: "Словакия", capital: "Братислава", continent: "europe",
            population: 5.5, area: 49, flag: "🇸🇰",
            languages: ["Словацкий"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 907,
            fact: "Город на границе двух стран"
        },
        {
            id: 25, name: "Норвегия", capital: "Осло", continent: "europe",
            population: 5.4, area: 385, flag: "🇳🇴",
            languages: ["Норвежский"], currency: "Крона (NOK)",
            timezone: "CET (UTC+1)", established: 1000,
            fact: "Столица фьордов"
        },
        {
            id: 26, name: "Ирландия", capital: "Дублин", continent: "europe",
            population: 5.0, area: 70, flag: "🇮🇪",
            languages: ["Ирландский", "Английский"], currency: "Евро (EUR)",
            timezone: "GMT (UTC+0)", established: 841,
            fact: "Столица виски"
        },
        {
            id: 27, name: "Хорватия", capital: "Загреб", continent: "europe",
            population: 4.0, area: 56, flag: "🇭🇷",
            languages: ["Хорватский"], currency: "Куна (HRK)",
            timezone: "CET (UTC+1)", established: 1094,
            fact: "Город чаберя и души"
        },
        {
            id: 28, name: "Босния и Герцеговина", capital: "Сараево", continent: "europe",
            population: 3.3, area: 51, flag: "🇧🇦",
            languages: ["Боснийский", "Сербский", "Хорватский"],
            currency: "Конвертируемая марка (BAM)", timezone: "CET (UTC+1)", established: 1462,
            fact: "Место начала Первой мировой"
        },
        {
            id: 29, name: "Албания", capital: "Тирана", continent: "europe",
            population: 2.8, area: 28, flag: "🇦🇱",
            languages: ["Албанский"], currency: "Лек (ALL)",
            timezone: "CET (UTC+1)", established: 1614,
            fact: "Столица - самый солнечный город Европы"
        },
        {
            id: 30, name: "Литва", capital: "Вильнюс", continent: "europe",
            population: 2.7, area: 65, flag: "🇱🇹",
            languages: ["Литовский"], currency: "Евро (EUR)",
            timezone: "EET (UTC+2)", established: 1323,
            fact: "Одна из старейших столиц Европы"
        },
        {
            id: 31, name: "Словения", capital: "Любляна", continent: "europe",
            population: 2.1, area: 20, flag: "🇸🇮",
            languages: ["Словенский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1144,
            fact: "Зелёный город"
        },
        {
            id: 32, name: "Латвия", capital: "Рига", continent: "europe",
            population: 1.9, area: 64, flag: "🇱🇻",
            languages: ["Латышский"], currency: "Евро (EUR)",
            timezone: "EET (UTC+2)", established: 1201,
            fact: "Жемчужина Балтики"
        },
        {
            id: 33, name: "Эстония", capital: "Таллин", continent: "europe",
            population: 1.3, area: 45, flag: "🇪🇪",
            languages: ["Эстонский"], currency: "Евро (EUR)",
            timezone: "EET (UTC+2)", established: 1154,
            fact: "Столица старого города"
        },
        {
            id: 34, name: "Северная Македония", capital: "Скопье", continent: "europe",
            population: 2.1, area: 25, flag: "🇲🇰",
            languages: ["Македонский"], currency: "Денар (MKD)",
            timezone: "CET (UTC+1)", established: 6,
            fact: "Столица матери Терезы"
        },
        {
            id: 35, name: "Черногория", capital: "Подгорица", continent: "europe",
            population: 0.6, area: 14, flag: "🇲🇪",
            languages: ["Черногорский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1326,
            fact: "Под горой"
        },
        {
            id: 36, name: "Люксембург", capital: "Люксембург", continent: "europe",
            population: 0.6, area: 3, flag: "🇱🇺",
            languages: ["Люксембургский", "Французский", "Немецкий"],
            currency: "Евро (EUR)", timezone: "CET (UTC+1)", established: 963,
            fact: "Самая богатая столица ЕС"
        },
        {
            id: 37, name: "Мальта", capital: "Валлетта", continent: "europe",
            population: 0.5, area: 0.3, flag: "🇲🇹",
            languages: ["Мальтийский", "Английский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1566,
            fact: "Европейская столица культуры 2018"
        },
        {
            id: 38, name: "Исландия", capital: "Рейкьявик", continent: "europe",
            population: 0.4, area: 103, flag: "🇮🇸",
            languages: ["Исландский"], currency: "Крона (ISK)",
            timezone: "GMT (UTC+0)", established: 874,
            fact: "Самая северная столица мира"
        },
        {
            id: 39, name: "Андорра", capital: "Андорра-ла-Велья", continent: "europe",
            population: 0.1, area: 0.5, flag: "🇦🇩",
            languages: ["Каталанский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1278,
            fact: "Столица на высоте 1029 м"
        },
        {
            id: 40, name: "Монако", capital: "Монако", continent: "europe",
            population: 0.04, area: 0.002, flag: "🇲🇨",
            languages: ["Французский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1215,
            fact: "Вторая самая маленькая страна"
        },
        {
            id: 41, name: "Лихтенштейн", capital: "Вадуц", continent: "europe",
            population: 0.04, area: 0.16, flag: "🇱🇮",
            languages: ["Немецкий"], currency: "Франк (CHF)",
            timezone: "CET (UTC+1)", established: 1342,
            fact: "Столица-замок"
        },
        {
            id: 42, name: "Сан-Марино", capital: "Сан-Марино", continent: "europe",
            population: 0.03, area: 0.06, flag: "🇸🇲",
            languages: ["Итальянский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 301,
            fact: "Старейшая республика"
        },
        {
            id: 43, name: "Ватикан", capital: "Ватикан", continent: "europe",
            population: 0.0008, area: 0.00044, flag: "🇻🇦",
            languages: ["Латинский", "Итальянский"], currency: "Евро (EUR)",
            timezone: "CET (UTC+1)", established: 1929,
            fact: "Самая маленькая страна"
        },

        // ================= АЗИЯ (48 стран) =================
        {
            id: 44, name: "Китай", capital: "Пекин", continent: "asia",
            population: 1402.1, area: 9597, flag: "🇨🇳",
            languages: ["Китайский"], currency: "Юань (CNY)",
            timezone: "CST (UTC+8)", established: -1045,
            fact: "Запретный город"
        },
        {
            id: 45, name: "Индия", capital: "Нью-Дели", continent: "asia",
            population: 1380.0, area: 3287, flag: "🇮🇳",
            languages: ["Хинди", "Английский"], currency: "Рупия (INR)",
            timezone: "IST (UTC+5:30)", established: 1911,
            fact: "Спроектированный город"
        },
        {
            id: 46, name: "Индонезия", capital: "Джакарта", continent: "asia",
            population: 273.5, area: 1919, flag: "🇮🇩",
            languages: ["Индонезийский"], currency: "Рупия (IDR)",
            timezone: "WIB (UTC+7)", established: 397,
            fact: "Большой дуриан"
        },
        {
            id: 47, name: "Пакистан", capital: "Исламабад", continent: "asia",
            population: 220.9, area: 881, flag: "🇵🇰",
            languages: ["Урду", "Английский"], currency: "Рупия (PKR)",
            timezone: "PKT (UTC+5)", established: 1960,
            fact: "Спроектированный город"
        },
        {
            id: 48, name: "Бангладеш", capital: "Дакка", continent: "asia",
            population: 164.7, area: 148, flag: "🇧🇩",
            languages: ["Бенгальский"], currency: "Така (BDT)",
            timezone: "BST (UTC+6)", established: 1608,
            fact: "Город рикш"
        },
        {
            id: 49, name: "Япония", capital: "Токио", continent: "asia",
            population: 125.8, area: 378, flag: "🇯🇵",
            languages: ["Японский"], currency: "Иена (JPY)",
            timezone: "JST (UTC+9)", established: 1457,
            fact: "Восточная столица"
        },
        {
            id: 50, name: "Филиппины", capital: "Манила", continent: "asia",
            population: 109.6, area: 300, flag: "🇵🇭",
            languages: ["Филиппинский", "Английский"], currency: "Песо (PHP)",
            timezone: "PHT (UTC+8)", established: 1571,
            fact: "Жемчужина Востока"
        },
        {
            id: 51, name: "Вьетнам", capital: "Ханой", continent: "asia",
            population: 97.3, area: 331, flag: "🇻🇳",
            languages: ["Вьетнамский"], currency: "Донг (VND)",
            timezone: "ICT (UTC+7)", established: 1010,
            fact: "Внутри реки"
        },
        {
            id: 52, name: "Турция", capital: "Анкара", continent: "asia",
            population: 84.3, area: 783, flag: "🇹🇷",
            languages: ["Турецкий"], currency: "Лира (TRY)",
            timezone: "TRT (UTC+3)", established: 1923,
            fact: "Мать Анатолии"
        },
        {
            id: 53, name: "Иран", capital: "Тегеран", continent: "asia",
            population: 83.9, area: 1648, flag: "🇮🇷",
            languages: ["Персидский"], currency: "Риал (IRR)",
            timezone: "IRST (UTC+3:30)", established: 1796,
            fact: "Самый загрязнённый город"
        },
        {
            id: 54, name: "Таиланд", capital: "Бангкок", continent: "asia",
            population: 69.8, area: 513, flag: "🇹🇭",
            languages: ["Тайский"], currency: "Бат (THB)",
            timezone: "ICT (UTC+7)", established: 1782,
            fact: "Город ангелов"
        },
        {
            id: 55, name: "Мьянма", capital: "Нейпьидо", continent: "asia",
            population: 54.4, area: 677, flag: "🇲🇲",
            languages: ["Бирманский"], currency: "Кьят (MMK)",
            timezone: "MMT (UTC+6:30)", established: 2005,
            fact: "Королевская страна"
        },
        {
            id: 56, name: "Южная Корея", capital: "Сеул", continent: "asia",
            population: 51.7, area: 100, flag: "🇰🇷",
            languages: ["Корейский"], currency: "Вона (KRW)",
            timezone: "KST (UTC+9)", established: -18,
            fact: "Особая столица"
        },
        {
            id: 57, name: "Ирак", capital: "Багдад", continent: "asia",
            population: 40.2, area: 438, flag: "🇮🇶",
            languages: ["Арабский", "Курдский"], currency: "Динар (IQD)",
            timezone: "AST (UTC+3)", established: 762,
            fact: "Город мира"
        },
        {
            id: 58, name: "Афганистан", capital: "Кабул", continent: "asia",
            population: 38.9, area: 652, flag: "🇦🇫",
            languages: ["Дари", "Пушту"], currency: "Афгани (AFN)",
            timezone: "AFT (UTC+4:30)", established: 1776,
            fact: "Город на перекрёстке"
        },
        {
            id: 59, name: "Саудовская Аравия", capital: "Эр-Рияд", continent: "asia",
            population: 34.8, area: 2149, flag: "🇸🇦",
            languages: ["Арабский"], currency: "Риал (SAR)",
            timezone: "AST (UTC+3)", established: 1824,
            fact: "Сад"
        },
        {
            id: 60, name: "Узбекистан", capital: "Ташкент", continent: "asia",
            population: 34.2, area: 447, flag: "🇺🇿",
            languages: ["Узбекский"], currency: "Сум (UZS)",
            timezone: "UZT (UTC+5)", established: 1865,
            fact: "Каменный город"
        },
        {
            id: 61, name: "Малайзия", capital: "Куала-Лумпур", continent: "asia",
            population: 32.7, area: 330, flag: "🇲🇾",
            languages: ["Малайский"], currency: "Ринггит (MYR)",
            timezone: "MYT (UTC+8)", established: 1857,
            fact: "Грязное устье"
        },
        {
            id: 62, name: "Йемен", capital: "Сана", continent: "asia",
            population: 29.8, area: 528, flag: "🇾🇪",
            languages: ["Арабский"], currency: "Риал (YER)",
            timezone: "AST (UTC+3)", established: 1750,
            fact: "Крепость"
        },
        {
            id: 63, name: "Непал", capital: "Катманду", continent: "asia",
            population: 29.1, area: 147, flag: "🇳🇵",
            languages: ["Непальский"], currency: "Рупия (NPR)",
            timezone: "NPT (UTC+5:45)", established: 723,
            fact: "Город храмов"
        },
        {
            id: 64, name: "КНДР", capital: "Пхеньян", continent: "asia",
            population: 25.8, area: 120, flag: "🇰🇵",
            languages: ["Корейский"], currency: "Вона (KPW)",
            timezone: "KST (UTC+9)", established: 1122,
            fact: "Плоская земля"
        },
        {
            id: 65, name: "Сирия", capital: "Дамаск", continent: "asia",
            population: 17.5, area: 185, flag: "🇸🇾",
            languages: ["Арабский"], currency: "Фунт (SYP)",
            timezone: "EET (UTC+2)", established: -2500,
            fact: "Старейшая столица"
        },
        {
            id: 66, name: "Казахстан", capital: "Нур-Султан", continent: "asia",
            population: 18.8, area: 2724, flag: "🇰🇿",
            languages: ["Казахский", "Русский"], currency: "Тенге (KZT)",
            timezone: "ALMT (UTC+6)", established: 1997,
            fact: "Белый султан"
        },
        {
            id: 67, name: "Шри-Ланка", capital: "Шри-Джаяварденепура-Котте", continent: "asia",
            population: 21.9, area: 66, flag: "🇱🇰",
            languages: ["Сингальский", "Тамильский"], currency: "Рупия (LKR)",
            timezone: "SLST (UTC+5:30)", established: 1982,
            fact: "Благословенный город"
        },
        {
            id: 68, name: "Камбоджа", capital: "Пномпень", continent: "asia",
            population: 16.7, area: 181, flag: "🇰🇭",
            languages: ["Кхмерский"], currency: "Риель (KHR)",
            timezone: "ICT (UTC+7)", established: 1372,
            fact: "Холм Пень"
        },
        {
            id: 69, name: "Иордания", capital: "Амман", continent: "asia",
            population: 10.2, area: 89, flag: "🇯🇴",
            languages: ["Арабский"], currency: "Динар (JOD)",
            timezone: "EET (UTC+2)", established: -7250,
            fact: "Город на семи холмах"
        },
        {
            id: 70, name: "Азербайджан", capital: "Баку", continent: "asia",
            population: 10.1, area: 87, flag: "🇦🇿",
            languages: ["Азербайджанский"], currency: "Манат (AZN)",
            timezone: "AZT (UTC+4)", established: 1135,
            fact: "Город ветров"
        },
        {
            id: 71, name: "ОАЭ", capital: "Абу-Даби", continent: "asia",
            population: 9.9, area: 84, flag: "🇦🇪",
            languages: ["Арабский"], currency: "Дирхам (AED)",
            timezone: "GST (UTC+4)", established: 1761,
            fact: "Отец газели"
        },
        {
            id: 72, name: "Таджикистан", capital: "Душанбе", continent: "asia",
            population: 9.5, area: 143, flag: "🇹🇯",
            languages: ["Таджикский"], currency: "Сомони (TJS)",
            timezone: "TJT (UTC+5)", established: 1924,
            fact: "Понедельник"
        },
        {
            id: 73, name: "Израиль", capital: "Иерусалим", continent: "asia",
            population: 9.3, area: 22, flag: "🇮🇱",
            languages: ["Иврит", "Арабский"], currency: "Шекель (ILS)",
            timezone: "IST (UTC+2)", established: -4000,
            fact: "Город мира"
        },
        {
            id: 74, name: "Лаос", capital: "Вьентьян", continent: "asia",
            population: 7.3, area: 237, flag: "🇱🇦",
            languages: ["Лаосский"], currency: "Кип (LAK)",
            timezone: "ICT (UTC+7)", established: 1560,
            fact: "Город сандалового дерева"
        },
        {
            id: 75, name: "Кыргызстан", capital: "Бишкек", continent: "asia",
            population: 6.6, area: 200, flag: "🇰🇬",
            languages: ["Кыргызский", "Русский"], currency: "Сом (KGS)",
            timezone: "KGT (UTC+6)", established: 1825,
            fact: "Мутовка для кумыса"
        },
        {
            id: 76, name: "Туркменистан", capital: "Ашхабад", continent: "asia",
            population: 6.0, area: 488, flag: "🇹🇲",
            languages: ["Туркменский"], currency: "Манат (TMT)",
            timezone: "TMT (UTC+5)", established: 1881,
            fact: "Город любви"
        },
        {
            id: 77, name: "Сингапур", capital: "Сингапур", continent: "asia",
            population: 5.9, area: 0.7, flag: "🇸🇬",
            languages: ["Английский", "Малайский", "Китайский", "Тамильский"],
            currency: "Доллар (SGD)", timezone: "SGT (UTC+8)", established: 1819,
            fact: "Город льва"
        },
        {
            id: 78, name: "Оман", capital: "Маскат", continent: "asia",
            population: 5.1, area: 310, flag: "🇴🇲",
            languages: ["Арабский"], currency: "Риал (OMR)",
            timezone: "GST (UTC+4)", established: 1775,
            fact: "Место падения"
        },
        {
            id: 79, name: "Государство Палестина", capital: "Рамалла", continent: "asia",
            population: 5.0, area: 6, flag: "🇵🇸",
            languages: ["Арабский"], currency: "Шекель (ILS)",
            timezone: "EET (UTC+2)", established: 1994,
            fact: "Божий холм"
        },
        {
            id: 80, name: "Кувейт", capital: "Эль-Кувейт", continent: "asia",
            population: 4.3, area: 18, flag: "🇰🇼",
            languages: ["Арабский"], currency: "Динар (KWD)",
            timezone: "AST (UTC+3)", established: 1613,
            fact: "Маленькая крепость"
        },
        {
            id: 81, name: "Грузия", capital: "Тбилиси", continent: "asia",
            population: 3.7, area: 69, flag: "🇬🇪",
            languages: ["Грузинский"], currency: "Лари (GEL)",
            timezone: "GET (UTC+4)", established: 455,
            fact: "Тёплый источник"
        },
        {
            id: 82, name: "Монголия", capital: "Улан-Батор", continent: "asia",
            population: 3.3, area: 1564, flag: "🇲🇳",
            languages: ["Монгольский"], currency: "Тугрик (MNT)",
            timezone: "ULAT (UTC+8)", established: 1639,
            fact: "Красный богатырь"
        },
        {
            id: 83, name: "Армения", capital: "Ереван", continent: "asia",
            population: 3.0, area: 29, flag: "🇦🇲",
            languages: ["Армянский"], currency: "Драм (AMD)",
            timezone: "AMT (UTC+4)", established: 782,
            fact: "Крепость Эребуни"
        },
        {
            id: 84, name: "Катар", capital: "Доха", continent: "asia",
            population: 2.9, area: 12, flag: "🇶🇦",
            languages: ["Арабский"], currency: "Риал (QAR)",
            timezone: "AST (UTC+3)", established: 1850,
            fact: "Большое дерево"
        },
        {
            id: 85, name: "Бахрейн", capital: "Манама", continent: "asia",
            population: 1.7, area: 0.8, flag: "🇧🇭",
            languages: ["Арабский"], currency: "Динар (BHD)",
            timezone: "AST (UTC+3)", established: 1783,
            fact: "Место сновидений"
        },
        {
            id: 86, name: "Тимор-Лесте", capital: "Дили", continent: "asia",
            population: 1.3, area: 15, flag: "🇹🇱",
            languages: ["Тетум", "Португальский"], currency: "Доллар США (USD)",
            timezone: "TLT (UTC+9)", established: 1769,
            fact: "Крокодил"
        },
        {
            id: 87, name: "Кипр", capital: "Никосия", continent: "asia",
            population: 1.2, area: 9, flag: "🇨🇾",
            languages: ["Греческий", "Турецкий"], currency: "Евро (EUR)",
            timezone: "EET (UTC+2)", established: -300,
            fact: "Город победы"
        },
        {
            id: 88, name: "Бутан", capital: "Тхимпху", continent: "asia",
            population: 0.8, area: 38, flag: "🇧🇹",
            languages: ["Дзонг-кэ"], currency: "Нгултрум (BTN)",
            timezone: "BTT (UTC+6)", established: 1216,
            fact: "Город сокрытого сокровища"
        },
        {
            id: 89, name: "Мальдивы", capital: "Мале", continent: "asia",
            population: 0.5, area: 0.3, flag: "🇲🇻",
            languages: ["Мальдивский"], currency: "Руфия (MVR)",
            timezone: "MVT (UTC+5)", established: 1153,
            fact: "Королевский остров"
        },
        {
            id: 90, name: "Бруней", capital: "Бандар-Сери-Бегаван", continent: "asia",
            population: 0.4, area: 5.8, flag: "🇧🇳",
            languages: ["Малайский"], currency: "Доллар (BND)",
            timezone: "BNT (UTC+8)", established: 1408,
            fact: "Город его светлости"
        },

      
        {
            id: 91, name: "Нигерия", capital: "Абуджа", continent: "africa",
            population: 206.1, area: 923, flag: "🇳🇬",
            languages: ["Английский"], currency: "Найра (NGN)",
            timezone: "WAT (UTC+1)", established: 1991,
            fact: "Город планирования"
        },
        {
            id: 92, name: "Эфиопия", capital: "Аддис-Абеба", continent: "africa",
            population: 114.9, area: 527, flag: "🇪🇹",
            languages: ["Амхарский"], currency: "Быр (ETB)",
            timezone: "EAT (UTC+3)", established: 1886,
            fact: "Новый цветок"
        },
        {
            id: 93, name: "Египет", capital: "Каир", continent: "africa",
            population: 102.3, area: 1001, flag: "🇪🇬",
            languages: ["Арабский"], currency: "Фунт (EGP)",
            timezone: "EET (UTC+2)", established: 969,
            fact: "Победоносный"
        },
        {
            id: 94, name: "ДР Конго", capital: "Киншаса", continent: "africa",
            population: 89.6, area: 2345, flag: "🇨🇩",
            languages: ["Французский"], currency: "Франк (CDF)",
            timezone: "WAT (UTC+1)", established: 1881,
            fact: "Город на другой стороне реки"
        },
        {
            id: 95, name: "Танзания", capital: "Додома", continent: "africa",
            population: 59.7, area: 945, flag: "🇹🇿",
            languages: ["Суахили", "Английский"], currency: "Шиллинг (TZS)",
            timezone: "EAT (UTC+3)", established: 1974,
            fact: "Он утонул"
        },
        {
            id: 96, name: "ЮАР", capital: "Претория", continent: "africa",
            population: 59.3, area: 1221, flag: "🇿🇦",
            languages: ["Английский", "Африкаанс", "Зулу", "Коса", "Сесото"],
            currency: "Рэнд (ZAR)", timezone: "SAST (UTC+2)", established: 1855,
            fact: "Три столицы"
        },
        {
            id: 97, name: "Кения", capital: "Найроби", continent: "africa",
            population: 53.8, area: 580, flag: "🇰🇪",
            languages: ["Суахили", "Английский"], currency: "Шиллинг (KES)",
            timezone: "EAT (UTC+3)", established: 1899,
            fact: "Прохладные воды"
        },
        {
            id: 98, name: "Уганда", capital: "Кампала", continent: "africa",
            population: 45.7, area: 241, flag: "🇺🇬",
            languages: ["Английский", "Суахили"], currency: "Шиллинг (UGX)",
            timezone: "EAT (UTC+3)", established: 1890,
            fact: "Холм антилоп"
        },
        {
            id: 99, name: "Алжир", capital: "Алжир", continent: "africa",
            population: 43.9, area: 2381, flag: "🇩🇿",
            languages: ["Арабский"], currency: "Динар (DZD)",
            timezone: "CET (UTC+1)", established: 944,
            fact: "Острова"
        },
        {
            id: 100, name: "Судан", capital: "Хартум", continent: "africa",
            population: 43.8, area: 1886, flag: "🇸🇩",
            languages: ["Арабский", "Английский"], currency: "Фунт (SDG)",
            timezone: "CAT (UTC+2)", established: 1821,
            fact: "Хобот слона"
        },
        {
            id: 101, name: "Марокко", capital: "Рабат", continent: "africa",
            population: 36.9, area: 447, flag: "🇲🇦",
            languages: ["Арабский"], currency: "Дирхам (MAD)",
            timezone: "WET (UTC+0)", established: 1146,
            fact: "Укреплённый монастырь"
        },
        {
            id: 102, name: "Ангола", capital: "Луанда", continent: "africa",
            population: 32.9, area: 1247, flag: "🇦🇴",
            languages: ["Португальский"], currency: "Кванза (AOA)",
            timezone: "WAT (UTC+1)", established: 1576,
            fact: "Плата"
        },
        {
            id: 103, name: "Мозамбик", capital: "Мапуту", continent: "africa",
            population: 31.3, area: 801, flag: "🇲🇿",
            languages: ["Португальский"], currency: "Метикал (MZN)",
            timezone: "CAT (UTC+2)", established: 1781,
            fact: "Залив"
        },
        {
            id: 104, name: "Гана", capital: "Аккра", continent: "africa",
            population: 31.1, area: 239, flag: "🇬🇭",
            languages: ["Английский"], currency: "Седи (GHS)",
            timezone: "GMT (UTC+0)", established: 1877,
            fact: "Муравей"
        },
        {
            id: 105, name: "Мадагаскар", capital: "Антананариву", continent: "africa",
            population: 27.7, area: 587, flag: "🇲🇬",
            languages: ["Малагасийский", "Французский"], currency: "Ариари (MGA)",
            timezone: "EAT (UTC+3)", established: 1625,
            fact: "Город тысячи"
        },
        {
            id: 106, name: "Камерун", capital: "Яунде", continent: "africa",
            population: 26.5, area: 475, flag: "🇨🇲",
            languages: ["Французский", "Английский"], currency: "Франк (XAF)",
            timezone: "WAT (UTC+1)", established: 1888,
            fact: "Земля"
        },
        {
            id: 107, name: "Кот-д'Ивуар", capital: "Ямусукро", continent: "africa",
            population: 26.4, area: 322, flag: "🇨🇮",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "GMT (UTC+0)", established: 1983,
            fact: "Покой Ямуссо"
        },
        {
            id: 108, name: "Нигер", capital: "Ниамей", continent: "africa",
            population: 24.2, area: 1267, flag: "🇳🇪",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "WAT (UTC+1)", established: 1926,
            fact: "Место, где брать воду"
        },
        {
            id: 109, name: "Буркина-Фасо", capital: "Уагадугу", continent: "africa",
            population: 20.9, area: 274, flag: "🇧🇫",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "GMT (UTC+0)", established: 1441,
            fact: "Место, где люди получают честь"
        },
        {
            id: 110, name: "Мали", capital: "Бамако", continent: "africa",
            population: 20.3, area: 1240, flag: "🇲🇱",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "GMT (UTC+0)", established: 1908,
            fact: "Спина крокодила"
        },
        {
            id: 111, name: "Малави", capital: "Лилонгве", continent: "africa",
            population: 19.1, area: 118, flag: "🇲🇼",
            languages: ["Английский", "Чичева"], currency: "Квача (MWK)",
            timezone: "CAT (UTC+2)", established: 1902,
            fact: "Город у реки"
        },
        {
            id: 112, name: "Замбия", capital: "Лусака", continent: "africa",
            population: 18.4, area: 752, flag: "🇿🇲",
            languages: ["Английский"], currency: "Квача (ZMW)",
            timezone: "CAT (UTC+2)", established: 1905,
            fact: "Деревня Лусакаса"
        },
        {
            id: 113, name: "Сенегал", capital: "Дакар", continent: "africa",
            population: 16.7, area: 197, flag: "🇸🇳",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "GMT (UTC+0)", established: 1857,
            fact: "Тамариндовое дерево"
        },
        {
            id: 114, name: "Чад", capital: "Нджамена", continent: "africa",
            population: 16.4, area: 1284, flag: "🇹🇩",
            languages: ["Французский", "Арабский"], currency: "Франк (XAF)",
            timezone: "WAT (UTC+1)", established: 1900,
            fact: "Место отдыха"
        },
        {
            id: 115, name: "Сомали", capital: "Могадишо", continent: "africa",
            population: 15.9, area: 637, flag: "🇸🇴",
            languages: ["Сомалийский", "Арабский"], currency: "Шиллинг (SOS)",
            timezone: "EAT (UTC+3)", established: 1871,
            fact: "Место шаха"
        },
        {
            id: 116, name: "Зимбабве", capital: "Хараре", continent: "africa",
            population: 14.9, area: 391, flag: "🇿🇼",
            languages: ["Английский", "Шона", "Северный ндебеле"],
            currency: "Доллар США (USD)", timezone: "CAT (UTC+2)", established: 1890,
            fact: "Тот, кто не спит"
        },
        {
            id: 117, name: "Гвинея", capital: "Конакри", continent: "africa",
            population: 13.1, area: 246, flag: "🇬🇳",
            languages: ["Французский"], currency: "Франк (GNF)",
            timezone: "GMT (UTC+0)", established: 1887,
            fact: "Другая сторона"
        },
        {
            id: 118, name: "Руанда", capital: "Кигали", continent: "africa",
            population: 12.9, area: 26, flag: "🇷🇼",
            languages: ["Киньяруанда", "Французский", "Английский"],
            currency: "Франк (RWF)", timezone: "CAT (UTC+2)", established: 1907,
            fact: "Большой"
        },
        {
            id: 119, name: "Бенин", capital: "Порто-Ново", continent: "africa",
            population: 12.1, area: 112, flag: "🇧🇯",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "WAT (UTC+1)", established: 16,
            fact: "Новый порт"
        },
        {
            id: 120, name: "Бурунди", capital: "Гитега", continent: "africa",
            population: 11.9, area: 28, flag: "🇧🇮",
            languages: ["Кирунди", "Французский"], currency: "Франк (BIF)",
            timezone: "CAT (UTC+2)", established: 2018,
            fact: "Большое пастбище"
        },
        {
            id: 121, name: "Тунис", capital: "Тунис", continent: "africa",
            population: 11.7, area: 163, flag: "🇹🇳",
            languages: ["Арабский"], currency: "Динар (TND)",
            timezone: "CET (UTC+1)", established: 698,
            fact: "Приют"
        },
        {
            id: 122, name: "Южный Судан", capital: "Джуба", continent: "africa",
            population: 11.2, area: 644, flag: "🇸🇸",
            languages: ["Английский"], currency: "Фунт (SSP)",
            timezone: "EAT (UTC+3)", established: 2011,
            fact: "Город на Белом Ниле"
        },
        {
            id: 123, name: "Того", capital: "Ломе", continent: "africa",
            population: 8.3, area: 57, flag: "🇹🇬",
            languages: ["Французский"], currency: "Франк (XOF)",
            timezone: "GMT (UTC+0)", established: 1880,
            fact: "Рынок алоэ"
        },
        {
            id: 124, name: "Сьерра-Леоне", capital: "Фритаун", continent: "africa",
            population: 8.0, area: 72, flag: "🇸🇱",
            languages: ["Английский"], currency: "Леоне (SLL)",
            timezone: "GMT (UTC+0)", established: 1792,
            fact: "Город свободы"
        },
        {
            id: 125, name: "Ливия", capital: "Триполи", continent: "africa",
            population: 6.9, area: 1760, flag: "🇱🇾",
            languages: ["Арабский"], currency: "Динар (LYD)",
            timezone: "EET (UTC+2)", established: -7,
            fact: "Три города"
        },
        {
            id: 126, name: "ЦАР", capital: "Банги", continent: "africa",
            population: 4.8, area: 623, flag: "🇨🇫",
            languages: ["Французский"], currency: "Франк (XAF)",
            timezone: "WAT (UTC+1)", established: 1889,
            fact: "Пороги"
        },
        {
            id: 127, name: "Либерия", capital: "Монровия", continent: "africa",
            population: 5.1, area: 111, flag: "🇱🇷",
            languages: ["Английский"], currency: "Доллар (LRD)",
            timezone: "GMT (UTC+0)", established: 1822,
            fact: "В честь президента США"
        },
        {
            id: 128, name: "Мавритания", capital: "Нуакшот", continent: "africa",
            population: 4.6, area: 1030, flag: "🇲🇷",
            languages: ["Арабский"], currency: "Угия (MRU)",
            timezone: "GMT (UTC+0)", established: 1958,
            fact: "Место ветров"
        },
        {
            id: 129, name: "Республика Конго", capital: "Браззавиль", continent: "africa",
            population: 5.5, area: 342, flag: "🇨🇬",
            languages: ["Французский"], currency: "Франк (XAF)",
            timezone: "WAT (UTC+1)", established: 1883,
            fact: "В честь исследователя"
        },
        {
            id: 130, name: "Эритрея", capital: "Асмэра", continent: "africa",
            population: 3.5, area: 117, flag: "🇪🇷",
            languages: ["Тигринья", "Арабский", "Английский"], currency: "Накфа (ERN)",
            timezone: "EAT (UTC+3)", established: 1897,
            fact: "Четыре сделали их объединиться"
        },
        {
            id: 131, name: "Намибия", capital: "Виндхук", continent: "africa",
            population: 2.5, area: 825, flag: "🇳🇦",
            languages: ["Английский"], currency: "Доллар (NAD)",
            timezone: "WAT (UTC+1)", established: 1890,
            fact: "Ветреный угол"
        },
        {
            id: 132, name: "Гамбия", capital: "Банжул", continent: "africa",
            population: 2.4, area: 11, flag: "🇬🇲",
            languages: ["Английский"], currency: "Даласи (GMD)",
            timezone: "GMT (UTC+0)", established: 1816,
            fact: "Волокна"
        },
        {
            id: 133, name: "Ботсвана", capital: "Габороне", continent: "africa",
            population: 2.4, area: 582, flag: "🇧🇼",
            languages: ["Английский"], currency: "Пула (BWP)",
            timezone: "CAT (UTC+2)", established: 1964,
            fact: "Не то, что тяжело"
        },
        {
            id: 134, name: "Габон", capital: "Либревиль", continent: "africa",
            population: 2.2, area: 268, flag: "🇬🇦",
            languages: ["Французский"], currency: "Франк (XAF)",
            timezone: "WAT (UTC+1)", established: 1849,
            fact: "Свободный город"
        },
        {
            id: 135, name: "Лесото", capital: "Масеру", continent: "africa",
            population: 2.1, area: 30, flag: "🇱🇸",
            languages: ["Английский", "Сесото"], currency: "Лоти (LSL)",
            timezone: "SAST (UTC+2)", established: 1869,
            fact: "Место красного песчаника"
        },
        {
            id: 136, name: "Эсватини", capital: "Мбабане", continent: "africa",
            population: 1.2, area: 17, flag: "🇸🇿",
            languages: ["Английский", "Свати"], currency: "Лилангени (SZL)",
            timezone: "SAST (UTC+2)", established: 1902,
            fact: "Маленькое растение"
        },
        {
            id: 137, name: "Маврикий", capital: "Порт-Луи", continent: "africa",
            population: 1.3, area: 2.0, flag: "🇲🇺",
            languages: ["Английский"], currency: "Рупия (MUR)",
            timezone: "MUT (UTC+4)", established: 1735,
            fact: "В честь короля Людовика XV"
        },
        {
            id: 138, name: "Джибути", capital: "Джибути", continent: "africa",
            population: 1.0, area: 23, flag: "🇩🇯",
            languages: ["Арабский", "Французский"], currency: "Франк (DJF)",
            timezone: "EAT (UTC+3)", established: 1888,
            fact: "Глиняный горшок"
        },
        {
            id: 139, name: "Коморы", capital: "Морони", continent: "africa",
            population: 0.9, area: 1.9, flag: "🇰🇲",
            languages: ["Арабский", "Французский"], currency: "Франк (KMF)",
            timezone: "EAT (UTC+3)", established: 1962,
            fact: "В сердце огня"
        },
        {
            id: 140, name: "Кабо-Верде", capital: "Прая", continent: "africa",
            population: 0.6, area: 4.0, flag: "🇨🇻",
            languages: ["Португальский"], currency: "Эскудо (CVE)",
            timezone: "CVT (UTC-1)", established: 1615,
            fact: "Пляж"
        },
        {
            id: 141, name: "Сан-Томе и Принсипи", capital: "Сан-Томе", continent: "africa",
            population: 0.2, area: 1.0, flag: "🇸🇹",
            languages: ["Португальский"], currency: "Добра (STN)",
            timezone: "GMT (UTC+0)", established: 1485,
            fact: "Святой Фома"
        },
        {
            id: 142, name: "Сейшельские Острова", capital: "Виктория", continent: "africa",
            population: 0.1, area: 0.5, flag: "🇸🇨",
            languages: ["Английский", "Французский", "Сейшельский креольский"],
            currency: "Рупия (SCR)", timezone: "SCT (UTC+4)", established: 1778,
            fact: "В честь королевы Виктории"
        },

        {
            id: 143, name: "США", capital: "Вашингтон", continent: "north-america",
            population: 331.9, area: 9834, flag: "🇺🇸",
            languages: ["Английский"], currency: "Доллар (USD)",
            timezone: "от UTC-5 до UTC-10", established: 1791,
            fact: "В честь первого президента"
        },
        {
            id: 144, name: "Канада", capital: "Оттава", continent: "north-america",
            population: 38.0, area: 9985, flag: "🇨🇦",
            languages: ["Английский", "Французский"], currency: "Доллар (CAD)",
            timezone: "от UTC-3.5 до UTC-8", established: 1857,
            fact: "Компромиссный выбор королевы"
        },
        {
            id: 145, name: "Мексика", capital: "Мехико", continent: "north-america",
            population: 128.9, area: 1964, flag: "🇲🇽",
            languages: ["Испанский"], currency: "Песо (MXN)",
            timezone: "от UTC-5 до UTC-8", established: 1325,
            fact: "В честь ацтекского бога"
        },
        {
            id: 146, name: "Гватемала", capital: "Гватемала", continent: "north-america",
            population: 17.9, area: 109, flag: "🇬🇹",
            languages: ["Испанский"], currency: "Кетсаль (GTQ)",
            timezone: "CST (UTC-6)", established: 1776,
            fact: "Место многих деревьев"
        },
        {
            id: 147, name: "Куба", capital: "Гавана", continent: "north-america",
            population: 11.3, area: 110, flag: "🇨🇺",
            languages: ["Испанский"], currency: "Песо (CUP)",
            timezone: "CST (UTC-5)", established: 1519,
            fact: "Порт"
        },
        {
            id: 148, name: "Гаити", capital: "Порт-о-Пренс", continent: "north-america",
            population: 11.4, area: 27, flag: "🇭🇹",
            languages: ["Французский", "Гаитянский креольский"], currency: "Гурд (HTG)",
            timezone: "EST (UTC-5)", established: 1749,
            fact: "Порт принца"
        },
        {
            id: 149, name: "Доминиканская Республика", capital: "Санто-Доминго", continent: "north-america",
            population: 10.8, area: 48, flag: "🇩🇴",
            languages: ["Испанский"], currency: "Песо (DOP)",
            timezone: "AST (UTC-4)", established: 1496,
            fact: "Святой Доминик"
        },
        {
            id: 150, name: "Гондурас", capital: "Тегусигальпа", continent: "north-america",
            population: 9.9, area: 112, flag: "🇭🇳",
            languages: ["Испанский"], currency: "Лемпира (HNL)",
            timezone: "CST (UTC-6)", established: 1578,
            fact: "Серебряные холмы"
        },
        {
            id: 151, name: "Сальвадор", capital: "Сан-Сальвадор", continent: "north-america",
            population: 6.5, area: 21, flag: "🇸🇻",
            languages: ["Испанский"], currency: "Доллар США (USD)",
            timezone: "CST (UTC-6)", established: 1525,
            fact: "Святой Спаситель"
        },
        {
            id: 152, name: "Никарагуа", capital: "Манагуа", continent: "north-america",
            population: 6.6, area: 130, flag: "🇳🇮",
            languages: ["Испанский"], currency: "Кордоба (NIO)",
            timezone: "CST (UTC-6)", established: 1819,
            fact: "Место большой воды"
        },
        {
            id: 153, name: "Коста-Рика", capital: "Сан-Хосе", continent: "north-america",
            population: 5.1, area: 51, flag: "🇨🇷",
            languages: ["Испанский"], currency: "Колон (CRC)",
            timezone: "CST (UTC-6)", established: 1737,
            fact: "Святой Иосиф"
        },
        {
            id: 154, name: "Панама", capital: "Панама", continent: "north-america",
            population: 4.3, area: 75, flag: "🇵🇦",
            languages: ["Испанский"], currency: "Бальбоа (PAB)",
            timezone: "EST (UTC-5)", established: 1519,
            fact: "Изобилие рыбы"
        },
        {
            id: 155, name: "Ямайка", capital: "Кингстон", continent: "north-america",
            population: 3.0, area: 11, flag: "🇯🇲",
            languages: ["Английский"], currency: "Доллар (JMD)",
            timezone: "EST (UTC-5)", established: 1692,
            fact: "Королевский город"
        },
        {
            id: 156, name: "Пуэрто-Рико", capital: "Сан-Хуан", continent: "north-america",
            population: 3.2, area: 9, flag: "🇵🇷",
            languages: ["Испанский", "Английский"], currency: "Доллар США (USD)",
            timezone: "AST (UTC-4)", established: 1521,
            fact: "Святой Иоанн"
        },
        {
            id: 157, name: "Тринидад и Тобаго", capital: "Порт-оф-Спейн", continent: "north-america",
            population: 1.4, area: 5.1, flag: "🇹🇹",
            languages: ["Английский"], currency: "Доллар (TTD)",
            timezone: "AST (UTC-4)", established: 1757,
            fact: "Порт Испании"
        },
        {
            id: 158, name: "Багамские Острова", capital: "Нассау", continent: "north-america",
            population: 0.4, area: 14, flag: "🇧🇸",
            languages: ["Английский"], currency: "Доллар (BSD)",
            timezone: "EST (UTC-5)", established: 1695,
            fact: "В честь Вильгельма III Оранского"
        },
        {
            id: 159, name: "Белиз", capital: "Бельмопан", continent: "north-america",
            population: 0.4, area: 23, flag: "🇧🇿",
            languages: ["Английский"], currency: "Доллар (BZD)",
            timezone: "CST (UTC-6)", established: 1970,
            fact: "Сочетание названий рек"
        },
        {
            id: 160, name: "Барбадос", capital: "Бриджтаун", continent: "north-america",
            population: 0.3, area: 0.4, flag: "🇧🇧",
            languages: ["Английский"], currency: "Доллар (BBD)",
            timezone: "AST (UTC-4)", established: 1628,
            fact: "Город моста"
        },
        {
            id: 161, name: "Сент-Люсия", capital: "Кастри", continent: "north-america",
            population: 0.2, area: 0.6, flag: "🇱🇨",
            languages: ["Английский"], currency: "Доллар (XCD)",
            timezone: "AST (UTC-4)", established: 1650,
            fact: "Замок"
        },
        {
            id: 162, name: "Гренада", capital: "Сент-Джорджес", continent: "north-america",
            population: 0.1, area: 0.3, flag: "🇬🇩",
            languages: ["Английский"], currency: "Доллар (XCD)",
            timezone: "AST (UTC-4)", established: 1650,
            fact: "Святой Георгий"
        },
        {
            id: 163, name: "Антигуа и Барбуда", capital: "Сент-Джонс", continent: "north-america",
            population: 0.1, area: 0.4, flag: "🇦🇬",
            languages: ["Английский"], currency: "Доллар (XCD)",
            timezone: "AST (UTC-4)", established: 1632,
            fact: "Святой Иоанн"
        },
        {
            id: 164, name: "Сент-Винсент и Гренадины", capital: "Кингстаун", continent: "north-america",
            population: 0.1, area: 0.4, flag: "🇻🇨",
            languages: ["Английский"], currency: "Доллар (XCD)",
            timezone: "AST (UTC-4)", established: 1722,
            fact: "Королевский город"
        },
        {
            id: 165, name: "Доминика", capital: "Розо", continent: "north-america",
            population: 0.07, area: 0.8, flag: "🇩🇲",
            languages: ["Английский"], currency: "Доллар (XCD)",
            timezone: "AST (UTC-4)", established: 1750,
            fact: "Тростник"
        },

        // ================= ЮЖНАЯ АМЕРИКА (12 стран) =================
        {
            id: 166, name: "Бразилия", capital: "Бразилиа", continent: "south-america",
            population: 213.0, area: 8516, flag: "🇧🇷",
            languages: ["Португальский"], currency: "Реал (BRL)",
            timezone: "от UTC-2 до UTC-5", established: 1960,
            fact: "Спроектирована в форме самолёта"
        },
        {
            id: 167, name: "Аргентина", capital: "Буэнос-Айрес", continent: "south-america",
            population: 45.4, area: 2780, flag: "🇦🇷",
            languages: ["Испанский"], currency: "Песо (ARS)",
            timezone: "ART (UTC-3)", established: 1536,
            fact: "Хорошие ветра"
        },
        {
            id: 168, name: "Колумбия", capital: "Богота", continent: "south-america",
            population: 50.9, area: 1142, flag: "🇨🇴",
            languages: ["Испанский"], currency: "Песо (COP)",
            timezone: "COT (UTC-5)", established: 1538,
            fact: "Высокое поле"
        },
        {
            id: 169, name: "Перу", capital: "Лима", continent: "south-america",
            population: 32.9, area: 1285, flag: "🇵🇪",
            languages: ["Испанский"], currency: "Соль (PEN)",
            timezone: "PET (UTC-5)", established: 1535,
            fact: "Город королей"
        },
        {
            id: 170, name: "Венесуэла", capital: "Каракас", continent: "south-america",
            population: 28.4, area: 916, flag: "🇻🇪",
            languages: ["Испанский"], currency: "Боливар (VES)",
            timezone: "VET (UTC-4)", established: 1567,
            fact: "Долина сладкой воды"
        },
        {
            id: 171, name: "Чили", capital: "Сантьяго", continent: "south-america",
            population: 19.1, area: 756, flag: "🇨🇱",
            languages: ["Испанский"], currency: "Песо (CLP)",
            timezone: "CLT (UTC-4)", established: 1541,
            fact: "Святой Иаков"
        },
        {
            id: 172, name: "Эквадор", capital: "Кито", continent: "south-america",
            population: 17.6, area: 284, flag: "🇪🇨",
            languages: ["Испанский"], currency: "Доллар США (USD)",
            timezone: "ECT (UTC-5)", established: 1534,
            fact: "Народ Киту"
        },
        {
            id: 173, name: "Боливия", capital: "Сукре", continent: "south-america",
            population: 11.7, area: 1098, flag: "🇧🇴",
            languages: ["Испанский"], currency: "Боливиано (BOB)",
            timezone: "BOT (UTC-4)", established: 1538,
            fact: "В честь лидера революции"
        },
        {
            id: 174, name: "Парагвай", capital: "Асунсьон", continent: "south-america",
            population: 7.1, area: 407, flag: "🇵🇾",
            languages: ["Испанский", "Гуарани"], currency: "Гуарани (PYG)",
            timezone: "PYT (UTC-4)", established: 1537,
            fact: "Вознесение"
        },
        {
            id: 175, name: "Уругвай", capital: "Монтевидео", continent: "south-america",
            population: 3.5, area: 176, flag: "🇺🇾",
            languages: ["Испанский"], currency: "Песо (UYU)",
            timezone: "UYT (UTC-3)", established: 1726,
            fact: "Вижу гору"
        },
        {
            id: 176, name: "Гайана", capital: "Джорджтаун", continent: "south-america",
            population: 0.8, area: 215, flag: "🇬🇾",
            languages: ["Английский"], currency: "Доллар (GYD)",
            timezone: "GYT (UTC-4)", established: 1781,
            fact: "В честь короля Георга III"
        },
        {
            id: 177, name: "Суринам", capital: "Парамарибо", continent: "south-america",
            population: 0.6, area: 163, flag: "🇸🇷",
            languages: ["Нидерландский"], currency: "Доллар (SRD)",
            timezone: "SRT (UTC-3)", established: 1613,
            fact: "Цветок моря"
        },

        
        {
            id: 178, name: "Австралия", capital: "Канберра", continent: "oceania",
            population: 25.7, area: 7692, flag: "🇦🇺",
            languages: ["Английский"], currency: "Доллар (AUD)",
            timezone: "от UTC+8 до UTC+10.5", established: 1913,
            fact: "Специально построенная столица"
        },
        {
            id: 179, name: "Папуа — Новая Гвинея", capital: "Порт-Морсби", continent: "oceania",
            population: 8.9, area: 462, flag: "🇵🇬",
            languages: ["Английский", "Ток-писин", "Хири-моту"], currency: "Кина (PGK)",
            timezone: "PGT (UTC+10)", established: 1873,
            fact: "В честь исследователя"
        },
        {
            id: 180, name: "Новая Зеландия", capital: "Веллингтон", continent: "oceania",
            population: 5.1, area: 268, flag: "🇳🇿",
            languages: ["Английский", "Маори"], currency: "Доллар (NZD)",
            timezone: "NZST (UTC+12)", established: 1865,
            fact: "В честь герцога Веллингтона"
        },
        {
            id: 181, name: "Фиджи", capital: "Сува", continent: "oceania",
            population: 0.9, area: 18, flag: "🇫🇯",
            languages: ["Английский", "Фиджийский", "Хинди"], currency: "Доллар (FJD)",
            timezone: "FJT (UTC+12)", established: 1877,
            fact: "Крупнейший город Океании"
        },
        {
            id: 182, name: "Соломоновы Острова", capital: "Хониара", continent: "oceania",
            population: 0.7, area: 28, flag: "🇸🇧",
            languages: ["Английский"], currency: "Доллар (SBD)",
            timezone: "SBT (UTC+11)", established: 1952,
            fact: "Место на восточном берегу"
        },
        {
            id: 183, name: "Вануату", capital: "Порт-Вила", continent: "oceania",
            population: 0.3, area: 12, flag: "🇻🇺",
            languages: ["Английский", "Французский", "Бислама"], currency: "Вату (VUV)",
            timezone: "VUT (UTC+11)", established: 1887,
            fact: "Порт города Вила"
        },
        {
            id: 184, name: "Самоа", capital: "Апиа", continent: "oceania",
            population: 0.2, area: 2.8, flag: "🇼🇸",
            languages: ["Самоанский", "Английский"], currency: "Тала (WST)",
            timezone: "WST (UTC+13)", established: 1850,
            fact: "Местное название"
        },
        {
            id: 185, name: "Кирибати", capital: "Южная Тарава", continent: "oceania",
            population: 0.12, area: 0.8, flag: "🇰🇮",
            languages: ["Английский", "Кирибати"], currency: "Доллар Австралии (AUD)",
            timezone: "GILT (UTC+12)", established: 1895,
            fact: "Главный остров"
        },
        {
            id: 186, name: "Микронезия", capital: "Паликир", continent: "oceania",
            population: 0.11, area: 0.7, flag: "🇫🇲",
            languages: ["Английский"], currency: "Доллар США (USD)",
            timezone: "CHUT (UTC+10)", established: 1989,
            fact: "На вершине холма"
        },
        {
            id: 187, name: "Тонга", capital: "Нукуалофа", continent: "oceania",
            population: 0.1, area: 0.3, flag: "🇹🇴",
            languages: ["Английский", "Тонганский"], currency: "Паанга (TOP)",
            timezone: "TOT (UTC+13)", established: 1795,
            fact: "Место любви"
        },
        {
            id: 188, name: "Маршалловы Острова", capital: "Маджуро", continent: "oceania",
            population: 0.06, area: 0.2, flag: "🇲🇭",
            languages: ["Английский", "Маршалльский"], currency: "Доллар США (USD)",
            timezone: "MHT (UTC+12)", established: 1944,
            fact: "Две части"
        },
        {
            id: 189, name: "Палау", capital: "Нгерулмуд", continent: "oceania",
            population: 0.02, area: 0.5, flag: "🇵🇼",
            languages: ["Английский", "Палауский"], currency: "Доллар США (USD)",
            timezone: "PWT (UTC+9)", established: 2006,
            fact: "Самый маленький столичный город"
        },
        {
            id: 190, name: "Тувалу", capital: "Фунафути", continent: "oceania",
            population: 0.01, area: 0.03, flag: "🇹🇻",
            languages: ["Английский", "Тувалу"], currency: "Доллар Австралии (AUD)",
            timezone: "TVT (UTC+12)", established: 1978,
            fact: "Женщина Фунафути"
        },
        {
            id: 191, name: "Науру", capital: "Ярен", continent: "oceania",
            population: 0.01, area: 0.02, flag: "🇳🇷",
            languages: ["Английский", "Науруанский"], currency: "Доллар Австралии (AUD)",
            timezone: "NRT (UTC+12)", established: 1968,
            fact: "Неофициальная столица"
        }
    ]
};


const DataManager = {
    getAllCountries() {
        return countriesDatabase.countries;
    },
    
    getCountriesByContinent(continentId) {
        if (continentId === 'all') {
            return this.getAllCountries();
        }
        return countriesDatabase.countries.filter(country => country.continent === continentId);
    },
    
    getCountryById(id) {
        return countriesDatabase.countries.find(country => country.id === id);
    },
    
    searchCountries(query) {
        const searchTerm = query.toLowerCase();
        return countriesDatabase.countries.filter(country => 
            country.name.toLowerCase().includes(searchTerm) ||
            country.capital.toLowerCase().includes(searchTerm) ||
            (country.languages && country.languages.some(lang => 
                lang.toLowerCase().includes(searchTerm)
            ))
        );
    },
    
    getContinents() {
        return countriesDatabase.continents;
    },
    
    getDifficultyLevels() {
        return countriesDatabase.difficultyLevels;
    },
    
    getCountriesCountByContinent() {
        const counts = {};
        countriesDatabase.continents.forEach(continent => {
            if (continent.id !== 'all') {
                counts[continent.id] = this.getCountriesByContinent(continent.id).length;
            }
        });
        counts['all'] = this.getAllCountries().length;
        return counts;
    },
    
    getContinentName(continentId) {
        const continent = countriesDatabase.continents.find(c => c.id === continentId);
        return continent ? continent.name : continentId;
    },
    
    formatPopulation(population) {
        if (population === null || population === undefined) return 'Н/Д';
        if (population >= 1000) {
            return (population / 1000).toFixed(1).replace('.0', '') + ' млрд';
        }
        if (population >= 1) {
            return population.toFixed(1).replace('.0', '') + ' млн';
        }
        return Math.round(population * 1000) + ' тыс';
    },
    
    formatArea(area) {
        if (area === null || area === undefined) return 'Н/Д';
        if (area >= 1000) {
            return (area / 1000).toFixed(1).replace('.0', '') + ' млн км²';
        }
        if (area >= 1) {
            return area.toFixed(1).replace('.0', '') + ' тыс км²';
        }
        return area + ' км²';
    },
    
    formatEstablishedYear(year) {
        if (year === null || year === undefined) return 'Неизвестно';
        if (year < 0) {
            return Math.abs(year) + ' год до н.э.';
        }
        return year + ' год';
    },
    
    generateTestQuestions(difficulty = 'medium', continent = 'all', count = 10) {
        let sourceCountries = this.getAllCountries();
        if (continent !== 'all') {
            sourceCountries = this.getCountriesByContinent(continent);
        }
        
        if (sourceCountries.length === 0) {
            return [];
        }
        
       
        const shuffled = [...sourceCountries].sort(() => 0.5 - Math.random());
        const selectedCountries = shuffled.slice(0, Math.min(count, shuffled.length));
        
        
        return selectedCountries.map(country => {
          
            let wrongSource = sourceCountries;
            if (sourceCountries.length < 4) {
                wrongSource = this.getAllCountries();
            }
            
            const otherCapitals = wrongSource
                .filter(c => c.capital !== country.capital && c.continent === country.continent)
                .map(c => c.capital);
            
            const shuffledWrong = [...otherCapitals].sort(() => 0.5 - Math.random());
            const wrongAnswers = shuffledWrong.slice(0, Math.min(3, shuffledWrong.length));
           
            if (wrongAnswers.length < 3) {
                const allCapitals = this.getAllCountries()
                    .filter(c => c.capital !== country.capital)
                    .map(c => c.capital);
                const moreWrong = [...allCapitals]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3 - wrongAnswers.length);
                wrongAnswers.push(...moreWrong);
            }
            
            const options = [country.capital, ...wrongAnswers].sort(() => 0.5 - Math.random());
            
            return {
                id: country.id,
                question: `Столица ${country.name}?`,
                correctAnswer: country.capital,
                options: options,
                countryId: country.id,
                difficulty: difficulty,
                continent: country.continent,
                hint: this.getHintForCountry(country)
            };
        });
    },
    
    getRandomCapitals(excludeCapital, count, continent = 'all') {
        let allCountries = this.getAllCountries();
        if (continent !== 'all') {
            allCountries = this.getCountriesByContinent(continent);
        }
        
        const otherCapitals = allCountries
            .filter(country => country.capital !== excludeCapital)
            .map(country => country.capital);
        
        const shuffled = [...otherCapitals].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, shuffled.length));
    },
    
    getHintForCountry(country) {
        
        if (country.fact) {
            return country.fact;
        }
        
      
        const continentHints = {
            europe: "Европейская столица",
            asia: "Азиатская столица",
            africa: "Африканская столица",
            'north-america': "Столица в Северной Америке",
            'south-america': "Южноамериканская столица",
            oceania: "Столица в Океании"
        };
        
        return continentHints[country.continent] || "Угадайте столицу";
    },
    
    getContinentStats() {
        const stats = {};
        const countries = this.getAllCountries();
        
        countries.forEach(country => {
            if (!stats[country.continent]) {
                stats[country.continent] = {
                    count: 0,
                    totalPopulation: 0,
                    totalArea: 0
                };
            }
            
            stats[country.continent].count++;
            stats[country.continent].totalPopulation += country.population || 0;
            stats[country.continent].totalArea += country.area || 0;
        });
        
        return stats;
    },
    
    getCountryCount() {
        return this.getAllCountries().length;
    },
    
    getCountriesSortedBy(field = 'name', order = 'asc') {
        const countries = [...this.getAllCountries()];
        
        return countries.sort((a, b) => {
            let valueA = a[field];
            let valueB = b[field];
            
            if (field === 'name' || field === 'capital') {
                valueA = valueA || '';
                valueB = valueB || '';
                return order === 'asc' 
                    ? valueA.localeCompare(valueB, 'ru')
                    : valueB.localeCompare(valueA, 'ru');
            }
            
            valueA = valueA || 0;
            valueB = valueB || 0;
            
            return order === 'asc' ? valueA - valueB : valueB - valueA;
        });
    }
};

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { countriesDatabase, DataManager };
}