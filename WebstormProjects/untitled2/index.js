import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть число: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('Це не число!');
        rl.close();
        return;
    }

    const numStr = input.trim(); // Рядкове представлення числа

    if (number >= 10 && number <= 19) {
        // Числа від 10 до 19 обробляємо окремо
        const teens = {
            10: 'Десять', 11: 'Одинадцять', 12: 'Дванадцять', 13: 'Тринадцять',
            14: 'Чотирнадцять', 15: 'П\'ятнадцять', 16: 'Шістнадцять',
            17: 'Сімнадцять', 18: 'Вісімнадцять', 19: 'Дев\'ятнадцять'
        };
        console.log(teens[number]);
    } else if (number >= 20) {
        // Десятки
        const tens = {
            '2': 'Двадцять', '3': 'Тридцять', '4': 'Сорок', '5': 'П\'ятдесят',
            '6': 'Шістдесят', '7': 'Сімдесят', '8': 'Вісімдесят', '9': 'Дев\'яносто'
        };

        // Одиниці
        const ones = {
            '1': 'Один', '2': 'Два', '3': 'Три', '4': 'Чотири',
            '5': 'П\'ять', '6': 'Шість', '7': 'Сім', '8': 'Вісім', '9': 'Дев\'ять'
        };

        let result = tens[numStr[0]] || ''; // Десятки
        if (numStr[1] !== '0') {
            result += ' ' + (ones[numStr[1]] || ''); // Одиниці
        }

        console.log(result);
    } else {
        // Однозначні числа
        const ones = {
            '0': 'Нуль', '1': 'Один', '2': 'Два', '3': 'Три', '4': 'Чотири',
            '5': 'П\'ять', '6': 'Шість', '7': 'Сім', '8': 'Вісім', '9': 'Дев\'ять'
        };
        console.log(ones[numStr]);
    }

    rl.close();
});
