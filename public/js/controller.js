import * as model from "./model.js"
import mathGame from "./views/math.js"


const controlMathGame = function(){
    model.generatePlayingNums();
    model.generateTargetNum();
    mathGame.renderGame(model.state)
}

const controlMathDisplay = function(input){
    model.insertUserInput(input)
    if(model.state.displayedInput.length === 0) return;
    mathGame.displayNumbers(model.state.displayedInput)
    mathGame.disableUsedButtons(model.state.displayedInput)
}

const controlDeleteBtn = function(){
    model.deleteUserInput();
    mathGame.displayNumbers(model.state.displayedInput)
    mathGame.disableUsedButtons(model.state.displayedInput)
}

const controlConfirmBtn = function(){
    model.calculateUserResult();
    mathGame.displayUserResult(model.state.userResult)
}



const init = function(){
    controlMathGame();
    mathGame.addHandlerDisplay(controlMathDisplay);
    mathGame.addHandlerDelete(controlDeleteBtn)
    mathGame.addHandlerConfirm(controlConfirmBtn)
}
init();