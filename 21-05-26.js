//#1 
let userProfile ={
  Id: 103,
  Name:"Dharshini",
  Age:18,
  Course: "AI",
  
  get user() {
      return `Id: ${this.Id} Name: ${this.Name} Age: ${this.Age} Course: ${this.Course}`;
  },
  
  put(key,value){
      if(this.hasOwnProperty(key))
      {
          this[key] = value;
          console.log(`${key} updated successfully`);
      }
      else{
          console.log(`${key} not found`);
      }
  },
  
  post(key,value){
      if(this.hasOwnProperty(key)){
          console.log(`${key} alreday exists`);
      }
      else{
          this[key] = value;
          console.log(`${key} added successfully`);
      }
  }
}
console.log("Get Method");
console.log(userProfile.user);
console.log("-------------------------------------------------------");
console.log("Put Method");
userProfile.put('Age',19);
console.log(userProfile.user);
console.log("-------------------------------------------------------");
userProfile.post("City","Chennai")

//#2
