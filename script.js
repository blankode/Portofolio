let cards = 8;
let buttons = 13;
let separators = 1;

function changeLight(type) {
    let cycleButton = document.getElementById('lightCycle');
    if (type == 0) {
        //change cycle button
        cycleButton.innerHTML = `<i class="bi bi-sun"></i>`;
        cycleButton.classList.replace('btn-light', 'btn-dark');
        cycleButton.setAttribute('onclick', `changeLight(1)`);
        //change avatar border
        let avatar = document.getElementById('avatar');
        avatar.style.border = (`3px dashed white`);
        //change favicon
        let favicon = document.getElementById('favicon');
        favicon.setAttribute('href', './img/favicon-night.png');
        //change content
        let content = document.getElementById('content');
        content.style.backgroundImage = ('url(./img/bg-night.png)')
        content.style.color = 'white';
        //change bio
        const tableElement = document.querySelector('table.bio');
        tableElement.classList.replace('bio', 'bio2');
        //change body bg
        var body = document.body;
        body.style.backgroundImage = "url('./img/background2.jpg')";
        //change avatar
        var imgElement = document.getElementById('avatar');
        imgElement.src = './img/avatar2.png';
        //change navbar and sub-title font color
        var nav = document.getElementById('navbar');
        nav.classList.replace('navbar-light', 'navbar-dark');
        var subtitle = document.getElementById('sub-title');
        subtitle.style.color = '#000000';
        for (let i = 0; i < cards; ++i) {
            let card = document.getElementById('card-white');
            card.style.backgroundColor = 'black';
            card.style.color = 'white';
            card.style.border = '1px solid #212529';
            card.id = 'card-black';

        }
        for (let i = 0; i < buttons; ++i) {
            let button = document.getElementById('button-white');
            button.classList.replace('btn-dark', 'btn-light');
            button.id = 'button-black';
        }
        for (let i = 0; i < separators; ++i) {
            let separator = document.getElementById('separator-white');
            separator.style.color = 'darkgray';
            separator.id = 'separator-black';
        }
    } else {
        //change cycle button
        cycleButton.innerHTML = `<i class="bi bi-sunglasses"></i>`;
        cycleButton.classList.replace('btn-dark', 'btn-light');
        cycleButton.setAttribute('onclick', `changeLight(0)`);
        //change avatar border
        let avatar = document.getElementById('avatar');
        avatar.style.border = (`3px dashed black`);
        //change favicon
        let favicon = document.getElementById('favicon');
        favicon.setAttribute('href', './img/favicon-day.png');
        //change content
        let content = document.getElementById('content');
        content.style.backgroundImage = ('url(./img/bg-day.png)')
        content.style.color = 'black';
        //change bio
        const tableElement = document.querySelector('table.bio2');
        tableElement.classList.replace('bio2', 'bio');
        //change body bg
        var body = document.body;
        body.style.backgroundImage = "url('./img/background.jpg')";
        //change avatar
        var imgElement = document.getElementById('avatar');
        imgElement.src = './img/avatar.png';
        //change navbar and sub-title font color
        var nav = document.getElementById('navbar');
        nav.classList.replace('navbar-dark', 'navbar-light');
        var subtitle = document.getElementById('sub-title');
        subtitle.style.color = '#20393e';
        for (let i = 0; i < cards; ++i) {
            let card = document.getElementById('card-black');
            card.style.backgroundColor = 'white';
            card.style.color = 'black';
            card.style.border = '1px solid lightgray';
            card.id = 'card-white';
        }
        for (let i = 0; i < buttons; ++i) {
            let button = document.getElementById('button-black');
            button.classList.replace('btn-light', 'btn-dark');
            button.id = 'button-white';
        }
        for (let i = 0; i < separators; ++i) {
            let separator = document.getElementById('separator-black');
            separator.style.color = 'lightgray';
            separator.id = 'separator-white';
        }
    }
}

function scaleToFill() {
    $('video.video-background').each(function(index, videoTag) {
        var $video = $(videoTag),
            videoRatio = videoTag.videoWidth / videoTag.videoHeight,
            tagRatio = $video.width() / $video.height(),
            val;

        if (videoRatio < tagRatio) {
            val = tagRatio / videoRatio * 1.02; //size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges
        } else if (tagRatio < videoRatio) {
            val = videoRatio / tagRatio * 1.02;
        }

        $video.css('transform', 'scale(' + val + ',' + val + ')');

    });
}

function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateModeStatus() {
    const statusElement = document.getElementById('mode-status');
    if (isDarkMode()) {
        //console.log("Dark mode is enabled");
        changeLight(0)
    } else {
        //console.log("Dark mode is not enabled");
        changeLight(1)
    }
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', updateModeStatus);