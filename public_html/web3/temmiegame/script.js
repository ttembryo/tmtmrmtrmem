
// credits pour code: hugo, mathew, zoe, tuphi 

// creer le canvas --
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.querySelector("#gameBox").appendChild(canvas);


//LOAD SPRITES -- 
//background
var bgReady = false; 
var bgImage = new Image();
bgImage.src = "assets/bg3.png";
bgImage.onload = function () {
    bgReady = true;
    
};
// foreground
var fgReady = false; 
var fgImage = new Image();
fgImage.src = "assets/fg.png";
fgImage.onload = function () {
    fgReady = true;
};

// win img
// var winReady = false; 
// var winImage = new Image();
// winImage.src = "images/win.png";
// winImage.onload = function () {
//     winReady = true;
// }

// temmie sprite
var playerReady = false;
var playerImage = new Image(); 
playerImage.src = "assets/sprite.png";
playerImage.onload = function () {
    // style.animation = "float 2s infinite";
    playerReady = true; 
};
//coins 
var goodyReady = false;
var goodyImage = new Image(); 
goodyImage.src = "assets/coin.png"; 
goodyImage.onload = function () {
    goodyReady = true; 
};
//evil coins 
var baddyReady = false;
var baddyImage = new Image(); 
baddyImage.src = "assets/evilcoin.png"; 
baddyImage.onload = function () {
    baddyReady = true; 
};

var coinsCollected = 0;

// main game loop
var main = function () {
    if (gameOver()) {
        //lose
        // if (loseReady) {
        //     ctx.drawImage(loseImage, (canvas.width - winImage.width)/2, 
        //         (canvas.height - loseImage.height)/2);
        // }
    }
    else {
        //Pas encore gagné, jouer le jeu
        //déplacer le joueur
        if (player.x > 0 && player.x < canvas.width - player.width) {
            player.x += vX;
        }
        else {
            player.x -= vX;
            vX = -vX; //bounce
        }
        if (player.y > 0 && player.y < canvas.height - player.height) {
            player.y += vY
        }
        else {
            player.y -= vY;
            vY = -vY; //bounce
        }

        if (Math.random() > .99){
            spawngoodies();
        }
        if (Math.random() > .995){
            spawnbaddies();
        }
        // if (Math.random() < .99){
        //     removegoodies();
        // }
        
        
        

        //vérifier les collisions
        for (var i in goodies) {
            if (checkCollision(player,goodies[i])) {
                goodies.splice(i,1);
                coinsCollected = coinsCollected + 5;
            }
        }
        for (var i in baddies) {
            if (checkCollision(player,baddies[i])) {
                // goodies.splice(i,1);
                baddies.splice(i,1);
                // coinsCollected = coinsCollected - 5;
                gameOver();
                return;
            }
        }

        render();
        window.requestAnimationFrame(main);
    }
};

//check collisions
var checkCollision = function (obj1,obj2) {
    if (obj1.x < (obj2.x + obj2.width) && 
        (obj1.x + obj1.width) > obj2.x && 
        obj1.y < (obj2.y + obj2.height) && 
        (obj1.y + obj1.height) > obj2.y
        ) {
            return true;
    }
};




// draw everything
var render = function () {
    if (bgReady) {
        // ctx.fillStyle = ctx.createPattern(bgImage, 'repeat');
        // ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
       
    }
    if (playerReady) {
    ctx.drawImage(playerImage, player.x, player.y);
    // style.animation = "float 1s infinite";
    }
    if (goodyReady) {
        for (var i in goodies) {
            ctx.drawImage(goodyImage, goodies[i].x, goodies[i].y);
        }
    }
    if (baddyReady) {
        for (var i in baddies) {
            ctx.drawImage(baddyImage, baddies[i].x, baddies[i].y);
        }
    }
    if (fgReady) {
    ctx.drawImage(fgImage, 0, 0, canvas.width, canvas.height);
    }
    
    //label
    ctx.fillStyle = "rgba(255, 255, 255, 0.23)";
    ctx.fillRect(0, 0, canvas.width, 60);
    ctx.font = "30px Cambria";
    ctx.fillStyle = "rgba(255, 86, 227, 1)";
    ctx.fillText(coinsCollected + "ⓦ", 10, 50);

    // ctx.fillStyle = "rgba(255, 0, 0, 1)";
    // ctx.fillText(goodies.length-9 +"$", 32, 32 );
    // ctx.fillText("Game on!", 32, 32);
}
//creer des objets de jeu globaux
var player = {
    speed : 3, // movement en pixels par tick
    width: 72,
    height: 72
};
// demarrer le jeu
window.requestAnimationFrame(main);

var goodies = [ // ceci est un tableau (array)
    { width: 48, height: 48 }
];
var baddies = [ // ceci est un tableau (array)
    { width: 48, height: 48 }
];



// -- trois blocs
// variables de vitesse
var vX = 0;
var vY = 0;

// gerer les commandes du clavier (DESKTOP)
addEventListener("keydown", function (e) { 
    //touches
    if (e.keyCode == 38) { // HAUT
        vX = 0;
        vY = -player.speed;
    }
    if (e.keyCode == 40) { // BAS
        vX = 0;
        vY = player.speed + 1;
    }
    if (e.keyCode == 37) { // GAUCHE
        vX = -player.speed;
        vY = 0;
        
    }
    if (e.keyCode == 39) { // DROITE
        vX = player.speed;
        vY = 0;
    }
    // if (e.keyCode == 32) { // ARRÊT barre d’espace
    //     vX = 0;
    //     vY = 0;
    // }
}, );
addEventListener("keyup", function () {
    vX = 0;
    vY = .2;
});

// gerer les commandes tactiles (MOBILE)
addEventListener("touchstart", function (e) {
    if (e.target.id == "uArrow") { // HAUT
        vX = 0;
        vY = -player.speed - 1;
    }
    else if (e.target.id == "dArrow") { // BAS
        vX = 0;
        vY = player.speed;
    }
    else if (e.target.id == "lArrow") { // GAUCHE
        vX = -player.speed;
        vY = 0;
    }
    else if (e.target.id == "rArrow") { //DROIT
        vX = player.speed; 
        vY = 0;
    }
    else { // ARRÊT S’arrête si vous touchez ailleurs
        vX = 0;
        vY = 0;
    }
false });

addEventListener("touchend", function () {
    vX = 0;
    vY = .2;
})



//definir l'etat initial
var init = function () {
    player.x = (canvas.width - player.width) / 2 - 150; 
    player.y = (canvas.height - player.height) / 2 -250;

    //Placez des goodies à des endroits aléatoires 
    for (var i in goodies) {
        goodies[i].x = (Math.random() * (canvas.width - goodies[i].width));
        goodies[i].y = (Math.random() * (canvas.height - goodies[i].height));
    }
    //Placez des baddies à des endroits aléatoires 
    for (var i in baddies) {
        goodies[i].x = (Math.random() * (canvas.width - goodies[i].width));
        goodies[i].y = (Math.random() * (canvas.height - goodies[i].height));
    }
};

function gameOver() {
    ctx.fillStyle = "rgba(24, 35, 44, 0.14)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "Black";
    ctx.font = "50px Cambria";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText("Collecté " + coinsCollected + " pièces!", canvas.width / 2.3 -180, canvas.height / 2);
    
    
    // Stop the game
    cancelAnimationFrame(main);

    //restart after a few seconds
    
}

//verifie perdue
// var checkLose = function () {
//     // if (goodies.length > 0) { 
//         return false;
//     // } else { 
//     //     return true;
//     // }
// };


var spawngoodies = function () {
    goodies.push({
        width: 32,
        height: 32,
        x: (Math.random() * (canvas.width - 32)),
        y: (Math.random() * (canvas.width - 32)),
        img: Math.floor(Math.random() * 3)
    });
};
var spawnbaddies = function () {
    baddies.push({
        width: 32,
        height: 32,
        x: (Math.random() * (canvas.width - 32)),
        y: (Math.random() * (canvas.width - 32)),
        img: Math.floor(Math.random() * 3)
    });
};

// var removegoodies = function () {
//     if (goodies.length > 3) {
//         goodies.splice(i,1);
// }}

init();
