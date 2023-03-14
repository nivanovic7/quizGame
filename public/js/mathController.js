import * as model from "./model.js"
import mathGame from "./views/math.js"

const controlMathGame = function(){
    model.generatePlayingNums();
    model.generateTargetNum();
    mathGame.renderGame(model.state)
    //start countdown and save it's ID so it can be stopped on confirm btn
    model.saveCountdownId(mathGame.startTimer(controlEndGame));
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
    mathGame.endGame(model.state.countdownId);
    model.calculateUserResult();
    mathGame.displayUserResult(model.state.userResult);
    model.calculatePoints();
    mathGame.addPoints(model.state.points)
    model.reset();
}

export const mathGameInit = function(){
    controlMathGame();
    mathGame.addHandlerDisplay(controlMathDisplay);
    mathGame.addHandlerDelete(controlDeleteBtn)
    mathGame.addHandlerEndGame(controlEndGame);
}