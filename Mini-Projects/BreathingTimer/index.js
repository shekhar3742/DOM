let timedisplay = document.querySelector('.time');
let startdisplay = document.querySelector('#start');
let stopdisplay = document.querySelector('#stop');
let timeInterval;
let IsRunning = false;
let timerdisplay = () => {
    let time = 4;

    timeInterval = setInterval(() => {
        let min = parseInt(time / 60, 10);
        let sec = parseInt(time % 60, 10);
        timedisplay.textContent = `0${min}:${sec}`;
        if (--time < 0) {
            clearInterval(timeInterval);
            timedisplay.textContent = "Breathe Out ";

            setTimeout(() => {
                timedisplay.textContent = "Breathe IN ";
                timerdisplay();
            }, 4000);
        }


    }, 1000)
}


startdisplay.addEventListener('click', () => {
    if (!IsRunning) {
        timerdisplay();
        console.log("hello")
        IsRunning = true;
    }
})
let stoptimer = () => {
    clearInterval(timeInterval);
    timedisplay.textContent = "Breathe IN ";
    console.log("Stop")
}
stopdisplay.addEventListener('click', () => {
    stoptimer();
    IsRunning = false;
})
