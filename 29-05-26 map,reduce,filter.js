//1
let numbers = [1,2,3,4,5];
let result = numbers.map(function(num){
    return num*2;
});
console.log(result);
console.log("___________________________________________________________");
console.log();


//2
let number= [1,2,3,4,5,6,7,8,9,10];

let evennums = number.filter(function(num){
    return num%2 === 0;
});
console.log(evennums);
console.log("___________________________________________________________");
console.log();


//3
let num = [1,2,3,4,5];
let res = num.reduce(function(total,n){
    return total+n;
});
console.log(res);
console.log("___________________________________________________________");
console.log();

//4
let names = ["dharsh","kiki","rick","subb"];
let upper = names.map(name => name.toUpperCase());
console.log(upper);
console.log("___________________________________________________________");
console.log();

//5
let sq = numbers.map(num => num*num);
console.log(sq);
console.log("___________________________________________________________");
console.log();

//6
let nums = [1,5,10,14,25,28];
let greater = nums.filter(n => n>10);
console.log(greater);
console.log("___________________________________________________________");
console.log();


//7
let words = ["watermelon","banana","kiwi","dog","cat","orange"];
let longwords = words.filter(word => word.length>4);
console.log(longwords);
console.log("___________________________________________________________");
console.log();

//8
let product = numbers.reduce((total,num) => total*num,1);
console.log(product);
console.log("___________________________________________________________");
console.log();

//9
let nu = [3,4,7,27,28,67];
let maximum = nu.reduce((largest,num) => {
    return num > largest ? num : largest;
});
console.log(maximum);
console.log("___________________________________________________________");
console.log();

//10
let r = numbers.filter(num => num%2===0).map(num => num*num);
console.log(r);
console.log("___________________________________________________________");
console.log();

//11
let marks = [87,94,91,100,80,77,83];
let total = marks.reduce((sum,mark) => sum+mark,0);
console.log(total);
console.log("___________________________________________________________");
console.log();


//12
let totalchar = words.reduce((total,word) => total+word.length,0);
console.log(totalchar);
console.log("___________________________________________________________");
console.log();


//13
let input = [-3,3,-7,1,-10,8];
let pos = input.filter(num => num > 0);
console.log(pos);
console.log("___________________________________________________________");
console.log();
