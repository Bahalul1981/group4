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
