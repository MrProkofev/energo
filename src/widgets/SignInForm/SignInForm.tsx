import React from "react";
import { Stack, Typography } from "@mui/material";
import { UiButton } from "@shared/ui/Button";
import { UiCheckboxWithLabel } from "@shared/ui/CheckboxWithLabel";
import { UiClearableInput } from "@shared/ui/ClearableInput";
import { UiLink } from "@shared/ui/Link";
import { UiLogo } from "@shared/ui/Logo";
import { UiPasswordInput } from "@shared/ui/PasswordInput";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { validationSchema } from "./validation-schema";

export interface SignInFormProps {}

export const SignInForm: React.FC<SignInFormProps> = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit(value) {
      value;
    },
  });

  const { setFieldValue } = formik;

  const onUsernameClear = React.useCallback(() => {
    setFieldValue("username", "");
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
          id="username"
          name="username"
          type="email"
          placeholder="Email"
          value={formik.values.username}
          error={formik.touched.username && !!formik.errors.username}
          helperText={formik.touched.username ? formik.errors.username : undefined}
          onChange={formik.handleChange}
          onClear={onUsernameClear}
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
        <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
          <UiCheckboxWithLabel label="Запомнить меня" />
          <UiLink to="#">Забыли пароль?</UiLink>
        </Stack>
        <UiButton variant="contained" size="large" type="submit">
          Войти
        </UiButton>
        <UiButton variant="outlined" size="large" onClick={() => navigate("/sign-up")}>
          Регистрация
        </UiButton>
      </Stack>
    </Stack>
  );
};
