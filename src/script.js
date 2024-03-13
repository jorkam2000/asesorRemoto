function enviarFormulario(event) {
  let isValid = true;

  const form = document.getElementById("contacto");
  for (var i = 0; i < form.elements.length; i++) {
    if (
      form.elements[i].value === "" &&
      form.elements[i].hasAttribute("required")
    ) {
      // form.elements[i].classList.add("campo-obligatorio");
      isValid = false;
    } else {
      form.elements[i].classList.remove("campo-obligatorio");
    }
  }

  if (!isValid) {
    alert("Debe rellenar todos los campos obligatorios!");
    return false;
  }

  if (document.getElementById("politicaPrivacidad").checked == false) {
    alert(
      "Debe aceptar la politica de privacidad antes de enviar el formulario"
    );
  } else {
    alert("Formulario enviado!");
  }
}

window.onload = function () {
  let botonEnviar = document.getElementById("botonEnviar");
  botonEnviar.addEventListener("click", enviarFormulario);
};
