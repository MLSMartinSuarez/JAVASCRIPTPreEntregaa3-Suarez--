const div = document.createElement("div");

const h1 = document.createElement("h1");

    h1.innerHTML = "Bienvenido al formulario CODERHOUSE"
    h1.className = "titulo";

const form = document.createElement("form");

    form.innerHTML = ""
    form.className = "formulario";

const label1 = document.createElement("label");

    label1.innerHTML = "<b>Nombre del alumno</b> <br><br>";

const input1 = document.createElement("input");

    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Nombre Completo");
    input1.setAttribute("name","Nombre Completo");
    input1.setAttribute("required","");

const label2 = document.createElement("label");

    label2.innerHTML = "<br><br> <b>Mail</b> <br><br>";

const input2 = document.createElement("input");

    input2.setAttribute("type", "email");
    input2.setAttribute("placeholder", "mail@gmail.com");
    input2.setAttribute("name","mail");
    input2.setAttribute("required","");

const label3 = document.createElement("label");

    label3.innerHTML = "<br><br> <b>¿Que tan complicada te parecio la pre-entrega3?</b> <br><br>";

const input3 = document.createElement("input");

    input3.setAttribute("type", "radio");

const input4 = document.createElement("input");

    input4.setAttribute("type", "radio");

const input5 = document.createElement("input");

    input5.setAttribute("type", "radio");
    input5.innerHTML = ("<br><br>");

const label4 = document.createElement("label");

    label4.innerHTML = "<b> Facil </b> ";

const label5 = document.createElement("label");

    label5.innerHTML = "<br><br> <b> Medio </b> ";

const label6 = document.createElement("label");

    label6.innerHTML = "<br><br> <b> Dificil </b> ";

const espacio = document.createElement("p");

    // espacio.innerHTML = ("<br>")

const button = document.createElement("button");

    button.innerHTML = ("ENVIAR")
    button.setAttribute("type", "submit");
    // button.setAttribute ("value", "Enviar");



document.body.append(div);
div.appendChild(h1);
div.appendChild(form);
form.appendChild(label1);
form.appendChild(input1);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(label3);
form.appendChild(label4);
form.appendChild(label5);
form.appendChild(label6);
label4.appendChild(input3);
label5.appendChild(input4);
label6.appendChild(input5);
form.appendChild(espacio);
form.appendChild(button);

label1.addEventListener("mouseover", () => {
    label1.className = "hover"
})

label1.addEventListener("mouseout", () => {
    label1.className = ""
})

label2.addEventListener("mouseover", () => {
    label2.className = "hover"
})

label2.addEventListener("mouseout", () => {
    label2.className = ""
})

label3.addEventListener("mouseover", () => {
    label3.className = "hover"
})

label3.addEventListener("mouseout", () => {
    label3.className = ""
})