const availableGames = ["math", "logic", "trivia"];

export const state = {
    playingNums: [],
    targetNum: "",
    displayedInput : [],
    userResult : null,
}

const possibleOperations = ["+", "-", "*", "/"]

const possibleNumbers = [
    [1,2,3,4,5,6,7,8,9],
    [10,15,20,25],
    [50,75,100], 
] 

const generateRandomNum = (max, min) => Math.random * (max-min) + min;
const shuffleArray = array => array.sort((a, b) => 0.5 - Math.random());

export const generatePlayingNums = function(){
    possibleNumbers.forEach((arr,i) => {
        const shuffledArray = shuffleArray(arr);
        const pickedNums = i === 0 ? shuffledArray.slice(0,4) : shuffledArray.at(-1);
        state.playingNums = state.playingNums.concat(pickedNums)
    })
    state.playingNums.sort((a,b) => a-b)
}

const getRadnomMathOperation = () => possibleOperations[Math.floor(Math.random() * 4)]

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


export const insertUserInput = function(input){
//     //cant input operation first
// if(state.displayedInput.length ===9 0 && !+input) return;
//     //cant input 2 nums in a row
// if(state.displayedInput.length === 1 && +input) return;
    //cant input 2 nums or 2 operations in a row

if(!isNaN(state.displayedInput.at(-1)) && !isNaN(input)) return;


state.displayedInput.push(input)
}


export const deleteUserInput = function(){
    state.displayedInput.pop();
}

export const calculateUserResult = function(){
    const userInput = document.querySelector(".display-field").textContent;
    let result;
    try{
         result = eval(userInput)
    }catch (err){
         result = null; 
   }
   state.userResult = result;
}
