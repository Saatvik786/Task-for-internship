const bal = document.getElementById("bar");
const clo = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bal) {
    bar.addEventListener("click" , () => {
        nav.classList.add("active");
    })
}

if( clo) {
    close.addEventListener("click" , () => {
        nav.classList.remove("active");
    })
}
