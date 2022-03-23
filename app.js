class Casino {
    constructor(name, isFakeCoin){
        this.timesPlayed = 0
        this.fakeCoin = isFakeCoin
    }

    playGame(betAmount) {
        if (this.fakeCoin == false){
            if (Math.random() <= 0.5) {
                console.log('Death Casino wins')
            } else {
                console.log(`Player wins ${betAmount * (this.timesPlayed + 1)}`)   
            }
        } else if (this.fakeCoin == true){
            console.log('Death Casino wins, fakeCoin true')
        }
    this.timesPlayed += 1
    }

    rollDie(betAmount) {
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          const rndInt = randomIntFromInterval(1, 6)
        console.log(`You rolled a ${rndInt}!`)
    }
};

// TESTS
const myCasino = new Casino("Death Casino", false);
console.log(myCasino);
console.log(myCasino.fakeCoin)
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("Death Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS
const myExtraBonusCasino = new Casino("Death Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

