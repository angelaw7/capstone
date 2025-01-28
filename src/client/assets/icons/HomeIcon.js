import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ size = 50, color = "black", style = {} }) => (
  <Svg
    color={color}
    style={style}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <Path
      fill="currentColor"
      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
    />
  </Svg>
);

export default HomeIcon;
