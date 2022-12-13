var randomNumber1 = Math.random()*6;
randomNumber1= Math.ceil(randomNumber1);

var randomNumber2 = Math.random()*6;
randomNumber2= Math.ceil(randomNumber2);


var image1="images/dice"+randomNumber1+".png";
var image2="images/dice"+randomNumber2+".png";


document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").textContent="Player 2 Wins!"
}
else{
  document.querySelector("h1").textContent="It's a Tie!"
}
