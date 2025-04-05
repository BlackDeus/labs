function toCamelCase(cssProperty) {
    return cssProperty.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Приклади використання:
console.log(toCamelCase("font-size")); // fontSize
console.log(toCamelCase("background-color")); // backgroundColor
console.log(toCamelCase("text-align")); // textAlign
