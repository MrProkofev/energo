import { Stack } from "@mui/material";
import { SignInForm } from "@widgets/SignInForm";

const SignInPage: React.FC = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "url(atom.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        flex: 1,
      }}
    >
      <SignInForm />
    </Stack>
  );
};

export default SignInPage;
