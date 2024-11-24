import React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = ({ size = 50, style }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.25 5.30719L13.4663 2.8125L33.75 22.5L13.4663 42.1875L11.25 39.6928L28.9631 22.5L11.25 5.30719Z"
      fill="black"
    />
  </Svg>
);

export default RightArrow;
