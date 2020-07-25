type Combinable = number|string;

function combine(
    input1:Combinable,
    input2:Combinable,
    resultConversion: string
    ){
    let result;
    if (typeof input1==='number' && typeof input2==='number' || resultConversion==='as-number'){
        result= +input1+ +input2;      
    }else{
        result= input1.toString()+input2.toString(); 
    }
    // if (resultConversion==='as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }
    return result;
    
}
const combineNumber = combine(5, 8,'as-number');
console.log(combineNumber);

const stringNumber = combine('7', '8','as-number');
console.log(stringNumber);

const combineNames = combine("Lisa","Shinoda",'String');
console.log(combineNames);