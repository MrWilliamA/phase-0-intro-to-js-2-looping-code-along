// Code your solutions in this file

const writeCards = (name, event) => {

    let newName = [];
    for(let i = 0; i < name.length; i++) {
        newName.push("the current name is " + name[i]);   
 
    }
    return newName;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday"); 


const countDown = (num) => {
 counter = 0;

 while(counter < num) {
console.log(num);
num--;
 }

}