import logicView from "./views/logicView.js";
import * as model from "./logicModel.js"



export const  logicGameInit = function(){
    console.log("HELLO LLOGIC")
    model.test();
    logicView.render();
}