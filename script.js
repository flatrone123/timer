let startDay = document.querySelector('.start-date').value;
let endDay = document.querySelector('.end-date').value;
let leftTime = new Date(endDay) - new Date();

function foo() {
    let month = document.querySelector('.mo');
    let day = document.querySelector('.d');
    let hour = document.querySelector('.h');

    let m = Math.floor(leftTime / 1000 / 60 / 60 / 24 / 30);
    let d = Math.floor(leftTime / 1000 / 60 / 60 / 24 % 30);;
    let h = Math.floor(leftTime / 1000 / 60 / 60 % 24);; 
    let min = Math.floor(leftTime / 1000 / 60 % 60);
    let sec = leftTime % 60;

    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    h = h < 10 ? '0' + h : h;
    d = d < 10 ? '0' + d : d;

    month.textContent = m;
    day.textContent = d;
    hour.innerHTML = `${h}:${min}:${sec}`;

    leftTime--;
}

setInterval(foo, 1000);



drowDays();

// function timer() {
//     let sec = document.querySelector('.s');
//     let min = document.querySelector('.m');
//     let hour = document.querySelector('.h');
//     let day = document.querySelector('.d')
//     let month = document.querySelector('.mo')



//     if (sec.textContent == 0) {
//         if (min.textContent == 0) {
//             if (hour.textContent == 0) {
//                 if (day.textContent == 0) {
//                     if (month.textContent == 0) {
//                         // "Действуй чувак"
//                     }
//                     month.textContent--;
//                     day.textContent = 30;
//                 }
//                 day.textContent--;
//                 hour.textContent = 24;
//             }
//             hour.textContent--;
//             min.textContent = 60;
//         }
//         min.textContent--;
//         sec.textContent = 60;
//     } 
    
//     sec.textContent--
// }

function drowDays() {
    let days = document.querySelector('.daysMatrix');
    let daysToDrow = (new Date(endDay) - new Date(startDay)) / 1000 / 60 / 60 / 24;

    for (let i = 0; i < daysToDrow; i++) {
        let day = document.createElement('div');
        day.classList.add('dayMatrix');
        days.append(day);
    }

    let today = (new Date() - new Date(startDay)) / 1000 / 60 / 60 / 24;
    let div = document.querySelectorAll('.dayMatrix');

    for (let i = 0; i < today; i++) {
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