//sõnade massiivist väljastan suvalise sõna
const words = ["kelmus", "muskel", "pastor", "banaan", "sinine", "kurbus"];
let randomWord = "";
function getRandomWord(words) {

    const index = Math.floor(Math.random() * words.length);
    randomWord = words[index];

    return randomWord;
}
randomWord = getRandomWord(words);
let randomWordHidden = "******"
console.log(randomWord);
console.log(randomWordHidden);


function randomNr(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let lives = 7;

//esimene nupp
document.querySelector('.js-button-firstroll').addEventListener('click', firstRoll);
function firstRoll(){
    let roll = randomNr(1, 20);
    if (roll == 1){
        console.log("Veeretasid 1. Sorri, mäng on läbi.");
    } else if (roll == 20) {
        console.log("Veeretasid 20. Said ühe elu juurde.");
    } else return console.log(roll);
}

//teine nupp
document.querySelector('.js-button-secondroll').addEventListener('click', secondRoll);
function secondRoll() {
    let roll = randomNr(1, 10) * 10;
    let rollPercentage = (roll / 2);
    let lettersToOpen = Math.floor(randomWord.length * (rollPercentage / 100));
    let reply = console.log("Veeretasid " + roll + "." + " Protsent on "+ rollPercentage +" %. " + "Sulle avatakse " + lettersToOpen + " arv tähti. (haha joke - not really)\n");
    console.log("Paku täht tekstikasti.")
    return reply;


}


//tähe saatmise nupp
document.querySelector('.js-button-send').addEventListener('click', textInput);
//let lives = 7;
function textInput() {
    let input = document.querySelector('.js-text').value;
    input = String(input);

    //uurin kas sisestatud täht on valitud sõnas olemas
    if (randomWord.includes(input)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (input == randomWord[i]) {
            console.log('Arvasid ' + randomWord[i] + ' tähe ära. See asub ' + (i + 1) + '. positsioonil.');
            }
        }
    } else {
        console.log('Seda tähte ei ole otsitavas sõnas! -1 elu.');
     }
}


//kuvab mängijale visuaalselt vihjeid




//vastuse sisestamise nupp
document.querySelector('.js-button-sendanswer').addEventListener('click', sendAnswer);
function sendAnswer() {
    let answer = document.querySelector('.js-answer').value;
    if (answer == randomWord) {
        const newP = document.createElement('p');
        const newOutput = document.createTextNode("Õige vastus! " + "Otsitud sõna ongi " + '"' + answer + '".');
        newP.appendChild(newOutput);
        const currentDiv = document.querySelector("js-button-sendanswer");
        document.body.insertBefore(newP, currentDiv);
    } else {
        const newP = document.createElement('p');
        const newOutput = document.createTextNode("Vale vastus");
        newP.appendChild(newOutput);
        const currentDiv = document.querySelector("js-button-sendanswer");
        document.body.insertBefore(newP, currentDiv);
    }
}
