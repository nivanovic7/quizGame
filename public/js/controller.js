import * as model from "./model.js"
import mathGame from "./views/math.js"
import { countdown } from "./gameLoader.js";

const controlMathGame = function(){
    model.generatePlayingNums();
    model.generateTargetNum();
    mathGame.renderGame(model.state)
    mathGame.startTimer(controlEndGame);
}

const controlMathDisplay = function(input){
    model.insertUserInput(input)
    if(model.state.displayedInput.length === 0) return;
    mathGame.updateUi(model.state.displayedInput)
}

const controlDeleteBtn = function(){
    model.deleteUserInput();
    mathGame.updateUi(model.state.displayedInput)
}

const controlEndGame = function(){
    mathGame.endGame();
    model.calculateUserResult();
    mathGame.displayUserResult(model.state.userResult);
    countdown();

    
}

const init = function(){
    controlMathGame();
    mathGame.addHandlerDisplay(controlMathDisplay);
    mathGame.addHandlerDelete(controlDeleteBtn)
    mathGame.addHandlerEndGame(controlEndGame);

}
init();