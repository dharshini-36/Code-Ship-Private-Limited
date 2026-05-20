//normal function
function funcdict()
{
    let dict = {
        "name":"dharshini",
        "age":19,
        "country":"india"
    }
    console.log(dict.name);
    console.log(dict.age);
    console.log(dict.country);
}
funcdict();
console.log("----------------------------------------------------------");

//for in loop
function printdict() {
    let dict = {
        "name":"dharshini",
        "age":19,
        "country":"india"
    }
    for(let key in dict){
        console.log(key + ":" + dict[key]);
    }
}
printdict();
console.log("----------------------------------------------------------");

//arrow function
const printdictarrow = () => {
    let dict = {
        "name":"dharshini",
        "age":19,
        "country":"india"
    }
    console.log(dict)
    for(let key in dict){
        console.log(`${key} -> ${dict[key]}`);
    }
};
printdictarrow();
console.log("----------------------------------------------------------");

//foreach
function dictionary() {
const dict = {
    "name":"dharshini",
    "age":19,
    "country":"india"
}
Object.entries(dict).forEach(([key]) => {
    console.log(key);
});
}
dictionary();
console.log("----------------------------------------------------------");

//for of
function offunc() {
const stu = {
    "name":"dharshini",
    "age":19,
    "country":"india"
}
for(let [value] of Object.entries(stu)) {
    console.log(stu[value]);
}
}
offunc();
console.log("----------------------------------------------------------");

//Method overloading
class calc{
    add(a){
        return a+a;
    }
    add(a,b){
        return a+b;
    }
    add(a,b,c){
        return a+b+c;
    }
}
const cal = new calc();
console.log(cal.add(2));
console.log(cal.add(2,3));
console.log(cal.add(2,3));
