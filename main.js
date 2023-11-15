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

const labelDificultad = document.createElement("label");

    labelDificultad.innerHTML = "<br><br> <b>¿Que tan complicada te parecio la pre-entrega3?</b> <br><br>";

const inputFacil = document.createElement("input");

    inputFacil.setAttribute("id", "Facil");
    inputFacil.setAttribute("type", "radio");

const inputMedio = document.createElement("input");

    inputMedio.setAttribute("id", "Medio");
    inputMedio.setAttribute("type", "radio");

const inputDificil = document.createElement("input");

    inputDificil.setAttribute("id", "Dificil");
    inputDificil.setAttribute("type", "radio");
    inputDificil.innerHTML = ("<br><br>");

const labelFacil = document.createElement("label");

    labelFacil.innerHTML = "<b> Facil </b> ";

const labelMedio = document.createElement("label");

    labelMedio.innerHTML = "<br><br> <b> Medio </b> ";

const labelDificil = document.createElement("label");

    labelDificil.innerHTML = "<br><br> <b> Dificil </b> ";

const espacio = document.createElement("p");

    // espacio.innerHTML = ("<br>")

const botonSubmit = document.createElement("button");

    botonSubmit.setAttribute("id", "boton");
    botonSubmit.innerHTML = ("ENVIAR")
    botonSubmit.setAttribute("type", "submit");
    // button.setAttribute ("value", "Enviar");



document.body.append(div);
div.appendChild(h1);
div.appendChild(form);
form.appendChild(labelNombre);
form.appendChild(inputNombre);
form.appendChild(labelMail);
form.appendChild(inputMail);
form.appendChild(labelDificultad);
form.appendChild(labelFacil);
form.appendChild(labelMedio);
form.appendChild(labelDificil);
labelFacil.appendChild(inputFacil);
labelMedio.appendChild(inputMedio);
labelDificil.appendChild(inputDificil);
form.appendChild(espacio);
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

labelDificultad.addEventListener("mouseover", () => {
    labelDificultad.classList.add("hover")
})

labelDificultad.addEventListener("mouseout", () => {
    labelDificultad.classList.remove("hover")
})

const arrayNombre = [];
const arrayMail = [];
const arrayDificultad = [];
const registrarDatosBoton = document.getElementById("boton");

registrarDatosBoton.addEventListener("click", registrarDatos);

function registrarDatos (){
    const datoNombre = document.getElementById("Nombre").value
    const datoMail = document.getElementById("Mail").value;
    const datoFacil = document.getElementById("Facil").value;
    const datoMedio = document.getElementById("Medio").value;
    const datoDificil = document.getElementById("Dificil").value;
}

arrayNombre.push(datoNombre);
arrayMail.push(datoMail);
arrayDificultad.push(datoFacil);
arrayDificultad.push(datoMedio);
arrayDificultad.push(datoDificil);

localStorage.setItem("Nombre_Alumno", JSON.stringify(arrayNombre));
localStorage.setItem("Mail_Alumno", JSON.stringify(arrayMail));
localStorage.setItem("Dificultad_1", JSON.stringify(arrayDificultad));
localStorage.setItem("Dificultad_2", JSON.stringify(arrayDificultad));
localStorage.setItem("Dificultad_3", JSON.stringify(arrayDificultad));

