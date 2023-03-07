it("Возводит х в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  }); // Сложно разобраться, где ошибка, если ошибка будет. Лучше разбить на более мелкие части.

 
describe("Возведение х в степень n", function() {
    it("5 в степени 1 равно 5", function() {
        assert.equal( pow(5, 1), 5 );
    });

    it("5 в степени 2 равно 25", function() {
        assert.equal( pow(5, 1), 25 );
    });

    it("5 в степени 3 равно 125", function() {
        assert.equal( pow(5, 1), 125 );
    });
});