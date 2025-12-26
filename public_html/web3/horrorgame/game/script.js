const left = document.getElementById("left")
const right = document.getElementById("right")
const forward = document.getElementById("forward")
const back = document.getElementById("back")
const view = document.getElementById("view")
const shudder = document.getElementById("picture")
// const statue = document.getElementById("statue")
const dialogue = document.getElementById("dialogue")
const treecheck = document.getElementById("treecheck")
const birdcheck = document.getElementById("birdcheck")
const flowercheck = document.getElementById("flowercheck")
const gravecheck = document.getElementById("gravecheck")
const mooncheck = document.getElementById("mooncheck")
const tombcheck = document.getElementById("tombcheck")
const statuecheck = document.getElementById("statuecheck")
var step1 = new Audio("audio/walk1.mp3")
var step2 = new Audio("audio/walk2.mp3")
var step3 = new Audio("audio/walk3.mp3")
var step4 = new Audio("audio/walk4.mp3")
let state ;
let bird ;
let statue ;
let flowers ;
let bench ;
let moon ;
let graves ;
let tree1 ;
let tomb ;
let tree2 ;

// i hate this stupid code oh my god okay so nothing works i've been working 24 hours a day for like two weeks streight and it's just streight up garbage i don't meet half the requierments but if it isn't an e for effort i might just drop out -ann


//if (!state) {
    localStorage.setItem("state", "start");
    state = localStorage.getItem("state");
    console.log("reset")
    console.log("INIT" + state);
    localStorage.setItem("bird", "0")
    localStorage.setItem("statue", "0")
    localStorage.setItem("flowers", "0")
    localStorage.setItem("bench", "0")
    localStorage.setItem("moon", "0")
    localStorage.setItem("graves", "0")
    localStorage.setItem("tree1", "0")
    localStorage.setItem("tomb", "0")
    localStorage.setItem("tree2", "0")

//}






forward.addEventListener("click", function(){
    
    if (state == "start") {
        // console.log("we're getting somewhere now baby")
        view.innerHTML = `<img src="images/main/main1f.jpg">`
        localStorage.setItem("state", "m1f")
        dialogue.innerHTML = `<p>Attendez, qu'est-ce que c'est à gauche ?</p>`
    }
    
    else if (state == "m1f") {
        // console.log("m2f")
        view.innerHTML = `<img src="images/main/main2f.jpg">`
        localStorage.setItem("state", "m2f")
    }
    
    else if (state == "m2f") {
        // console.log("m3f")
        view.innerHTML = `<img src="images/main/main3f.jpg">`
        localStorage.setItem("state", "m3f")
    }

    else if (state == "m3f") {
        // console.log("m4f")
        view.innerHTML = `<img src="images/main/main4f.jpg">`
        localStorage.setItem("state", "m4f")
    }
    
    else if (state == "m4f") {
        // console.log("m5f")
        view.innerHTML = `<img src="images/main/main5f.jpg">`
        localStorage.setItem("state", "m5f")
    }
    
    else if (state == "m5f") {
        // console.log("m6f")
        view.innerHTML = `<img src="images/main/main6f.jpg">`
        localStorage.setItem("state", "m6f")
    }
    else if (state == "m6f") {
        // console.log("m7f")
        view.innerHTML = `<img src="images/main/main7f.jpg">`
        localStorage.setItem("state", "m7f")
        dialogue.innerHTML = `<p>je pourrais prendre une photo de la lune d'ici...</p>`
    }
    else if (state == "m7f") {
        console.log("m7f bump")
        view.innerHTML = `<img src="images/main/main7f.jpg">`
    }
    else if (state == "m1l") {
        view.innerHTML = `<img src="images/main/bird1f.jpg">`
        localStorage.setItem("state", "b1f")
        dialogue.innerHTML `<p> "Si je l'aligne correctement... ça pourrait être parfait."</p>`
    }
    // main
    // tomb
    else if (state == "t1f") {
        view.innerHTML = `<img src="images/tomb/tomb2f.jpg">`
        localStorage.setItem ("state", "t2f")
    }

    else if (state == "t2f") {
        view.innerHTML = `<img src="images/tomb/tomb3f.jpg">`
        localStorage.setItem ("state", "t3f")
    }

    else if (state == "t3f") {
        view.innerHTML = `<img src="images/tomb/tomb4f.jpg">`
        localStorage.setItem ("state", "t4f")
        dialogue.innerHTML = `<p>le chemin à droite pourrait mener à quelque chose d'intéressant</p>`
    }

    else if (state == "t4f") {
        view.innerHTML = `<img src="images/tomb/tomb5f.jpg">`
        localStorage.setItem ("state", "t5f")
        dialogue.innerHTML = `<p>Hmmm. La façon dont ces pierres sont alignées.</p>`
    }

    else if (state == "t5f") {
        view.innerHTML = `<img src="images/tomb/tomb6f.jpg">`
        localStorage.setItem ("state", "t6f")
    }

    else if (state == "t6f") {
        view.innerHTML = `<img src="images/tomb/tomb7f.jpg">`
        localStorage.setItem ("state", "t7f")
        dialogue.innerHTML = `<p>Hmm, ça a l'air intéressant... Et il y a un arbre sympa à gauche...</p>`
    }

    else if (state == "t7f") {
        console.log (state + "bump")
    }

        else if (state == "t1b") {
            console.log (state + "bump")

    }

    else if (state == "t2b") {
        view.innerHTML = `<img src="images/tomb/tomb1b.jpg">`
        localStorage.setItem ("state", "t1b")
    }

    else if (state == "t3b") {
        view.innerHTML = `<img src="images/tomb/tomb2b.jpg">`
        localStorage.setItem ("state", "t2b")
        dialogue.innerHTML = `<p>le chemin à droite pourrait mener à quelque chose d'intéressant</p>`
    }

    else if (state == "t4b") {
        view.innerHTML = `<img src="images/tomb/tomb3b.jpg">`
        localStorage.setItem ("state", "t3b")
        dialogue.innerHTML = `<p>Hmmm. La façon dont ces pierres sont alignées.</p>`
    }

    else if (state == "t5b") {
        view.innerHTML = `<img src="images/tomb/tomb4b.jpg">`
        localStorage.setItem ("state", "t4b")
    }

    else if (state == "t6b") {
        view.innerHTML = `<img src="images/tomb/tomb5b.jpg">`
        localStorage.setItem ("state", "t5b")
        dialogue.innerHTML = `<p>Hmm, ça a l'air intéressant... Et il y a un arbre sympa à gauche...</p>`
    }

    else if (state == "t7b") {
        view.innerHTML = `<img src="images/tomb/tomb6b.jpg">`
        localStorage.setItem ("state", "t6b")
    }
    // tomb
    // statue
    else if (state == "s0f") {
        view.innerHTML = `<img src="images/statue/statue1f.jpg">`
        localStorage.setItem("state", "s1f")
    }
    
    else if (state == "s1f") {
        view.innerHTML = `<img src="images/statue/statue2f.jpg">`
        localStorage.setItem("state", "s2f")
    }

    else if (state == "s2f") {
        view.innerHTML = `<img src="images/statue/statue3f.jpg">`
        localStorage.setItem("state", "s3f")
    }

        else if (state == "s3f") {
        view.innerHTML = `<img src="images/statue/statue4f.jpg">`
        localStorage.setItem("state", "s4f")
    }

        else if (state == "s4f") {
        view.innerHTML = `<img src="images/statue/statue5f.jpg">`
        localStorage.setItem("state", "s5f")
        dialogue.innerHTML `<p>Attendez... Qu'est-ce que c'est là-bas, à gauche ?</p>`
    }

        else if (state == "s5f") {
        view.innerHTML = `<img src="images/statue/statue6f.jpg">`
        localStorage.setItem("state", "s6f")
    }

        else if (state == "s6f") {
        view.innerHTML = `<img src="images/statue/statue7f.jpg">`
        localStorage.setItem("state", "s7f")
    }
    
        else if (state == "s7f") {
        view.innerHTML = `<img src="images/statue/statue8f.jpg">`
        localStorage.setItem("state", "s8f")
        dialogue.innerHTML `<p>Waouh, ce truc fait peur vu de près !</p>`
    }

        else if (state == "s8f") {
            console.log (state + "bump")
    }
        else if (state == "s5l") {
            view.innerHTML = `<img src="images/statue.flowers1f.jpg">`
            localStorage.setItem("state", "f1f")
        }
    // statue
    // sub
        else if (state == "sub1f") {
            view.innerHTML = `<img src="images/sub/sub2f.jpg">`
            localStorage.setItem("state", "sub2f")
            dialogue.innerHTML = `<p>J'espère avoir trouvé un bon angle pour photographier cet arbre.</p>`
        }

        else if (state == "sub2f") {
            view.innerHTML = `<img src="images/sub/sub3f.jpg">`
            localStorage.setItem("state", "sub3f")
        }

        else if (state == "sub3f") {
            view.innerHTML = `<img src="images/sub/sub4f.jpg">`
            localStorage.setItem("state", "sub4f")
        }

        else if (state == "sub4f") {
            view.innerHTML = `<img src="images/sub/sub5f.jpg">`
            localStorage.setItem("state", "sub5f")
        }

        else if (state == "sub5f") {
            view.innerHTML = `<img src="images/sub/russia5l.jpg">`
            localStorage.setItem("state", "r5f")
        }

        else if (state == "r5f") {
            view.innerHTML = `<img src="images/russia/benchf1.jpg">`
            localStorage.setItem("state", "be1f")
        }

                else if (state == "sub1b") {
            view.innerHTML = `<img src="images/sub/sub2b.jpg">`
            localStorage.setItem("state", "sub2b")
            dialogue.innerHTML = `<p>J'espère avoir trouvé un bon angle pour photographier cet arbre.</p>`
        }

        else if (state == "sub2b") {
            view.innerHTML = `<img src="images/sub/sub3b.jpg">`
            localStorage.setItem("state", "sub3b")
        }

        else if (state == "sub3b") {
            view.innerHTML = `<img src="images/sub/sub4b.jpg">`
            localStorage.setItem("state", "sub4b")
        }

        else if (state == "sub4b") {
            view.innerHTML = `<img src="images/sub/sub5b.jpg">`
            localStorage.setItem("state", "sub5b")
        }

        else if (state == "sub5b") {
            view.innerHTML = `<img src="images/sub/russia5l.jpg">`
            localStorage.setItem("state", "r5b")
        }
    // sub
    // russia

    else if (state == "r1f") {
        view.innerHTML = `<img src="images/russia/russia2f.jpg">`
        localStorage.setItem("state. r2f")
    }
        else if (state == "r2f") {
        view.innerHTML = `<img src="images/russia/russia3f.jpg">`
        localStorage.setItem("state. r3f")
    }
        else if (state == "r3f") {
        view.innerHTML = `<img src="images/russia/russia4f.jpg">`
        localStorage.setItem("state. r4f")
    }
        else if (state == "r4f") {
        view.innerHTML = `<img src="images/russia/russia5f.jpg">`
        localStorage.setItem("state. r5f")
        dialogue.innerHTML = `<p>huh, i think i see a bench to the right"</p>`
    }

        else if (state == "r5f") {
            console.log (state + "bump")
    }

    else if (state == "r1b") {
        console.log (state + "bump")
    }
    else if (state == "r2b") {
        view.innerHTML = `<img src="images/russia/russia1f.jpg">`
        localStorage.setItem("state. r1b")
    }
    else if (state == "r3b") {
        view.innerHTML = `<img src="images/russia/russia2f.jpg">`
        localStorage.setItem("state. r2b")
    }
    else if (state == "r4b") {
        view.innerHTML = `<img src="images/russia/russia3f.jpg">`
        localStorage.setItem("state. r3b")
    }
    
    else if (state == "r5b") {
            view.innerHTML = `<img src="images/russia/russia4b.jpg">`
            localStorage.setItem("state. r4b")
    }
    
    else {
        console.log ("nomove" + state)
    }

    step1.play ();
    state = localStorage.getItem("state");
    console.log(state)
});


back.addEventListener("click", function(){
    state = localStorage.getItem("state");
    
    if (state == ("bpic")) {
        view.innerHTML = `<img src="images/main/main1f.jpg">`
        localStorage.setItem("state",  "m1f")
    }

    else if (state == ("s8f")) {
        view.innerHTML = `<img src="images/statue/statue7f.jpg">`
        localStorage.setItem("state", "s7f")
    }

    else if (state == ("m7f")) {
        view.innerHTML = `<img src="images/main/main6f.jpg">`
        localStorage.setItem("state", "m6f")
    }

    else if (state == ("t5l")) {
        view.innerHTML = `<img src="images/tomb/tomb5f.jpg">`
        localStorage.setItem("state", "t5f")
    }

    else if (state == ("t7l")) {
        view.innerHTML = `<img src="images/tomb/tomb7f.jpg">`
        localStorage.setItem("state", "t7f")
    }

    else if (state == ("t7f")) {
        view.innerHTML = `<img src="images/tomb/tomb7f.jpg">`
    }

    else if (state == ("sub1f")) {
        view.innerHTML = `<img src="images/tomb/tomb7f.jpg">`
        localStorage.setItem("state", "t7f")
    }

    else if (state == ("be1f")) {
        view.innerHTML = (`<img src="images/russia/russia5b.jpg">`)
        localStorage.setItem("state", "r5b")
    }

    else {

    }

    step4.play();

});
    
left.addEventListener("click", function(){
    state = localStorage.getItem("state");

    if (state == ("m1f")) {
        view.innerHTML = `<img src="images/main/main1l.jpg">`
        localStorage.setItem("state", "m1l")
    }

    else if (state == "m6f") {
        view.innerHTML = `<img src="images/tomb/tomb1f.jpg">`
        localStorage.setItem("state", "t1f")
    }

    //tomb

    else if (state == "t5f") {
        view.innerHTML = `<img src="images/tomb/tomb5l.jpg">`
        localStorage.setItem("state", "t5l")
    }

    else if (state == "t7f") {
        view.innerHTML = `<img src="images/tomb/tomb7l.jpg">`
        localStorage.setItem("state", "t7l")
    }
    // tomb
    // statue
    else if (state == "s5f") {
        view.innerHTML = `<img src="images/statue/statue5l.jpg">`
        localStorage.setItem("state", "s5l")
    }

    else if (state == "s7f") {
        view.innerHTML = `<img src="images/russia/russia1f.jpg">`
        localStorage.setItem("state", "r1f")
    }

    // statue
    // russia
    else if (state == "r3f") {
        view.innerHTML = `<img src="images/russia/russia3l.jpg">`
    }

    else if (state == "r5f") {
        view.innerHTML = `<img src="images/sub/russia5l.jpg">`
        localStorage.setItem("state", "su5b")
    }

    else {
        console.log ("can't move")
    }
        state = localStorage.getItem("state");
    console.log(state)
    step3.play();
    });


right.addEventListener("click", function(){
        state = localStorage.getItem("state");
        
        if (state == "m7f") {
        view.innerHTML = `<img src="images/main/main7r.jpg">`
    }
    
    else if (state == "t1f") {
        view.innerHTML = `<img src="images/tomb/tomb1r.jpg">`
    }
    
    else if (state == "b1f") {
        view.innerHTML = `<img src="images/main/bird1r.jpg">`
        localStorage.setItem("state", "bpic")
    }
    //main
    //tomb
    else if (state == "t4f") {
        view.innerHTML = `<img src="images/statue/tomb4r.jpg">`
        localStorage.setItem("state", "s0f")
    }
    
    else if (state == "t7f") {
        view. innerHTML = `<img src="images/sub/sub1f.jpg">`
        localStorage.setItem("state", "sub1f")
    }
    // tomb

    else if (state == "r3b") {
        view.innerHTML = `<img src="images/russia/russia3l.jpg">`
    }

    else if (state == "su1b") {
        view.innerHTML = `<img src="images/tomb7b.jpg">`
        localStorage.setItem("state", "t7b")
    }
    
    else {
        console.log ("nomove" + state)
    }
    // view.innerHTML = `<img src="images/">`
    state = localStorage.getItem("state");
    console.log(state)
    step2.play();
});

treecheck.addEventListener("click",function() {
    tree1 = localStorage.getItem("treecheck")
    tree2 = localStorage.getItem("treecheck")
    if (tree1 == "1") {
        view.innerHTML = (`<img src=images/digicam/tree1.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
    }

    else if (tree2 == "1") {
        view.innerHTML = (`<img src=images/digicam/tree2.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
    }

    else if (tree1 == "1" + "tree2" == "2") {
        view.innerHTML = (`<img src=images/digicam/tree2.png>`)
        view.innerHTML = (`<img src=images/digicam/tree2.png>`)
    }
});
flowercheck.addEventListener("click",function() {
    flowers = localStorage.getItem("flower")
    if (flowers == "1") {
        view.innerHTML = (`<img src=images/digicam/flower.png`)
        dialogue.innerHTML = (`<p>???</p>`)
    }
});
birdcheck.addEventListener("click", function() {
    bird = localStorage.getItem("bird")
    if (bird == "1") {
        view.innerHTML = (`<img src=images/digicam/bird.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
        console.log (`get fucked lmao`)
    }
    console.log (`click`)
});
gravecheck.addEventListener("click",function() {
    graves = localStorage.getItem("grave")
    if (graves == "1") {
        view.innerHTML = (`<img src=images/digicam/grave.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
    }
});
mooncheck.addEventListener("click",function() {
    moon = localStorage.getItem("moon")
    if (moon == "1") {
        view.innerHTML = (`<img src=images/digicam/moon.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
    }
});
tombcheck.addEventListener("click",function() {
    tomb = localStorage.getItem("tomb")
    if (tomb == "1") {
        view.innerHTML = (`<img src=images/digicam/tomb.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
    }
});
statuecheck.addEventListener("click",function() {
    statue = localStorage.getItem("statue")
    if (statue == "1") {
        view.innerHTML = (`<img src=images/digicam/statue.png>`)
        dialogue.innerHTML = (`<p>???</p>`)
    }
});

shudder.addEventListener("click", function(){
    
    // dosen't work
    if ("bird" == "1" + "statue" == "1" + "bench" == "1" + "flowers" == "1" + "moon" == "1" + "graves" == "1" + "tree1" == "1" + "tomb" + "1" + "tree2" == "1") {
        dialogue.innerHTML ("<p>that's all</p>")
    }

    else if (state == "bpic") {
        view.innerHTML = `<img src="images/main/photo_bird.jpg">`
        localStorage.setItem ("bird", "1")
        birdcheck.innerHTML `<s><ul> oiseau</ul></s>`
    }

    else if (state == "s8f") {
        view.innerHTML = `<img src="images/statue/photo_statue/jpg">`
        localStorage.setItem ("statue", "1")
        statuecheck.innerHTML `<s><ul> quelque chose vraiment cool</ul></s>`
    }

    else if (state == "be1f") {
        view.innerHTML = `<img src="images/russia/photo_bench.jpg">`
        localStorage.setItem ("bench", "1")
        // benchcheck.innerHTML `s><ul> pierres tombales</ul></s>`
    }

    else if (state == "f1f") {
        view.innerHTML = `<img src="images/statue/photo_flowers`
        localStorage.setItem ("flowers", "1")
        flowercheck.innerHTML `<s><ul> feuilles </ul></s>`
    }

    else if (state == "m7f") {
        view.innerHTML = `<img src="images/main/photo_moon.jpg">`
        localStorage.setItem ("moon", "1")
        mooncheck.innerHTML `<s><ul> lune</ul></s>`
    }

    else if (state == "t5l") {
        view.innerHTML = `<img src="images/tomb/photo_graves.jpg">`
        localStorage.setItem ("graves", "1")
        gravecheck.innerHTML `<s><ul> pierres tombales</ul></s>`
    }

    else if (state == "t7l") {
        view.innerHTML = `<img src="images/tomb/photo_tree1.jpg">`
        localStorage.setItem ("tree1", "1")
        treecheck.innerHTML `<s><ul> arbres</ul></s>`
    }

    else if (state == "t7f") {
        view.innerHTML = `<img src="images/tomb/photo_tomb.jpg">`
        localStorage.setItem ("tomb", "1")
        tombcheck.innerHTML `<s><ul> tombeau</ul></s>`
    }

    else if (state == "r3b") {
        view.innerHTML = `<img src="images/russia/photo_tree2.jpg">`
        localStorage.setItem ("tree2", "1")
    }

        else if (state == "r3f") {
        view.innerHTML = `<img src="images/russia/photo_tree2.jpg">`
        localStorage.setItem ("tree2", "1")
    }
    
    else {
        dialogue.innerHTML = "<p>il y a rien interresant ici</p>"
        console.log (`nopic` + state)
    }
});