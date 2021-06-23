let start = document.getElementById('btn');
let div = document.getElementById('div');
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
        div.innerHTML = `${hours}:${minutes}:${seconds}`
        },1000);
    }
});

stop.addEventListener('click', () => {
    clearInterval(clock);
    clock = null;
});