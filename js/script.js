const btnMenu = document.querySelector(".header-buttonMenu");

const itemsMenu = document.querySelector(".header-nav");

const barras = document.querySelectorAll(".header-buttonMenu span");
btnMenu.addEventListener("click", () =>{
    itemsMenu.classList.toggle("activado");
    btnMenu.classList.toggle("animation");
    barras.forEach(barra =>{
        barra.classList.toggle("animado");
    })
})

//mobile device
let navegador = navigator.userAgent;
let itemsNav = document.querySelectorAll(".header-nav-list-item");
if (window.innerWidth <= 768) {
    itemsNav.forEach( item =>{
        item.addEventListener("click", function(){
            itemsMenu.classList.remove("activado");
        })
    })
}

//language switch
const btnSwitch = document.querySelector(".switch-button");
btnSwitch.addEventListener("click", function(){
    btnSwitch.classList.toggle("active");
    if(btnSwitch.classList.contains("active")){
        btnSwitch.dataset.language = "en";
        changeLanguage(btnSwitch.dataset.language);
    }else{
        btnSwitch.dataset.language = "es";
        changeLanguage(btnSwitch.dataset.language);

    }
})
const textsToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async (language) =>{
    const request = await fetch(`js/languages/${language}.json`);
    const texts = await request.json();
    
    textsToChange.forEach(element => {
        console.log(element)
        const section = element.dataset.section;
        const value = element.dataset.value;
        element.innerHTML = texts[section][value];
    });
}
