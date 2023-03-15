import logicView from "./views/logicView.js";
import * as model from "./logicModel.js"



const controlGameStart = function(){
    model.generateRandomPattern();
    logicView.render();
}

const controlInputDisplay = function(userInput){
    model.saveUserinput(userInput);
    logicView.displayUserInput(model.state.userInput);
} 

const controlDeleteBtn = function(){
    model.deleteUserInput();
    logicView.displayUserInput(model.state.userInput);
}

export const  logicGameInit = function(){
    controlGameStart();
    logicView.addHandlerInputDisplay(controlInputDisplay)
    logicView.addHandlerDeleteBtn(controlDeleteBtn)
}

