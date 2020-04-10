const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

// импорт функции
const sum = require('../mas');
describe('Тестирование метода', function() {

    // Первый тест
    it('1 массив', function() {
        const c = sum([1,2,3]);
        expect(c).to.deep.equal([2,4,6]);

    });

});
