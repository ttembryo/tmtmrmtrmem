console.log("script is WORKING!")


const stage = document.querySelector("body");
const myChar = document.getElementById("agsby");

//sounds 
// const squeak = new Audio()

myChar.onclick = function() {
    this.classList.toggle("move")
    //squeak.play();

}

stage.addEventListener ("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);

})

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);

    //var coords = "translateX("+event.clientX+"px) translate("+event.clientY+"px)";
    var coords = `translateX(${event.clientX-250}px) translateY(${event.clientY-277}px)`;
    myChar.style.transform = coords;

})

// keyboard input
document.onkeydown = checkKeys;

function checkKeys (event) {
    if(event.keyCode == 37) {
        var coords = `translateX(${event.clientX-250}px) translateY(${event.clientY-277}px)`;
        myChar.style.transform = coords;

    }


}

// myChar.onclick = function() {
//     this.classList.toggle("move")

// }