import React from "react";
import Svg, { Path } from "react-native-svg";

const MicrosoftIcon = ({ size = 50, style = {} }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <Path fill="#F35325" d="M1 1h6.5v6.5H1V1z" />
    <Path fill="#81BC06" d="M8.5 1H15v6.5H8.5V1z" />
    <Path fill="#05A6F0" d="M1 8.5h6.5V15H1V8.5z" />
    <Path fill="#FFBA08" d="M8.5 8.5H15V15H8.5V8.5z" />
  </Svg>
);

export default MicrosoftIcon;
