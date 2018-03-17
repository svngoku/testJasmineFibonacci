const calc = require('../../site/fibonacci');
 
describe("fonction fibonacci", function() {
 
  describe("fibonacci", function() {
 
    it("terme 0", function() {
      let value = calc.fibonacci(0);
      expect(value).toBe(0);
    });

    it("terme 1", function() {
      let value = calc.fibonacci(1);
      expect(value).toBe(1);
    });

    it("terme 2", function() {
      let value = calc.fibonacci(2);
      expect(value).toBe(1);
    });

    it("terme 3", function() {
      let value = calc.fibonacci(3);
      expect(value).toBe(2);
    });

    it("terme 14", function() {
      let value = calc.fibonacci(14);
      expect(value).toBe(377);
    });
})
})