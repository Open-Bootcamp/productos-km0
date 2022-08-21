import * as yup from "yup";

export const registerValidation = yup.object().shape({
  completeName: yup
    .string()
    .min(3, "*Muy corto")
    .max(50, "*Demasiados caracteres")
    .required("*Campo requerido"),
  email: yup.string().email("*Correo invalido").required("*Campo requerido"),
  password: yup
    .string()
    .min(4, "*Muy corto")
    .max(20, "*Demasiados caracteres")
    .required("*Campo requerido")
    .oneOf([yup.ref("confirmPassword")], "*Las contraseñas no son iguales"),
  confirmPassword: yup
    .string()
    .min(4, "*Muy corto")
    .max(20, "*Demasiados caracteres")
    .required("*Campo requerido")
    .oneOf([yup.ref("password")], "*Las contraseñas no son iguales"),
});
