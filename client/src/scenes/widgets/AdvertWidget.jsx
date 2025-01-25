import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Patrocinado
        </Typography>
        <Typography color={medium}>Criar Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "15px", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nic Vyck Makes</Typography>
        <Typography color={medium}>nicvyckmakes.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        As melhores peles servem apenas os melhores produtos, não perca tempo, sua pele precisa respirar melhor e inspirar beleza. Seu sucesso transparece Nick Vyck Makes!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
