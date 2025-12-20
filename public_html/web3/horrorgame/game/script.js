const left = document.getElementById("left")
const right = document.getElementById("right")
const forward = document.getElementById("forward")
const back = document.getElementById("back")
const view = document.getElementById("view")
const shudder = document.getElementById("picture")
// const statue = document.getElementById("statue")
const dialogue = document.getElementById("dialogue")
let step1 = new Audio("audio/walk1.m4a")
let step2 = new Audio("audio/walk2.m4a")
let step3 = new Audio("audio/walk3.m4a")
let step4 = new Audio("audio/walk4.m4a")
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
    }
    else if (state == "m7f") {
        console.log("m7f bump")
        view.innerHTML = `<img src="images/main/main7f.jpg">`
    }
    else if (state == "m1l") {
        view.innerHTML = `<img src="images/main/bird1f.jpg">`
        localStorage.setItem("state", "b1f")
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
    }

    else if (state == "t4f") {
        view.innerHTML = `<img src="images/tomb/tomb5f.jpg">`
        localStorage.setItem ("state", "t5f")
    }

    else if (state == "t5f") {
        view.innerHTML = `<img src="images/tomb/tomb6f.jpg">`
        localStorage.setItem ("state", "t6f")
    }

    else if (state == "t6f") {
        view.innerHTML = `<img src="images/tomb/tomb7f.jpg">`
        localStorage.setItem ("state", "t7f")
    }

    else if (state == "t7f") {
        console.log (state + "bump")
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
    }

        else if (state == "r5f") {
            console.log (state + "bump")
    }
    
    else {
        console.log ("nomove" + state)
    }
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
        localStorage.setItem("state", "t4f")
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

    else {
        console.log ("something")
    }
        state = localStorage.getItem("state");
    console.log(state)
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
    
    else {
        console.log ("nomove" + state)
    }
    // view.innerHTML = `<img src="images/">`
    state = localStorage.getItem("state");
    console.log(state)
});

shudder.addEventListener("click", function(){
    
    
    if ("bird" == "1" + "statue" == "1" + "bench" == "1" + "flowers" == "1" + "moon" == "1" + "graves" == "1" + "tree1" == "1" + "tomb" + "1" + "tree2" == "1") {
        dialogue.innerHTML ("<p>that's all</p>")
    }

    else if (state == "bpic") {
        view.innerHTML = `<img src="images/main/photo_bird.jpg">`
        localStorage.setItem ("bird", "1")
    }

    else if (state == "s8f") {
        view.innerHTML = `<img src="images/statue/photo_statue/jpg">`
        localStorage.setItem ("statue", "1")
    }

    else if (state == "be1f") {
        view.innerHTML = `<img src="images/russia/photo_bench.jpg">`
        localStorage.setItem ("bench", "1")
    }

    else if (state == "f1f") {
        view.innerHTML = `<img src="images/statue/photo_flowers`
        localStorage.setItem ("flowers", "1")
    }

    else if (state == "m7f") {
        view.innerHTML = `<img src="images/main/photo_moon.jpg">`
        localStorage.setItem ("moon", "1")
    }

    else if (state == "t5l") {
        view.innerHTML = `<img src="images/tomb/photo_graves.jpg">`
        localStorage.setItem ("graves", "1")
    }

    else if (state == "t7l") {
        view.innerHTML = `<img src="images/tomb/photo_tree1.jpg">`
        localStorage.setItem ("tree1", "1")
    }

    else if (state == "t7f") {
        view.innerHTML = `<img src="images/tomb/photo_tomb.jpg">`
        localStorage.setItem ("tomb", "1")
    }

    else if (state == "r3l") {
        view.innerHTML = `<img src="images/russia/photo_tree2.jpg">`
        localStorage.setItem ("tree2", "1")
    }
    
    else {
        dialogue.innerHTML = "<p>il y a rien interresant ici</p>"
    }
});