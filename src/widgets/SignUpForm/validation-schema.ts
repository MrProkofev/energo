import * as yup from "yup";

export const validationSchema = yup.object({
  inn: yup
    .string()
    .matches(/^[0-9]{12}$/g, "Номер ИНН указан неверно")
    .required("Это поле обязательное"),
  email: yup.string().max(50, "Слишком длинное значение").required("Это поле обязательное"),
  phoneNumber: yup
    .string()
    .matches(/^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Номер телефона указан неверно")
    .required("Это поле обязательное"),
  password: yup.string().max(50, "Слишком длинное значение").required("Это поле обязательное"),
});

export default validationSchema;
