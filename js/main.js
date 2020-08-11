var botScore=0,
	playerScore=0;
document.getElementById("grass").onclick=playerThrowsGrass;
function playerThrowsGrass(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"grass");
}
document.getElementById("water").onclick=playerThrowsWater;
function playerThrowsWater(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"water");
}
document.getElementById("fire").onclick=playerThrowsFire;
function playerThrowsFire(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"fire");
}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="grass";
	if(randomNumber<.33){
		botsWeapon="water";
	}
	else if(randomNumber<.6666){
		botsWeapon="fire";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Tie! Your Pokémon could use more training.");
	}
	else if(
		(botsWeapon=="water" && playersWeapon=="fire") ||
		(botsWeapon=="fire" && playersWeapon=="grass") ||
		(botsWeapon=="grass" && playersWeapon=="water")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you were deafeated. You are not a Pokémon Master");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("playerScore").innerHTML=playerScore;
	displayCompleteMessage("You've deafeated Team Rocket! You Win!");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
