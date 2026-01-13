let nombre, age;
const nombreCampo = document.querySelector("#nombre");
const ageCampo = document.querySelector("#edad");
const divResult = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    nombre = nombreCampo.value;
    age = ageCampo.value;
    if(nombre != null && age != null){
        divResult.textContent = "";
        alert(`Hola ${nombre}!`);
        divResult.textContent = "Brindemos con "; 
        if (age < 18) {
            for(let i = 0; i < age; i++) {
                divResult.textContent += "🥛";
            }
        } else {
            for(let i = 0; i < age; i++) {
                divResult.textContent += "🍺";
            } 
        }
    } 
});