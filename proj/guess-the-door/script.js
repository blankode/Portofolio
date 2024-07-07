let winner;

function playEasyMode() {
    winner = Math.floor(Math.random() * 3);
    ++winner;
    const intro = document.getElementById("introduction");
    intro.style.display = 'none';
    let play = document.getElementById("playSpace");
    play.innerHTML = `<h1>Guess the Door - Easy Mode</h1><br>`;
    for (var i = 1; i <= 3; ++i) {
        play.innerHTML += `&nbsp&nbsp<button type="button" 
        class="btn button-bg btn-lg position-relative" onclick="checkWinner(`+ i +`,`+ winner +`)" id="`+ i +`">
        <i class="bi bi-door-closed"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ i +`</span>
    </button>&nbsp&nbsp`;
    }
}

function playHardMode() {
    let getAmount = prompt("Please enter the amount of doors you want to guess from:", "");
    let doorAmount = parseInt(getAmount);
    if (Number.isInteger(doorAmount)) {
        console.log(doorAmount);
        winner = Math.floor(Math.random() * doorAmount);
        ++winner;
        const intro = document.getElementById("introduction");
        intro.style.display = 'none';
        let play = document.getElementById("playSpace");
        play.innerHTML = `<h1>Guess the Door - Hard Mode</h1><br>`;
        for (var i = 1; i <= doorAmount; ++i) {
            play.innerHTML += `&nbsp&nbsp<button type="button" 
            class="btn button-bg btn-lg position-relative" onclick="checkWinner(`+ i +`)" id="`+ i +`">
            <i class="bi bi-door-closed"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ i +`</span>
        </button>&nbsp&nbsp`;
        }
    } else {
        alert("Something is wrong, can you try again?");
    }

}

function checkWinner(id) {
    const intro = document.getElementById("introduction");
    if (id === winner) {
        let door = document.getElementById(id);
        door.innerHTML = `<i class="bi bi-door-open"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ id +`</span>`;
        door.classList.replace("button-bg", "button-bg-winner");
        door.disabled = true;
        alert("Congratulations! You have found that door " + id + " is the right one!");
        document.getElementById("playSpace").innerHTML = "";
        intro.style.display = 'block';
    } else {
        let door = document.getElementById(id);
        door.innerHTML = `<i class="bi bi-door-open"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ id +`</span>`;
        door.classList.replace("button-bg", "button-bg-wrong");
        door.disabled = true;
    }
}