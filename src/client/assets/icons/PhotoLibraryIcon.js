import React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";

const PhotoLibraryIcon = ({ size = 24, style }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <Circle cx="9" cy="9" r="2" />
    <Path d="M21 15l-5-5L5 21" />
  </Svg>
);

export default PhotoLibraryIcon;
