import React from "react";
import { Stack, Typography } from "@mui/material";
import { UiButton } from "@shared/ui/Button";
import { UiClearableInput } from "@shared/ui/ClearableInput";
import { UiLink } from "@shared/ui/Link";
import { UiLogo } from "@shared/ui/Logo";
import { UiMaskedInput } from "@shared/ui/MaskedInput";
import { UiPasswordInput } from "@shared/ui/PasswordInput";
import { useFormik } from "formik";

import { validationSchema } from "./validation-schema";

export interface SignUpFormProps {}

export const SignUpForm: React.FC<SignUpFormProps> = () => {
  const formik = useFormik({
    initialValues: {
      inn: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema,
    onSubmit(value) {
      value;
    },
  });

  const { setFieldValue } = formik;

  const onInnClear = React.useCallback(() => {
    setFieldValue("inn", "");
  }, [setFieldValue]);

  const onEmailClear = React.useCallback(() => {
    setFieldValue("email", "");
  }, [setFieldValue]);

  const onPhoneNumberClear = React.useCallback(() => {
    setFieldValue("phoneNumber", "");
  }, [setFieldValue]);

  return (
    <Stack
      component="form"
      direction="column"
      alignItems="center"
      spacing={2.5}
      sx={theme => ({
        width: 424,
        minHeight: 496,
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.7) 100%)",
        backdropFilter: "blur(5px)",
        borderRadius: theme.spacing(1),
        padding: theme.spacing(4, 3, 3, 3),
      })}
      onSubmit={formik.handleSubmit}
    >
      <Stack direction="column" alignItems="center" spacing={1}>
        <UiLogo sx={{ width: 150, height: 48 }} />
        <Typography variant="text/medium">Авторизация</Typography>
      </Stack>
      <Stack direction="column" width="100%" spacing={3}>
        <UiClearableInput
          id="inn"
          name="inn"
          type="number"
          placeholder="ИНН"
          value={formik.values.inn}
          error={formik.touched.inn && !!formik.errors.inn}
          helperText={formik.touched.inn ? formik.errors.inn : undefined}
          onChange={formik.handleChange}
          onClear={onInnClear}
        />
        <UiClearableInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email ? formik.errors.email : undefined}
          onChange={formik.handleChange}
          onClear={onEmailClear}
        />
        <UiMaskedInput
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          mask="+7 (000) 000-00-00"
          placeholder="+7"
          value={formik.values.phoneNumber}
          error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
          helperText={formik.touched.phoneNumber ? formik.errors.phoneNumber : undefined}
          onChange={formik.handleChange}
          onClear={onPhoneNumberClear}
        />
        <UiPasswordInput
          id="password"
          name="password"
          placeholder="Пароль"
          value={formik.values.password}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password ? formik.errors.password : undefined}
          onChange={formik.handleChange}
        />
        <UiButton variant="contained" size="large" type="submit">
          Зарегистрироваться
        </UiButton>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <UiLink to="/sign-in">У меня уже есть аккаунт</UiLink>
        </Stack>
      </Stack>
    </Stack>
  );
};
