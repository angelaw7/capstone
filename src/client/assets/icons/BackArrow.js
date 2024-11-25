import React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrow = ({ size = 50, style }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4874 7.51256C21.1708 8.19599 21.1708 9.30401 20.4874 9.98744L11.2249 19.25H35C35.9665 19.25 36.75 20.0335 36.75 21C36.75 21.9665 35.9665 22.75 35 22.75H11.2249L20.4874 32.0126C21.1708 32.696 21.1708 33.8041 20.4874 34.4874C19.804 35.1708 18.696 35.1708 18.0126 34.4874L5.76256 22.2374C5.43438 21.9093 5.25 21.4641 5.25 21C5.25 20.5359 5.43438 20.0907 5.76256 19.7626L18.0126 7.51256C18.696 6.82915 19.804 6.82915 20.4874 7.51256Z"
      fill="black"
    />
  </Svg>
);

export default BackArrow;
