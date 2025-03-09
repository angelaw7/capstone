import React from "react";
import Svg, { Path } from "react-native-svg";

const ReceiptIcon = ({ size = 50, style = {} }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width={size}
    height={size}
    color={"black"}
    viewBox="0 0 24 24"
  >
    <Path
      fill="currentColor"
      d="M6 21q-.846 0-1.423-.577T4 19.009V17h3V3.385l1.27.884l1.307-.885l1.308.885l1.307-.885l1.308.885l1.308-.884l1.308.884l1.307-.884l1.308.884L20 3.384V19q0 .846-.577 1.423T18 21zm12-1q.425 0 .713-.288T19 19V5H8v12h9v2q0 .425.288.713T18 20M9.385 8.5v-1h5.346v1zm0 3v-1h5.346v1zm7.5-2.73q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23m0 3q-.309 0-.539-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23M6 20h10v-2H5v1q0 .425.288.713T6 20m-1 0v-2z"
    />
  </Svg>
);

export default ReceiptIcon;
