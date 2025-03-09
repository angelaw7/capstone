import { Svg, Path, G } from "react-native-svg";

const CoinIcon = ({ style = {}, size = 50, colour = "black" }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={style}
      viewBox="0 0 24 24"
      color={colour}
    >
      <G
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
        <Path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1M12 7v10" />
      </G>
    </Svg>
  );
};

export default CoinIcon;
