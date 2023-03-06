  class MathGame{
    _parentElement = document.querySelector(".game-body")

    renderGame(data){
        const html = this._generateMarkup(data)
        this._parentElement.innerHTML = html;
        console.log("RENEDERED")
    }

    displayNumbers(nums){
        const display = document.querySelector(".display-field");
        display.textContent = ""
        nums.forEach(num => display.textContent += num)
    }

    disableUsedButtons(buttons){
        const inputsBtns = document.querySelectorAll(".game-body a")
        inputsBtns.forEach(btn => btn.classList.remove("disable-btn"))

        buttons.forEach(btnValue => {
            //if btn value is math operator skip it
            if(isNaN(btnValue)) return;
           const btn = document.querySelector(`.game-body [data-value="${btnValue}"]`);
           btn.classList.add("disable-btn");
        })
    }    

    addHandlerDisplay(handler){
        const inputsBtns = document.querySelectorAll(".game-body a")
        inputsBtns.forEach(btn => {
            btn.addEventListener("click", function(){
                handler(btn.dataset.value)
            })
        })
    }

    addHandlerDelete(handler){
        const deleteBtn = document.querySelector(".delete-btn")
        deleteBtn.addEventListener("click",handler)
        console.log("HELlloo")
    }

    addHandlerConfirm(handler){
       document.querySelector(".confirm-btn").addEventListener("click", function(){
        document.querySelector(".game-body").style.pointerEvents = "none"
        document.querySelector(".game-body").style.opacity = ".5"
        handler()
       })

    }


    displayUserResult(result){
        document.querySelector(".display-field").textContent = result;
    }


    _generateMarkup(data){
        return `<div class="target-number">${data.targetNum}</div>
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