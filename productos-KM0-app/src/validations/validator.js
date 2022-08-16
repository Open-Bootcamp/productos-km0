import * as yup from "yup";
// Mediante yup podemos crear un esquema el cual contiene ciertos requerimientos agregados 
// alli los cuales luego seran validados.

// Dentro del esquema de password tendremos que la misma debera:
// 1) Debe ser de tipo string
// 2) Debe contener minimo 8 caracteres
// 3) Sera requerida, no puede estra vacia
// 4) Mediante el .matches le idicamos las caracteristicas que debe tener su valor, 
// en este caso debera tener al menos una mayuscula, un numero y un caracter especial
const schemaPassword = yup
  .string()
  .min(8, "Password must be at least 8 Character")
  .required("Password Required")
  .matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
    "Must Contain 6 Characters, One Lowercase, One Number and One Special Case Character"
  );


// Dentro del esquema de email tendremos que el mismo debera:
// 1) Debe ser de tipo string
// 2) Sera requerida, no puede estra vacia
// 4) Debera ser un correo electronico valido

const schemaEmail = yup
  .string()
  .email("Invalid email")
  .required("Email Required");


// Esta sera nuetra funcion validadora la cual contara con dos parametros
// errorSubmit: Es el seteo del estado de error del formulario
// data: Es el objeto donde tendremos el email y password

// El validador utiliza el metodo "validate" traido de yup el cual sirve para poder ejecutar
// los esquemas de validacion y que el mismo retorne un valor, ya sea si se cumple o no.
// El valor retornado lo manejaremos con un then/catch el cual de ser erroneo seteara el estado de 
// error con un mensaje predeterm,inado para cada campo, de no serlo y pasar la validacion retornara un estado 
// de error falso el cual reflea que el formulario fue enviado con exito

const validator = (errorSubmit, data) => {
  const { email, password } = data;
  if (!email && !password) {
    errorSubmit("Complete todos los campos");
  }
  if (!email && password) {
    errorSubmit("Por favor ingrese un correo");
  }
  if (email && !password) {
    errorSubmit("Por favor ingrese una contraseña");
  }

  if (email && password) {
    schemaEmail
      .validate(email)
      .then(() => {
        schemaPassword
          .validate(password)
          .then(() => {
            errorSubmit(false);
          })
          .catch((err) => {
            errorSubmit("Contraseña ingresada invalida");
          });
      })
      .catch((err) => {
        errorSubmit("Correo ingresado invalido");
      });
  }
};

export default validator;
