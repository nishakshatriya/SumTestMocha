const assert = require('chai').assert;
const calculatingSum = require("../Main/sum_controller");

describe("Calculating sum of two numbers",function(){
    it('Addition of two numbers',() => {
        assert.equal(2,calculatingSum.sum(1,1));
    }),
    it('Checking for NaN',() => {
        assert.equal(0,calculatingSum.sum(null+1));
    }),
    it('Checking if not defined',() => {
        assert.isDefined(4,calculatingSum.sum(2,2));
    }),
    it('checking null values',() => {
        assert.equal(0,calculatingSum.sum(null,1));
    }),
    it('checking if empty is encountered',() => {
        assert.equal(0,calculatingSum.sum(""+2));
    }),
    it('check Both values given Empty',() => {
        assert.equal(0,calculatingSum.sum(""+""));
    }),
    it('If string is given..',() => {
        assert.equal(0,calculatingSum.sum("abc"+1));
    })
    it('checking type of values',() => {
        assert.typeOf(calculatingSum.sum(5,5),"Number");
    })
})