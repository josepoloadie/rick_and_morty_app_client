export default function validate(inputs) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
  let errors = {};

  if (!inputs.email) {
    errors.email = "Email no puede estar vacio";
  } else {
    errors.email = "";
  }

  if (inputs.email.length > 35) {
    errors.email = "Email debe tener menos de 35 caracteres";
  } else {
    errors.email = "";
  }

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Email no valido";
  } else {
    errors.email = "";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password =
      "La contraseña debe una longitud entre 6 y 10 caracteres y al menos un numero";
  } else {
    errors.password = "";
  }

  return errors;
}
