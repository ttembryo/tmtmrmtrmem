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

    var style = window.getComputedStyle(myChar);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;
    var coords;

    // left arrow
    if(event.keyCode == 37) {
        var coords = `translateX(${xVal-500}px) translateY(${yVal}px)`;
        myChar.style.transform = coords;

    }



}

// myChar.onclick = function() {
//     this.classList.toggle("move")

// }
function addMyObject() {
    /* custom object */
    let myObject = document.createElement("img");
    myObject.src = "img/wamfcoin.svg";
    stage.appendChild(myObject);
    //read window's availlable width and height in px
    let w = window.innerWidth;
    let h = window.innerHeight;
    //randomize numbers x & y within the space limits
    let randomX = Math.floor((Math.random() * w) + 1);
    let randomY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;   
    
    setTimeout(() => { myObject.remove(); addMyObject(); }, 3000)

  
}

addMyObject();
