import CartIcon from "./assets/icons/CartIcon";
import CoinIcon from "./assets/icons/CoinIcon";
import ComputerIcon from "./assets/icons/ComputerIcon";
import HouseIcon from "./assets/icons/HouseIcon";
import LaundryIcon from "./assets/icons/LaundryIcon";
import MoviesIcon from "./assets/icons/MoviesIcon";
import WifiIcon from "./assets/icons/WifiIcon";

export const MONTHS = [
  "Januaryd",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ICON_CATEGORY_MAPPING: Record<
  string,
  React.FC<{ size?: number; style?: {} }>
> = {
  groceries: CartIcon,
  electronics: ComputerIcon,
  rent: HouseIcon,
  misc: CoinIcon,
  entertainment: MoviesIcon,
  internet: WifiIcon,
  home: LaundryIcon,
};

export const CATEGORY_COLOURS: Record<string, string> = {
  groceries: "#FF928A",
  electronics: "#FFDA8A",
  rent: "#8A9FE3",
  entertainment: "#c497f7",
  miscellanious: "#adf55f",
  internet: "#f56788",
  home: "#716ded",
};
