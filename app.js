function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion==='as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }
    return result;
}
var combineNumber = combine(5, 8, 'as-number');
console.log(combineNumber);
var stringNumber = combine('7', '8', 'as-number');
console.log(stringNumber);
var combineNames = combine("Lisa", "Shinoda", 'String');
console.log(combineNames);
