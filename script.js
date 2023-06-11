let startDay = document.querySelector('.start-date').value;
let endDay = document.querySelector('.end-date').value;
let left = new Date(endDay) - new Date();



function setMonth() {
    let d = left / 1000 / 60 / 60 / 24;
    let m;
    for (let i = 0; d > 30; d -= 30, i++) {
        m = i;
    }
    console.log(d, m);

    let month = document.querySelector('.mo')
    month.textContent = m+1;

    let day = document.querySelector('.d')
    day.textContent = Math.floor(d);
}
setMonth();

drowDays();
setInterval(timer, 1000);

function timer() {
    let sec = document.querySelector('.s');
    let min = document.querySelector('.m');
    let hour = document.querySelector('.h');
    let day = document.querySelector('.d')
    let month = document.querySelector('.mo')



    if (sec.textContent == 0) {
        if (min.textContent == 0) {
            if (hour.textContent == 0) {
                if (day.textContent == 0) {
                    if (month.textContent == 0) {
                        // "Действуй чувак"
                    }
                    month.textContent--;
                    day.textContent = 30;
                }
                day.textContent--;
                hour.textContent = 24;
            }
            hour.textContent--;
            min.textContent = 60;
        }
        min.textContent--;
        sec.textContent = 60;
    } 
    
    sec.textContent--
}

function drowDays() {
    let days = document.querySelector('.daysMatrix');
    let today = new Date() - new Date(startDay);
    


    for (let i = 0; i < left / 1000 / 60 / 60 / 24; i++) {
        let day = document.createElement('div');
        day.classList.add('dayMatrix');
        days.append(day);
    }

    let a = Math.round((left - today) / 1000 / 60 / 60 / 24);
    let b = left / 1000 / 60 / 60 / 24;
    let div = document.querySelectorAll('.dayMatrix');
    for (let i = 0; i < (b - a); i++) {
        div[i].classList.add('dayPass')

    }
}



















































// function timer(num, elem) {
//     let t = setInterval(() => {
//         elem.textContent = num;
//         num--;
//         if (num < 0 ) clearInterval(t);
//     }, 1000)
// }