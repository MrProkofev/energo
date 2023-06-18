import { Stack } from "@mui/material";
import { SignUpForm } from "@widgets/SignUpForm";

const SignUpPage: React.FC = () => {
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
      <SignUpForm />
    </Stack>
  );
};

export default SignUpPage;
