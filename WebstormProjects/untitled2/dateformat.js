function convertDateFormat(text) {
    return text.replace(/\b(\d{4})\/(\d{2})\/(\d{2})\b/g, '$3.$2.$1');
}

// Приклад використання:
const inputText = "Дата початку: 2025/04/05, дата завершення: 2025/05/10.";
const resultText = convertDateFormat(inputText);

console.log(resultText); // Виведе: "Дата початку: 05.04.2025, дата завершення: 10.05.2025."
