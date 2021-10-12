var bluePill = document.getElementById("blue");
var redPill = document.getElementById("red");
var text = document.getElementById("testo")

bluePill.addEventListener("click", function(){
    redPill.classList.add("hidden")
   text.innerHTML = `The story ends, You wake up in your bed and believe whatever you want to believe` 

})


redPill.addEventListener("click", function(){
    bluePill.classList.add("hidden")
    text.innerHTML = "You stay in Wonderland, and I show you how deep the rabbit hole goes." 
})

