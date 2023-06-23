const randomNumber1 = Math.floor(Math.random() * 6) + 1;

var img_src1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", img_src1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img_src2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", img_src2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins 🏆, Refresh to Play again!"
}
else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins 🏆, Refresh to Play again!"
}
else{
    document.querySelector("h1").textContent = "Draw 🤝, Refresh to Play again!"
}