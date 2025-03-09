import { Svg, Path, G } from "react-native-svg";

const HouseIcon = ({ style = {}, size = 50 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={style}
      viewBox="0 0 48 48"
      color={"black"}
    >
      <G fill="currentColor">
        <Path d="M24.507 10.138a1 1 0 0 0-1.014 0L5.631 20.645l1.014 1.724L24 12.16l17.355 10.21l1.014-1.724L36 16.9V12a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.957z" />
        <Path
          fill-rule="evenodd"
          d="m24 14l-14 8v14H5a1 1 0 1 0 0 2h36a1 1 0 1 0 0-2h-3V22zm4 22V25h6v11zm-3-11H14v6h11z"
          clip-rule="evenodd"
        />
      </G>
    </Svg>
  );
};

export default HouseIcon;
