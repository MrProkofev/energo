import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup.string().max(50, "Слишком длинное значение").required("Это поле обязательное"),
  password: yup.string().max(50, "Слишком длинное значение").required("Это поле обязательное"),
});

export default validationSchema;
