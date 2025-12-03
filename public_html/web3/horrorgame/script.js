const left = document.getElementById("left")
const right = document.getElementById("right")
const forward = document.getElementById("forward")
const back = document.getElementById("back")
const view = document.getElementById("view")
const shudder = document.getElementById("picture")


left.addEventListener("click", function()
{view.innerHTML = `<img src="images/demoleft.jpg">`
{console.log("left")}}
    )
forward.addEventListener("click", function()
{view.innerHTML = `<img src="images/statuepov.jpg">`
{console.log("forward")}}
    )
back.addEventListener("click", function()
{view.innerHTML = `<img src="images/trapped.jpg">`
{console.log("back")}}
)
right.addEventListener("click", function()
{view.innerHTML = `<img src="images/demoright.jpg">`
{console.log("right")}}
    )

shudder.addEventListener("click", function()
{if (view.innerHTML = `<img src="images/statuepov.jpg">`)
    {view.innerHTML = `<img src="images/statuepic.jpg`}
})