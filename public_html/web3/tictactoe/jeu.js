let cases = document.querySelectorAll(".case");
let reset = document.querySelector('#reset');
let message = document.querySelector('#message');
let site = document.querySelector('body');
let perdue = document.querySelector('#perdue')
let gagner = document.querySelector('#gagner')
let lore = document.querySelector('#lore')
let paper = document.querySelector('#paper')


let yay = new Audio('images/yayy.wav') 
let fh = new Audio('images/fh.wav')

let page = new Audio('images/page_turn.mp3')



perdue.style.visibility = "hidden";
gagner.style.visibility = "hidden";

lore.style.visibility = "hidden";

let jouerX = true; 
let gagnant = ''; 
const patrons = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


for (let boite of cases) {
    
    
    boite.active = true;
    boite.addEventListener ("click", function() {
        console.log("It was clicked...");
        if (boite.active) {
            if (jouerX) {
                boite.style.backgroundImage = "url('images/joyeux.png')";
                jouerX = false; 
            }
            else{ 
                boite.style.backgroundImage = "url('images/triste.png')";
                jouerX = true;
            }
            boite.active = false;
        }
        valide();
    }); 
}

const valide = function () {
    for (let patron of patrons) {
        let val1 = cases[patron[0]].style.backgroundImage.slice(5,22);
        let val2 = cases[patron[1]].style.backgroundImage.slice(5,22);
        let val3 = cases[patron[2]].style.backgroundImage.slice(5,22);
        
        if (val1 &&
            val1 === val2 &&
            val1 === val3) {
            console.log(`Le gagnant est ${val1}`);
            for (let boite of cases) {
            boite.active = false 
        }

        if (jouerX == true) {
            fh.play();
            perdue.style.visibility = "visible";
            site.style.visibility = "hidden", site.style.backgroundImage = "none", site.style.backgroundColor = "black";
            
        }
        if (jouerX == false) {
            yay.play();
            gagner.style.visibility = "visible";
            site.style.visibility = "hidden", site.style.backgroundImage = "none";
            
        }
    }
}
}

reset.addEventListener("click", function () {
    for (let boite of cases) {
        boite.active = true; 
        boite.style.backgroundImage = "none";
        jouerX = true;
    }

});
perdue.addEventListener("click", function () {
    for (let boite of cases) {
        boite.active = true; 
        boite.style.backgroundImage = "none";
        jouerX = true;
        perdue.style.visibility = "hidden";
        site.style.visibility = "visible", site.style.backgroundImage = "linear-gradient(to left,  rgb(243, 172, 106), white, rgb(169, 255, 255))", site.style.backgroundColor = "white";
    }

});
gagner.addEventListener("click", function () {
    for (let boite of cases) {
        boite.active = true; 
        boite.style.backgroundImage = "none";
        jouerX = true;
        gagner.style.visibility = "hidden";
        site.style.visibility = "visible", site.style.backgroundImage = "linear-gradient(to left,  rgb(243, 172, 106), white, rgb(169, 255, 255))", site.style.backgroundColor = "white";
    }

});




paper.addEventListener("click", function() {
    lore.style.visibility = "visible";
    document.getElementById('lore').style.animation = "scroll 1.5s ease-in-out";
    page.play();
})

lore.addEventListener("click", function() {
    lore.style.visibility = "hidden";
    document.getElementById('lore').style.animation = "down 1s ease-in-out";
})

// function myFunction() {
//   var x = document.getElementById("lore");
//   if (x.style.display === "none") {
//     x.style.display = "";
//   } else {
//     x.style.display = "none";
//   }
// }


