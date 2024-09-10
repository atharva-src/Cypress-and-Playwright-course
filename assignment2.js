//1 

/*let randomNumber1 = Math.ceil(Math.random() * 101) 
console.log(randomNumber1);*/

//2 

/*let randomNumber2 = Math.floor(Math.random()* 51) + 50;
console.log(randomNumber2);*/

//3 
// let randomNumber3 = Math.floor(Math.random()* 256);
// console.log(randomNumber3);

//4 
function rollDice(){
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}

const result = rollDice();
console.log(`You rolled a ${result}`);

//5 
/*function rollDice(){
    const diceRoll1 = Math.floor(Math.random() * 6) + 1;
const diceRoll2 = Math.floor(Math.random() * 6) + 1;
return `You rolled a ${diceRoll1} and a ${diceRoll2}`;
};*/
