import { createTamagui } from "tamagui";
import { createInterFont } from "@tamagui/font-inter";
import defaultConfig from "@tamagui/config/v3";

const interFont = createInterFont();

const config = createTamagui({
  ...defaultConfig,
  fonts: {
    ...defaultConfig.fonts,
    inter: interFont,
  },
  components: {
    Button: {
      variants: {
        mode: {
          primary: (val, { theme }) => ({
            backgroundColor: theme.primaryBg || "#9E599A",
            color: theme.primaryColor || "$white",
          }),
          secondary: (val, { theme }) => ({
            backgroundColor: theme.secondaryBg || "$gray10",
            color: theme.secondaryColor || "$black",
          }),
        },
      },
      defaultVariants: {
        backgroundColor: "$gray5",
        borderRadius: "$4",
      },
    },
  },
});

export default config;
