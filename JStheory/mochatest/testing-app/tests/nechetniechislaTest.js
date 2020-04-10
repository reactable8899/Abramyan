const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

// импорт функции
const nechChisla = require('../nechetniechisla');
describe('Тестирование метода', function() {

    // Первый тест
    it('1 массив', function() {
        const c = nechChisla([1,2,3,4,5,6,7,8,9,10]);
        expect(c).to.deep.equal([1,3,5,7,9]);

    });
    it('2 массив', function() {
        const c = nechChisla([1,2,-3,4,5,6,7,8,9,10]);
        expect(c).to.deep.equal([1,3,5,7,9]);

    });

});
