export const countdown = function(){
    const i = setInterval(()=> console.log("tick"),1000)
    setTimeout(function(){
        clearInterval(i)
        const game = document.querySelector(".game-body");
        game.innerHTML = `<div class="div">
        <p>Questuon some</p>
        <div>anser 1</div>
        <div>Answer 2</div>
        <div>Answer D</div>
        <div> Answer C</div>
    </div>`
    }, 7000)
}

