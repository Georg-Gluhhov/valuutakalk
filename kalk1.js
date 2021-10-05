

const  dollar=1.16;
const  rub=84.20;
const funt=0.89;
const frank=1.07;

function calculate(val, currency) {
    return(val*currency).toFixed(3);
}

function radioChange(event){
    var vastus=document.getElementById("vastus");
    var kogus=document.getElementById("kogus1");
    var pilt=document.getElementById("img1")
    let inputValue=kogus.value;
    if(event.target.id=="dollar"){
        vastus.innerHTML=calculate(inputValue, dollar) + "$";
        pilt.src="img/bux.png"
    }
    else if(event.target.id=="rub"){
        vastus.innerHTML=calculate(inputValue, rub) + "P";
        pilt.src="img/ruble.png"
    }
    else if(event.target.id=="funt"){
        vastus.innerHTML=calculate(inputValue, funt) + "F";
        pilt.src="img/funt.png"
    }
    else if(event.target.id=="frank"){
        vastus.innerHTML=calculate(inputValue, frank) + "Fr";
        pilt.src="img/frank.png"
    }
}
function selectChange(event) {
    var vastus2=document.getElementById("vastus2");
    var kogus2=document.getElementById("kogus2");
    var inputValue=kogus2.value;
    if(event.target.value=="dollar"){
        vastus2.innerHTML=calculate(inputValue, dollar) + "$";
    }
    else if(event.target.value=="rub"){
        vastus2.innerHTML=calculate(inputValue, rub) + "P";
    }
    else if(event.target.value=="funt"){
        vastus2.innerHTML=calculate(inputValue, funt) + "F";
    }
    else if(event.target.value=="frank"){
        vastus2.innerHTML=calculate(inputValue, frank) + "Fr";
    }

}
function validateForm() {
    let x = document.forms["va1"]["kogus1"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
function inputCurrencyText() {
    var inputValue=document.getElementById("kogus3").value;
    var inputTXT=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if(inputTXT=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$"

    }
    if(inputTXT=="rub"){
        vastus3.innerHTML=calculate(inputValue, rub) + "P"

    }
    if(inputTXT=="funt"){
        vastus3.innerHTML=calculate(inputValue, funt) + "F"

    }
    if(inputTXT=="frank"){
        vastus3.innerHTML=calculate(inputValue, frank) + "Fr"

    }

}
function radioChange2(event){
    var vastus4=document.getElementById("vastus4");
    var kogus4=document.getElementById("kogus4");
    const  J=1000;
    const  mj=0.001;
    const kl=0.238;
    const k=238.84;

    let inputValue=kogus4.value;
    if(event.target.id=="J"){
        vastus4.innerHTML=calculate(inputValue, J) + " joel";
    }
    else if(event.target.id=="mj"){
        vastus4.innerHTML=calculate(inputValue, mj) + " MegaJoel";
    }
    else if(event.target.id=="kl"){
        vastus4.innerHTML=calculate(inputValue, kl) + " kilokaloreid";
    }
    else if(event.target.id=="k"){
        vastus4.innerHTML=calculate(inputValue, k) + " kaloreid";
    }
}
function resetForm() {
    document.getElementById('v4').reset();
    vastus4.innerHTML=" ";
}