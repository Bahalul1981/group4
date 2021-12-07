let currentSlideIndex = 0;
const slideContainerEl = document.getElementsByClassName("gallery-slider-container")[0];
const imageSliders = document.querySelectorAll(".image-slide");
let dotList = [];

if(imageSliders.length !== 0){
    const dotRow = document.querySelector(".dots-row");
    imageSliders.forEach((e,i) =>{
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.addEventListener("click", ()=>{
            imageSliders.forEach(e =>{
                setSlide(i);
            })
        })
        dotList.push(dot);
        dotRow.appendChild(dot);
    })
    setSlide(0);
}

function setSlide(nr){
    if(nr >= imageSliders.length){
        nr = 0;
    }
    else if(nr < 0){
        nr = imageSliders.length-1;
    }
    imageSliders.forEach((e,i)=>{
        if(nr === i){
            e.style.display = "block";
            dotList[i].classList.add("current-dot");
        }
        else{
            e.style.display = "none";
            dotList[i].classList.remove("current-dot");
        }
    })
    currentSlideIndex = nr;
}

document.getElementById("slide-rightArrow").addEventListener("click", ()=>{
    currentSlideIndex++;
    setSlide(currentSlideIndex);
})

document.getElementById("slide-leftArrow").addEventListener("click", ()=>{
    currentSlideIndex--;
    setSlide(currentSlideIndex);
})