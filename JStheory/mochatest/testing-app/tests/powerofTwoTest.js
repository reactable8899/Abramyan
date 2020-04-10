const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

// импорт функции
const powerofTwo = require('../powerofTwo');
describe('Тестирование метода', function() {

    // Первый тест
    it('1 массив', function() {
        const c = powerofTwo(5);
        expect(c).to.deep.equal([2,4,8,16,32]);

    });

});
