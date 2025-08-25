console.log ('js loaded')


let button1 = document.querySelector("#button1");
let area1 = document.querySelector("#scroll1");
console.log ('ok')

button1.addEventListener('click', function(event) {
    console.log(this.id)
    area1.classList.toggle('show');
})
console.log ('hi')

let button2 = document.querySelector("#button2");
let area2 = document.querySelector("#scroll2");
console.log ('ok')

button2.addEventListener('click', function(event) {
    console.log(this.id)
    area2.classList.toggle('show');
})

let button3 = document.querySelector("#button3");
let area3 = document.querySelector("#scroll3");
console.log ('ok')

button3.addEventListener('click', function(event) {
    console.log(this.id)
    area3.classList.toggle('show');
})

// let button2 = document.querySelector("#button2");
// let area2 = document.querySelector("#scroll2");
// console.log ('ok')

// button.addEventListener('click', function(event) {
//     console.log(this.id)
//     area.classList.toggle('show');
// })

