const left = document.getElementById("left")
const right = document.getElementById("right")
const forward = document.getElementById("forward")
const back = document.getElementById("back")
const view = document.getElementById("view")
const shudder = document.getElementById("picture")
const statue = document.getElementById("statue")
const dialogue = document.getElementById("dialogue")
let state ;



//if (!state) {
    localStorage.setItem("state", "start");
    state = localStorage.getItem("state");
    console.log("reset")
    console.log("INIT" + state);
//}




// left.addEventListener("click", function(){
// state = localStorage.getItem("state");

// console.log(state);

// {view.innerHTML = `<img src="images/">`
//     {console.log("nothing")}}}
// )


// }


forward.addEventListener("click", function(){
    
    if (state == "start") {
        console.log("we're getting somewhere now baby")
        view.innerHTML = `<img src="images/main/main1f.jpg">`
        localStorage.setItem("state", "m1f")
    }
    
    else if (state == "m1f") {
        console.log("m2f")
        view.innerHTML = `<img src="images/main/main2f.jpg">`
        localStorage.setItem("state", "m2f")
    }
    
    else if (state == "m2f") {
        console.log("m3f")
        view.innerHTML = `<img src="images/main/main3f.jpg">`
        localStorage.setItem("state", "m3f")
    }

    else if (state == "m3f") {
        console.log("m4f")
        view.innerHTML = `<img src="images/main/main4f.jpg">`
        localStorage.setItem("state", "m4f")
    }

        else if (state == "m4f") {
        console.log("m5f")
        view.innerHTML = `<img src="images/main/main5f.jpg">`
        localStorage.setItem("state", "m5f")
    }
    
        else if (state == "m5f") {
        console.log("m6f")
        view.innerHTML = `<img src="images/main/main6f.jpg">`
        localStorage.setItem("state", "m6f")
    }
        else if (state == "m6f") {
        console.log("m7f")
        view.innerHTML = `<img src="images/main/main7f.jpg">`
        localStorage.setItem("state", "m7f")
    }
    else {
        console.log ("nomove")
    }
    state = localStorage.getItem("state");
    console.log(state)
});


// {console.log("forward")}}
//     )
    
back.addEventListener("click", function(){
    state = localStorage.getItem("state");

    // if (state == "") {

    // }

    // else {
    //     console.log ("error" (state))
    // }
    view.innerHTML = `<img src="images/">`

});

right.addEventListener("click", function(){
    state = localStorage.getItem("state");

    // if (state == "") {}

    // else {
    //     console.log ("can't (state)")
    // }
    view.innerHTML = `<img src="images/">`

});

shudder.addEventListener("click", function(){

    if (state == "picture") {
        
    }

    else {
        dialogue.innerHTML = "<p>il y a rien interresant ici</p>"
    }
});