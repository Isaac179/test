const roman_to_int = require('./roman_to_int').roman_to_int;

var roman_number = "X";
console.log(roman_number + " = " + roman_to_int(roman_number));

roman_number = "VII";
console.log(roman_number + " = " + roman_to_int(roman_number));

roman_number = "IX";
console.log(roman_number + " = " + roman_to_int(roman_number));

roman_number = "LXXXVII";
console.log(roman_number + " = " + roman_to_int(roman_number));

roman_number = "DCCVII";
console.log(roman_number + " = " + roman_to_int(roman_number));
