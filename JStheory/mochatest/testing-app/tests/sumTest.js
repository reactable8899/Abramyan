const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

// импорт функции
const sum = require('../sum');
describe('Тестирование метода', function() {

    // Первый тест
    it('Сумма 2 и 3 равняется 5', function() {
        const c = sum(2, 3);

        expect(c).to.equal(5);
    });

    // Второй тест
    it('Сумма 10 и -10 равна нулю', function() {
      const c = sum(10, -10);

      expect(c).to.equal(5);
    })
});
