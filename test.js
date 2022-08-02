const { sum } = require('./index.js');
test('sumar 3+3 me da 6', function (){
    let total = sum(3,3);
  
    expect(total).toBe(6);
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./index.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);//1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

/*test("1.2 Dollar should be 127.9 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./index.js')
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.0416666666667);
})

test("127.9 yen should be 0.8 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./index.js')
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0218921032056294);

})*/

