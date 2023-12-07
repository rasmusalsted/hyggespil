const gameContainer = document.querySelector(".container");
const allPlantItems = document.querySelectorAll(".item");

const timeCount = document.getElementById("time-count");
const scoreCount = document.getElementById("score-count");

let countDown = 20;
let score = 0;

let startGame;
let startTime;

gameContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("plant-clicked")) {
        score ++;
        scoreCount.innerHTML = score;

        const tubeElem = e.target.parentElement.previousElementSibling;

        let textEl = document.createElement("span");
        textEl.setAttribute("class", "whack-text");
        textEl.innerHTML = "Whack!";

        tubeElem.appendChild(textEl);

        setTimeout(() => {
            textEl.remove();
        }, 300)

    }
})

document.addEventListener("DOMContentLoaded", () => {
    startTime = setInterval(() => {
        timeCount.innerHTML = countDown;
        countDown--;
    }, 1000)
    startGame = setInterval(() => {
        showPlant();
    }, 300)
})

function showPlant() {
    if(countDown < 0 ) {
        document.querySelector(".resultbox").style.display = "block";

        document.querySelector(".resultbox__text").innerHTML = `You whacked ${score} Mols!`

        clearInterval(startTime);
        clearInterval(startGame);
    } 

    let plantToAppear = allPlantItems[getRandomValue()].querySelector(".plant");
    plantToAppear.classList.add("plant-appear");
    hidePlant(plantToAppear);
}

function hidePlant(plantItem) { 
    setTimeout(() => {
        plantItem.classList.remove("plant-appear");
    }, 600)
}

function getRandomValue() {
    let rand = Math.random() * allPlantItems.length;
    return Math.floor(rand);
}
