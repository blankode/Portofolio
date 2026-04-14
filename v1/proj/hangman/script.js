let missingLetters = 0;
let lives = 1;

function buildStage() {
    let word = document.getElementById("word").value.toLowerCase();
    document.getElementById("introduction").style.display = 'none';
    document.getElementById("hangmanStage").style.display = 'block';
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];
    document.getElementById("key" + firstLetter).disabled = true;
    document.getElementById("key" + lastLetter).disabled = true;
    let wordPreview = document.getElementById("wordPreview");
    for (var i = 0; i < word.length; ++i) {
        if (word[i] === firstLetter) {
            wordPreview.innerText += word[i];
        } else if (word[i] === lastLetter) {
            wordPreview.innerText += word[i];
        } else {
            wordPreview.innerText += '_';
            ++missingLetters;
        }
    }
}

function addLetter(letter) {
    document.getElementById("key" + letter).disabled = true;
    let word = document.getElementById("word").value.toLowerCase();
    let getPreview = document.getElementById("wordPreview").innerHTML;
    let currentWord = Array.from(getPreview);
    let match = false;
    for (var i = 0; i < word.length; ++i) {
        if (word[i] === letter && currentWord[i] === '_') {
            currentWord[i] = letter;
            --missingLetters;
            match = true;
        }
    }
    if (match === false) {
        ++lives;
        document.getElementById("hang").src = "./img/" + lives + ".png";
    }
    if (missingLetters !== 0 && lives === 11) {
        document.getElementById("keyboard").innerHTML = `<br><div class="alert alert-danger" role="alert">
        You have lost!
      </div><button type="button" class="btn btn-secondary" onclick="document.getElementById('wordPreview').innerText = document.getElementById('word').value">Reveal word</button>
       or <button type="button" class="btn btn-secondary" onclick="tryAgain()">Try again</button>`;
    }
    if (missingLetters === 0 && lives < 11) {
        document.getElementById("keyboard").innerHTML = `<br><div class="alert alert-success" role="alert">
        Congratulations! You won!
      </div><button type="button" class="btn btn-secondary" onclick="tryAgain()">Go again</button>`;
    }
    document.getElementById("wordPreview").innerHTML = currentWord.join("");
}

function tryAgain() {
    location.reload();
}