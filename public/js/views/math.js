  class MathGame{
    _parentElement = document.querySelector(".game-body");
    TIME_TO_PLAY = 15;

    renderGame(data){
        const html = this._generateMarkup(data)
        this._parentElement.innerHTML = html;
    }

    startTimer(handler){
        const timer = document.querySelector(".time");
        timer.textContent = this.TIME_TO_PLAY;
        const countdown  = setInterval(() => {
            +timer.textContent --;
            if(!+timer.textContent){
                clearInterval(countdown);
                handler();
            }
        }, 1000
        )
    }

    updateUi(buttonValues){
        this._displayNumbers(buttonValues);
        this._disableUsedButtons(buttonValues);
    }

    _displayNumbers(nums){
        const display = document.querySelector(".display-field");
        display.textContent = ""
        nums.forEach(num => display.textContent += num)
    }

    _disableUsedButtons(buttonValues){
        const inputsBtns = document.querySelectorAll(".game-body a")
        inputsBtns.forEach(btn => btn.classList.remove("disable-btn"))

        buttonValues.forEach(btnValue => {
            //if btn value is math operator skip it
            if(isNaN(btnValue)) return;
           const btn = document.querySelector(`.game-body [data-value="${btnValue}"]`);
           btn.classList.add("disable-btn");
        })
    }    

    addHandlerDisplay(handler){
        const inputBtns = document.querySelectorAll(".game-body a");
        inputBtns.forEach(btn => {
            btn.addEventListener("click", function(){
                handler(btn.dataset.value);
            })
        })
    }

    addHandlerDelete(handler){
        const deleteBtn = document.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", handler);
    }

    addHandlerEndGame(handler){
       document.querySelector(".confirm-btn").addEventListener("click", function(){
        handler();
       })

    }


    displayUserResult(result){
        document.querySelector(".display-field").textContent = result;
    }

    endGame(){
        document.querySelector(".game-body").style.pointerEvents = "none";
        document.querySelector(".game-body").style.opacity = ".5";
        document.querySelector(".time").style.display = "none"
    }


    _generateMarkup(data){
        return `
        <div class="game-info">
            <div>Result: <span class="result">0</span></div>
            <div>Time: <span class="time">45</span></div>
        </div>
        <div class="target-number">${data.targetNum}</div>
        <div class="display-field-wrap">
            <div class="display-field"></div>
            <button class="delete-btn">Izbrisi</button>
        </div>
        <div class="available-numbers">
            <div class="sm"><a data-value=${data.playingNums[0]}>${data.playingNums[0]}</a><a data-value=${data.playingNums[1]}>${data.playingNums[1]}</a><a data-value=${data.playingNums[2]}>${data.playingNums[2]}</a><a data-value=${data.playingNums[3]}>${data.playingNums[3]}</a></div>
            <div class="md"><a data-value=${data.playingNums[4]}>${data.playingNums[4]}</a></div>
            <div class="bg"><a data-value=${data.playingNums[5]}>${data.playingNums[5]}</a></div>
        </div>
        <div class="math-operations">
            <a data-value="+">+</a>
            <a data-value="-">-</a>
            <a data-value="*">*</a>
            <a data-value="/">/</a>
            <a data-value="(">(</a>
            <a data-value=")">)</a>
        </div>
        <button class="confirm-btn">Potvrdi</button>`
    }
}

export default new MathGame();