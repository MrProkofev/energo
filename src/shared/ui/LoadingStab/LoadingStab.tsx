import { CircularProgress, Stack } from "@mui/material";

export interface UiLoadingStabProps {}

export const UiLoadingStab: React.FC<UiLoadingStabProps> = () => {
  return (
    <Stack direction="row" flex={1} alignItems="center" justifyContent="center">
      <CircularProgress />
    </Stack>
  );
};
