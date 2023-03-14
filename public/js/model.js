
export const state = {
    playingNums: [],
    targetNum: "",
    displayedInput : [],
    userResult : null,
    countdownId : null,
    points: 0,
}

const possibleOperations = ["+", "-", "*", "/"]

const possibleNumbers = [
    [1,2,3,4,5,6,7,8,9],
    [10,15,20,25],
    [50,75,100], 
] 

const generateRandomNum = (max, min) => Math.random * (max-min) + min;
const shuffleArray = array => array.sort((a, b) => 0.5 - Math.random());
const getRadnomMathOperation = () => possibleOperations[Math.floor(Math.random() * 4)]

export const saveCountdownId = id => state.countdownId = id;

export const generatePlayingNums = function(){
    possibleNumbers.forEach((arr,i) => {
        const shuffledArray = shuffleArray(arr);
        const pickedNums = i === 0 ? shuffledArray.slice(0,4) : shuffledArray.at(-1);
        state.playingNums = state.playingNums.concat(pickedNums)
    })
    state.playingNums.sort((a,b) => a-b)
}

export const generateTargetNum = function(){
    const usedNums = state.playingNums.slice(generateRandomNum(1,state.playingNums.length-1));
    const targetNum = usedNums.reduce(
        (accumulator, currentValue) =>{
            return getIntCalculation(accumulator,currentValue);
        },
        0
      );
      state.targetNum =  Math.abs(targetNum);
}

const getIntCalculation = function(x,y){
    let calculation;
    let isInteger = false;
    while(calculation != true && isInteger != true){
        const operation = getRadnomMathOperation();
       calculation =  eval(`${x} ${operation} ${y}`);
       isInteger = Number.isInteger(calculation);
    }
    return calculation;
}

export const insertUserInput = function(input){
    //cant input 2 numbers in a row
    if(!isNaN(state.displayedInput.at(-1)) && !isNaN(input)) return;
    state.displayedInput.push(input)
}

export const deleteUserInput = () => state.displayedInput.pop();

export const calculatePoints = function(){
    const diff = Math.abs(+state.userResult - +state.targetNum);
    if(diff === 0){
        state.points += 10;
        return;
    }
    if(diff <= 5){
        state.points += 5;
    }
}

export const calculateUserResult = function(){
    const userInput = document.querySelector(".display-field").textContent;
    let result;
    try{
         result = eval(userInput);
    }catch (err){
         result = null; 
   }
   state.userResult = result;
}

export const reset = function(){
    state.playingNums = [];
    state.targetNum= "";
    state.displayedInput = [];
    state.countdownId = null;
    state.userResult = null;
}
