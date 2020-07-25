// const person:{
//     name:string;
//     age:number;
// }= {
const person ={ 
    name:"Lisa",
    age:23,
    hobbies:['Sports','Cooking']
};

console.log(person);

for (const hobby of person.hobbies){
    console.log(hobby);
}