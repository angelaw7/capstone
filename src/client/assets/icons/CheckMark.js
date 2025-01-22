import React from "react";
import Svg, { Path } from "react-native-svg";

const CheckMark = ({ size = 50, style = {} }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9647 14.9617L17.4693 7.44735L18.5307 8.50732L9.96538 17.0837L5.46967 12.588L6.53033 11.5273L9.9647 14.9617Z"
      fill="#1F2328"
    />
  </Svg>
);

export default CheckMark;
