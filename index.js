const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

console.log('Hola Mundo');

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
    return oneEuroIs.JPY * dollar / oneEuroIs.USD;
}
function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD;  
}
function fromYenToPound(yen){
    return yen * oneEuroIs.GBP / oneEuroIs.JPY;
}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));


module.exports = { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound };