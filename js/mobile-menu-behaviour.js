let menuNavigation = document.querySelector("nav.mainnav");

document.getElementById("mobile-menu").addEventListener("click", ()=>{
    if(menuNavigation.style.display === "block"){
        menuNavigation.style.display = "none";
    }
    else{
        menuNavigation.style.display = "block";
    }

});

//listening to media query
const mediaQuery = window.matchMedia('(min-width: 768px)');
function handleMobileChange(e){
    if(e.matches){
        menuNavigation.style.display = "block";
    }
    else{
        menuNavigation.style.display = "none";
    }
}

mediaQuery.addListener(handleMobileChange);
handleMobileChange(mediaQuery);