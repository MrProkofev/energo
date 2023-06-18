import { BranchesSection } from "@entities/branches/ui/BranchesSection";
import { RequisitesSection } from "@entities/requisites/ui/RequisitesSection";
import { Stack } from "@mui/material";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Stack direction="column" spacing={3}>
      <BranchesSection />
      <RequisitesSection />
    </Stack>
  );
};
