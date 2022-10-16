document.addEventListener("DOMContentLoaded", startApp);

const formulario = document.querySelector("#formulario");
const borrar = document.querySelector("#borrar");

const firstName = document.querySelector("#name");
const lastName = document.querySelector("#apellido");
const email = document.querySelector("#email");
const amound = document.querySelector("#cantidad");
const category = document.querySelector("#category");
const total = document.querySelector(".total");
const mensajeError = document.querySelector(".mensajeError");

let informationGeneral = [];
function startApp() {
    formulario.addEventListener("submit", sendInfo);
    borrar.addEventListener("click", resetInfo);
}


function sendInfo(e) {
    e.preventDefault();

    if (!Number(firstName.value) === false ||firstName.value === "" || lastName.value === "" || email.value === "" || amound.value === "") {
        mostrarAlerta("Ingrese la información correspondiente");

        return;
    }

    const obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        amound: amound.value,
        category: category.value,
    };

    // informationGeneral.push(obj);

    logicaCount(obj);
}

function logicaCount(informacion) {
    const {amound, category} = informacion;
    let contador = 200;

    if (category === "estudiante") {
        contador =  (contador % 80) * amound;
    }else if(category === "traine"){
        contador =  (contador % 50) * amound;
    }else{
        contador =  (contador % 15) * amound;
    }

    mostrarValor(contador)

}
function mostrarValor(valor) {
    total.textContent = valor;
}
function resetInfo() {
    formulario.reset();
}
function mostrarAlerta(mensaje) {
    const error = document.querySelector('.error');

    if(!error){
        const divMensaje = document.createElement('div');
        divMensaje.className = "error px-5 py-2 bg-danger mt-3 rounded";

        const message = document.createElement('p');
        message.className = "text-light fw-bold text-uppercase m-0";
        message.textContent = mensaje;

        divMensaje.appendChild(message);

        mensajeError.appendChild(divMensaje);

        setTimeout(() => {
            mensajeError.removeChild(divMensaje);
        }, 3000);
    }
}