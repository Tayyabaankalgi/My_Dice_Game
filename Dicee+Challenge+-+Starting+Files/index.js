var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomnumber1 +".png";

var randomeImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);