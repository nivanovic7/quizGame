class LogicGame {   
    render(){
        document.querySelector(".game-body").innerHTML = "";
        this._generateHtml();
    }
    _generateHtml(){
        this._generateGameContainers();
        this._generateRows();
        this._generateFields("user-input");
        this._generateFields("result-field");
        this._generateInputButtons();
        this._generateCrudButtons();
    }

    _generateGameContainers(){
        const gameBody = document.querySelector(".game-body")

        const logicGameWrap = document.createElement("div");
        logicGameWrap.classList.add("logic-game-wrap")
        const displayWrap = document.createElement("div")
        displayWrap.classList.add("display-wrap")
        const inputButtonsWrap = document.createElement("div")
        inputButtonsWrap.classList.add("input-buttons-wrap")

        gameBody.appendChild(logicGameWrap)
        logicGameWrap.appendChild(displayWrap)
        logicGameWrap.appendChild(inputButtonsWrap)
    }
    _generateRows(){
        const displayWrap = document.querySelector(".display-wrap");
        for(let i = 0; i < 7; i++){
            const row = document.createElement("div")
            row.classList.add("row");
            displayWrap.appendChild(row)
        }
    }

    _generateFields(fieldClass){
       const rows = document.querySelectorAll(".row");
       rows.forEach(row => {
       for(let i = 0; i < 4; i++){
            const field = document.createElement("div")
            field.classList.add(fieldClass);
            row.appendChild(field)
       }
        })
    }

    _generateInputButtons(){
        const row = document.createElement("div")
        row.classList.add("row")
        for(let i = 0; i < 5; i++){
            const field = document.createElement("div")
            field.classList.add("input-btn");
            row.appendChild(field)
            
        }
        const inputButtonsWrap = document.querySelector(".input-buttons-wrap")
        inputButtonsWrap.appendChild(row)
    }

    _generateCrudButtons(){
        const inputButtonsWrap = document.querySelector(".input-buttons-wrap")

        const row = document.createElement("div");
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Izbrisi"
        deleteBtn.classList.add("delete-btn")
        const confirmBtn = document.createElement("button")
        confirmBtn.textContent = "Potvrdi"
        confirmBtn.classList.add("confirm-btn")
        row.appendChild(deleteBtn)
        row.appendChild(confirmBtn)

        inputButtonsWrap.appendChild(row)
    }


}

export default new LogicGame;