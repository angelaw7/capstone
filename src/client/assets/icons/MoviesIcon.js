import { Svg, Path } from "react-native-svg";

const MoviesIcon = ({ style = {}, size = 50, colour = "black" }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={style}
      color={colour}
      viewBox="0 0 20 20"
    >
      <Path
        fill="currentColor"
        d="M16.13 5.38L7.038 8h9.46a.5.5 0 0 1 .5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V8.571l-.257-.893a2.5 2.5 0 0 1 1.71-3.095L13.1 2.09a2.5 2.5 0 0 1 3.095 1.71l.277.96a.5.5 0 0 1-.342.62M3.84 7.88l.607-.175L5.889 5.21l-1.16.335A1.5 1.5 0 0 0 3.703 7.4zm1.992-.574l2.12-.612l1.443-2.497l-2.125.613l-.021.042zm5.627-1.622l1.442-2.498l-2.126.613l-.026.053l-1.41 2.443zm2.684-2.652l-.02.036l-1.279 2.216l2.527-.728l-.139-.48a1.5 1.5 0 0 0-1.09-1.044M4 9v6.5A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5V9z"
      />
    </Svg>
  );
};

export default MoviesIcon;
