var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";  //for example:dice1.png
var randomImageSource1="images/"+randomDiceImage1; //for example: images/dice1.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";  //for example: dice2.png
var randomImageSource2="images/"+randomDiceImage2; //for example: images/dice2.png
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//player1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is Winner."
}

//player2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 is Winner."
}

//Draw
else{
    document.querySelector("h1").innerHTML="It's a Draw."
}