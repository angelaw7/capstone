import React from "react";
import Svg, { Path } from "react-native-svg";

const BudgetIcon = ({ size = 50, style = {} }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 44 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M32.5556 23.4157H41V35.8539C41 38.1438 39.1097 40 36.7778 40M32.5556 23.4157V35.8539C32.5556 38.1438 34.4458 40 36.7778 40M32.5556 23.4157V8.40095C32.5556 6.52405 32.5556 5.58558 32.154 5.04137C31.8038 4.56665 31.2652 4.25973 30.6716 4.19663C29.9912 4.1243 29.1615 4.58991 27.502 5.52111L26.8425 5.89113C26.2317 6.23388 25.9262 6.40526 25.602 6.47237C25.3149 6.53174 25.0185 6.53174 24.7314 6.47237C24.4071 6.40526 24.1016 6.23388 23.4909 5.89113L19.4536 3.62578C18.8428 3.28303 18.5374 3.11165 18.2131 3.04454C17.926 2.98515 17.6295 2.98515 17.3425 3.04454C17.0182 3.11165 16.7128 3.28303 16.1019 3.62578L12.0647 5.89113C11.4539 6.23388 11.1485 6.40526 10.8241 6.47237C10.5371 6.53174 10.2406 6.53174 9.95364 6.47237C9.62929 6.40526 9.32388 6.23388 8.71305 5.89113L8.05362 5.52111C6.39408 4.58991 5.5643 4.1243 4.88389 4.19663C4.29037 4.25973 3.75179 4.56665 3.40153 5.04137C3 5.58558 3 6.52405 3 8.40095V30.0494C3 33.5325 3 35.2739 3.69029 36.6044C4.29749 37.7746 5.26636 38.7259 6.45806 39.3221C7.81283 40 9.58633 40 13.1333 40H36.7778M11.4444 23.4157H15.6667M11.4444 15.1236H24.1111M11.4444 31.7079H15.6667M24.1111 31.7079H24.1322M24.1111 23.4157H24.1322"
      stroke="black"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BudgetIcon;
