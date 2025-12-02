

console.log('javascript loaded')

//selector 

let red = document.querySelector("#red");

red.addEventListener('click', function(event) {
    console.log(this.id);
    this.classList.toggle('move-right');
})