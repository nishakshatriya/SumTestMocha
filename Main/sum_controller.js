"use strict";
var a = require('./sum')
module.exports = {
  sum(firstNumber, secondNumber) {
    if (firstNumber == null || secondNumber === null) {  
      return 0;
    } else if (firstNumber == "" || secondNumber == "") {
      return 0;
    } else if (firstNumber == undefined || secondNumber == undefined) {
      return 0;
    } else if (isNaN(firstNumber) || isNaN(secondNumber)) {
      return 0;
    } else { 
      return a.sum(firstNumber,secondNumber);
    }
  }
};
