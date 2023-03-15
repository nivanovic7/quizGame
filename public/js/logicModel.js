
export const state = {
    targetPattern : [],
    userInput:[],
}
const options = ["heart", "star", "spades", "clubs", "diamond"];
const generateRandomNum = (max, min) => Math.floor(Math.random() * (max-min) + min)
export const generateRandomPattern = function(){
    const array = [];
    for(let i = 0; i < 4; i++){
        array.push(options[generateRandomNum(5,0)])
    }
    state.targetPattern = array;
}

export const saveUserinput = function(userInput){
    if(state.userInput.length > 3) return;
    state.userInput.push(userInput);
}

export const deleteUserInput = function(){
    state.userInput.pop();
}