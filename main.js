const div = document.createElement("div");

const h1 = document.createElement("h1");

    h1.innerHTML = "Bienvenido al formulario CODERHOUSE"
    h1.className = "titulo";

const form = document.createElement("form");

    form.innerHTML = ""
    form.className = "formulario";

const labelNombre = document.createElement("label");

    labelNombre.setAttribute("for", "Nombre");
    labelNombre.innerHTML = "<b>Nombre del alumno</b> <br><br>";

const inputNombre = document.createElement("input");

    inputNombre.setAttribute("id", "Nombre");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("placeholder", "Nombre Completo");
    inputNombre.setAttribute("name","Nombre Completo");
    inputNombre.setAttribute("required","");

const labelMail = document.createElement("label");

    labelMail.setAttribute("for", "Mail");
    labelMail.innerHTML = "<br><br> <b>Mail</b> <br><br>";

const inputMail = document.createElement("input");

    inputMail.setAttribute("id", "Mail");
    inputMail.setAttribute("type", "email");
    inputMail.setAttribute("placeholder", "mail@gmail.com");
    inputMail.setAttribute("name","mail");
    inputMail.setAttribute("required","");

const labelOpinion = document.createElement("label");

    labelOpinion.innerHTML = "<br><br> <b>¿Que tan complicada te parecio la pre-entrega3?</b> <br><br>";

const inputOpinion = document.createElement("input");

    inputOpinion.setAttribute("id", "Opinion");
    inputOpinion.setAttribute("type", "text");

const botonSubmit = document.createElement("button");

    botonSubmit.setAttribute("id", "boton");
    botonSubmit.innerHTML = ("ENVIAR")
    botonSubmit.setAttribute("type", "submit");
    
document.body.append(div);
div.appendChild(h1);
div.appendChild(form);
form.appendChild(labelNombre);
form.appendChild(inputNombre);
form.appendChild(labelMail);
form.appendChild(inputMail);
form.appendChild(labelOpinion);
form.appendChild(inputOpinion);
form.appendChild(botonSubmit);

labelNombre.addEventListener("mouseover", () => {
    labelNombre.classList.add("hover")
})

labelNombre.addEventListener("mouseout", () => {
    labelNombre.classList.remove("hover")
})

labelMail.addEventListener("mouseover", () => {
    labelMail.classList.add("hover")
})

labelMail.addEventListener("mouseout", () => {
    labelMail.classList.remove("hover")
})

labelOpinion.addEventListener("mouseover", () => {
    labelOpinion.classList.add("hover")
})

labelOpinion.addEventListener("mouseout", () => {
    labelOpinion.classList.remove("hover")
})


const registrarDatosBoton = document.getElementById("boton");

registrarDatosBoton.addEventListener("click", registrarDatos);

function registrarDatos (){
    const datoNombre = document.getElementById("Nombre");
    const datoMail = document.getElementById("Mail");
    const datoOpinion = document.getElementById("Opinion");
    alert(
    `    Bienvenido ${datoNombre.value}
    Ya confirmamos tu mail ${datoMail.value}
    tu opinion fue ${datoOpinion.value}`); 
    localStorage.setItem("Nombre", datoNombre.value)
    localStorage.setItem("Mail", datoMail.value)
    localStorage.setItem("Opinion", datoOpinion.value)
}

