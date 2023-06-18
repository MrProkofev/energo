import { Divider, Stack, StackProps, Typography } from "@mui/material";

export interface UiSectionProps extends StackProps {
  title: string;
  endAdornment?: React.ReactNode;
}

export const UiSection: React.FC<UiSectionProps> = ({ title, endAdornment, children, ...props }) => {
  return (
    <Stack
      {...props}
      direction="column"
      spacing={3}
      sx={theme => ({
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
      })}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" height={24}>
        <Typography variant="headers/h6">{title}</Typography>
        {endAdornment}
      </Stack>
      {children && <Divider flexItem />}
      {children}
    </Stack>
  );
};
