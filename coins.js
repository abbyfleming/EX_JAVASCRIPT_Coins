

var coinInput = 2.19;
console.log("coinInput: ", coinInput);

//set the value of the coins

//set the value of the coins in purse
var coin = {
	quarters: 0.25,
	dimes: 0.10,
	nickels: 0.05,
	pennies: 0.01
}

var coinPurse = {
	quarters: 0,
	dimes: 0,
	nickels: 0,
	pennies: 0,
}


function rd(numberRound) {
  return Math.round(numberRound * 100) / 100
}

var coinCounter = function(coinInput) {

	while (coinInput >= coin.quarters) {
		coinInput = coinInput - coin.quarters;
		coinPurse.quarters += 1;
		coinInput = rd(coinInput);
	}  

	while (coinInput >= coin.dimes) {
		coinInput = coinInput - coin.dimes;
		coinPurse.dimes +=1;
		coinInput = rd(coinInput);
	}

	while (coinInput >= coin.nickels) {
		coinInput = coinInput - coin.nickels;
		coinPurse.nickels += 1;
		coinInput = rd(coinInput);
	}


	while (coinInput >= coin.pennies) {
		coinInput = coinInput - coin.pennies;
		coinPurse.pennies += 1;
		//coinInput=Math.round((coinInput*100))/100;
		coinInput = rd(coinInput);
	}


	// console.log("I have " + coinPurse.quarters + " quarters!");
	// console.log("I have " + coinPurse.dimes + " dimes!");
	// console.log("I have " + coinPurse.nickels + " nickels!");
	// console.log("I have " + coinPurse.pennies + " pennies!");
	
	return coinPurse; 

}

//console.log("What is coinInput after the loop? " , coinInput);

//run the function
console.log(coinCounter(coinInput));







