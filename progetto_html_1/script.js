const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})

// cambio tema

const change = document.querySelector(".change");

change.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        change.textContent = "light mode";
        change.style.color = "black";
        change.style.backgroundColor = "white";
    }
    else{
        change.textContent = "dark mode";
        change.style.color = "white";
        change.style.backgroundColor = "black";
    }
});
