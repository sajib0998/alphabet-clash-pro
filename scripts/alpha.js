
function getARandomAlphabet(){
    // get or create an alphabets array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split("");
    console.log(alphabets);
    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    // console.log(randomNumber);
    const index = Math.round(randomNumber);
    // console.log(index);
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}



function play(){
    // step 1- hide the home screen
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    // show the playground
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
    continueGame()
}
// background Color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // update score
        // get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // new score
        const newScore = currentScore + 1;
        // show the updated score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        // get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // reduce the life count
        const newLife = currentLife - 1;
        //  Display the updated life count
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)














function continueGame(){
    // step 1- generate a random alphabets
    const alphabet = getARandomAlphabet();
    console.log('your alphabet:',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set Background Color
    setBackgroundColorById(alphabet);
}

