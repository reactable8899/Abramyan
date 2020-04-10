const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

// импорт функции
const fibonacci = require('../fibonacci');
describe('Тестирование метода', function() {

    // Первый тест
    it('1 массив', function() {
        const c = fibonacci(8);
        expect(c).to.deep.equal([1,1,2,3,5,8,13,21]);

    });

});
