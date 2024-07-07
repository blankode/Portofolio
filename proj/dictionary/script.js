function addWord() {
    let saveWord = document.getElementById("getWord").value;
    const dictionaryWord = localStorage.getItem(saveWord);
    if (saveWord !== dictionaryWord) {
        document.getElementById("notification").innerHTML = `<div class="alert alert-warning" role="alert">
        Word <strong>`+ saveWord + `</strong> has been added to the dictionary!
        </div>`
        localStorage.setItem(saveWord, saveWord);
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    } else {
        document.getElementById("notification").innerHTML = `<div class="alert alert-danger" role="alert">
        The word <strong>`+ saveWord + `</strong> already exists in the dictionary..
        </div>`
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    }
    document.getElementById("getWord").value = "";
}

function searchWord() {
    const word = document.getElementById("checkWord").value;
    const dictionaryWord = localStorage.getItem(word);
    if (word === dictionaryWord) {
        document.getElementById("notification").innerHTML = `<div class="alert alert-success" role="alert">
        Word <strong>`+ word + `</strong> has been found!
        </div>`
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    } else {
        document.getElementById("notification").innerHTML = `<div class="alert alert-danger" role="alert">
        The word <strong>`+ word + `</strong> was not found..
        </div>`
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    }
    document.getElementById("checkWord").value = "";
}

function resetDictionary() {
    localStorage.clear();
    document.getElementById("notification").innerHTML = `<div class="alert alert-secondary" role="alert">
    Dictionary library has been reset!
    </div>`
    setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
}