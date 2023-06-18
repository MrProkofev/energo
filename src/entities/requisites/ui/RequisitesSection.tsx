import React from "react";
import { ReactComponent as EnvelopeIcon } from "@assets/envelope.svg";
import { ReactComponent as GlobeAltIcon } from "@assets/globe-alt.svg";
import { ReactComponent as PhoneIcon } from "@assets/phone.svg";
import { Divider, Stack, Typography } from "@mui/material";
import { UiSection } from "@shared/ui/Section";

export interface ParagraphProps {
  label: string;
  value: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ label, value }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <Typography variant="text/large" color="#878892">{`${label}:`}</Typography>
      <Typography variant="text/large">{value}</Typography>
    </Stack>
  );
};

export interface RequisitesSectionProps {}

export const RequisitesSection: React.FC<RequisitesSectionProps> = () => {
  return (
    <UiSection title="Реквизиты">
      <Typography variant="caption/medium">
        Удмуртская республика (18 регион), г. Ижевск, ул. Пушкинская, дом 2, корпус 2, офис 407
      </Typography>
      <Divider flexItem />
      <Stack direction="row" alignItems="center" spacing={7}>
        <Stack direction="row" spacing={1.5}>
          <PhoneIcon />
          <Typography variant="caption/medium">+7 (919) 123-45-67</Typography>
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <GlobeAltIcon />
          <Typography variant="caption/medium">energo.ru</Typography>
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <EnvelopeIcon />
          <Typography variant="caption/medium">mymail@mail.com</Typography>
        </Stack>
      </Stack>
      <Divider flexItem />
      <Stack direction="row" spacing={5}>
        <Stack direction="column" spacing={1.5}>
          <Paragraph label={"Наименование организации"} value={"ООО «Энергоресурс»"} />
          <Paragraph label={"Юридический адрес"} value={"123456, г. Москва, ул. Подвойского, д. 14, стр. 7"} />
          <Paragraph label={"Почтовый адрес"} value={"123456, г. Москва, ул. Подвойского, д. 14, стр. 7"} />
          <Paragraph label={"ОГРН"} value={"7712345678"} />
          <Paragraph label={"ОГРН (ОГРНИП)"} value={"779101001"} />
          <Paragraph label={"ОКТМО"} value={"7712345678"} />
        </Stack>
        <Stack direction="column" spacing={1.5}>
          <Paragraph label={"Код ОКОГУ"} value={"779101001"} />
          <Paragraph label={"ИНН"} value={"7712345678"} />
          <Paragraph label={"КПП"} value={"779101001"} />
          <Paragraph label={"БИК"} value={"044521234"} />
          <Paragraph label={"Р/С"} value={"140702810123450101230 ПАО Сбербанк г. Москва"} />
          <Paragraph label={"К/С"} value={"30101234500000000225"} />
        </Stack>
      </Stack>
    </UiSection>
  );
};
