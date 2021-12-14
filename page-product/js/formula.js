const radioIndividual = document.getElementById("radio-individual");
const radioCompany = document.getElementById("radio-company");

const radioIndividualGrp = document.querySelector("#individual-grp");
const radioCompanyGrp = document.querySelector("#company-grp");

let radioChecked = ()=>{
    if(radioIndividual.checked){
        radioIndividualGrp.style.display = "block";
    }
    else{
        radioIndividualGrp.style.display = "none";
    }
    if(radioCompany.checked){
        radioCompanyGrp.style.display = "block";
    }
    else{
        radioCompanyGrp.style.display = "none";        
    }

}

radioChecked();

radioIndividual.onclick = radioChecked;
radioCompany.onclick = radioChecked;

document.querySelector("#submit").addEventListener("click", ()=>{

    let requiredInputs = Array.from(document.querySelectorAll("#required-fields input[type='text'], input[type='tel']"));

    if(radioIndividual.checked){
        requiredInputs = Array.from(document.querySelectorAll("#individual-grp input[type='text']")).concat(requiredInputs);
    }
    else if(radioCompany.checked){
        requiredInputs = Array.from(document.querySelectorAll("#company-grp input[type='text']")).concat(requiredInputs);
    }

    if(requiredInputs.some(e => e.value.length === 0)){
        document.querySelector(".error-message").style.display = "block";
        console.log("required fields")
    }
    else{
        window.location.href = "/page-product/orderconfirm.html";
    }

})