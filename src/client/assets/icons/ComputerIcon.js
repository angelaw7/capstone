import { Svg, Path } from "react-native-svg";

const ComputerIcon = ({ style = {}, size = 50 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={style}
      color={"black"}
      viewBox="0 0 24 24"
    >
      <Path
        fill="currentColor"
        d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
      />
    </Svg>
  );
};

export default ComputerIcon;
