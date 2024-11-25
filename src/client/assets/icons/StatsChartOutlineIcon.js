import React from "react";
import Svg, { Line, Rect } from "react-native-svg";

const StatsChartOutlineIcon = ({ size = 24, color = "black", style }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    stroke={color}
    strokeWidth={32}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Line x1="32" y1="384" x2="480" y2="384" />
    <Rect x="96" y="288" width="80" height="112" rx="8" ry="8" />
    <Rect x="240" y="176" width="80" height="224" rx="8" ry="8" />
    <Rect x="383.64" y="112" width="80" height="288" rx="8" ry="8" />
  </Svg>
);

export default StatsChartOutlineIcon;
