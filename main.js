const div = document.createElement("div");

const h1 = document.createElement("h1");

    h1.innerHTML = "Bienvenido al formulario CODERHOUSE"
    h1.classList.add("titulo");

const form = document.createElement("form");

    form.innerHTML = ""

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
    input2.setAttribute("required","");

const label3 = document.createElement("label");

    label3.innerHTML = "<br><br> <b>¿Que tan complicada te parecio la pre-entrega3?</b> <br><br>";

const input3 = document.createElement("input");

    input3.setAttribute("type", "radio");

const label4 = document.createElement("label");

    label4.innerHTML = "facil";

const label5 = document.createElement("label");

    label5.innerHTML = "medio";

const label6 = document.createElement("label");

    label6.innerHTML = "dificil";



document.body.append(div);
div.appendChild(h1);
div.appendChild(form);
form.appendChild(label1);
form.appendChild(input1);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(label3);


// form.appendChild(input3);
label4.appendChild(input3);
label5.appendChild(input3);
label6.appendChild(input3);