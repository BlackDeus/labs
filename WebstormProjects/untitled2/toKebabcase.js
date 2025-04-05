function toKebabCase(cssProperty) {
    return cssProperty.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// Приклади використання:
console.log(toKebabCase("fontSize")); // fontSize
console.log(toKebabCase("backgroundColor")); // backgroundColor
console.log(toKebabCase("textAlign")); // textAlign
