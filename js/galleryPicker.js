const imageContainers = document.querySelectorAll(".image-pick");
const mainImage = document.querySelector(".image-container img");

let setImage = (fileName)=>{
    mainImage.src = fileName;
}

imageContainers.forEach(e =>{
    let imageName = e.querySelector("img").src;
    e.addEventListener("click", ()=>{
        mainImage.src = imageName;
    });
})
