import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { UiSection } from "@shared/ui/Section";

const BRANCHES = [
  { id: "1", name: "ООО «Энергосервис»" },
  { id: "2", name: "ООО «Ижстрой»" },
];

export interface BranchesSectionProps {}

export const BranchesSection: React.FC<BranchesSectionProps> = () => {
  return (
    <UiSection title="Филиалы">
      {BRANCHES.map((branch, idx, { length }) => (
        <React.Fragment key={branch.id}>
          <Stack direction="row" py={1}>
            <Typography variant="caption/medium">{branch.name}</Typography>
          </Stack>
          {idx + 1 < length && <Divider flexItem />}
        </React.Fragment>
      ))}
    </UiSection>
  );
};
