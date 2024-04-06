let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#btn-flip");
let resetBtn = document.querySelector("#btn-reset");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(function () {
            coin.style.animation = "flip-heads 3s forwards";
        }, 100);
        tails++;
    } else {
        setTimeout(function () {
            coin.style.animation = "flip-tails 3s forwards";
        }, 100);
        heads++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Smile: ${heads}`;
    document.querySelector("#tails-count").textContent = `Cry: ${tails}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
})