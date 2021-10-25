let start = document.getElementById('start');
let clockSpace = document.getElementById('main__clock');
let stop = document.getElementById('stop');
let clock = null;
start.addEventListener('click', () => {
    if (clock === null) {
        clock = setInterval( () => {
            let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
        clockSpace.innerHTML = `${hours}:${minutes}:${seconds}`
        },1000);
    }
});

stop.addEventListener('click', () => {
    clearInterval(clock);
    clock = null;
});
