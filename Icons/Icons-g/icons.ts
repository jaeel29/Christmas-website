export type IconsId =
  | "arrow-down"
  | "arrow-right"
  | "christmas-gift"
  | "search"
  | "sm-facebook"
  | "sm-instagram"
  | "sm-twitter"
  | "testing-mqas"
  | "testing-power"
  | "testing-prise";

export type IconsKey =
  | "ArrowDown"
  | "ArrowRight"
  | "ChristmasGift"
  | "Search"
  | "SmFacebook"
  | "SmInstagram"
  | "SmTwitter"
  | "TestingMqas"
  | "TestingPower"
  | "TestingPrise";

export enum Icons {
  ArrowDown = "arrow-down",
  ArrowRight = "arrow-right",
  ChristmasGift = "christmas-gift",
  Search = "search",
  SmFacebook = "sm-facebook",
  SmInstagram = "sm-instagram",
  SmTwitter = "sm-twitter",
  TestingMqas = "testing-mqas",
  TestingPower = "testing-power",
  TestingPrise = "testing-prise",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowDown]: "61697",
  [Icons.ArrowRight]: "61698",
  [Icons.ChristmasGift]: "61699",
  [Icons.Search]: "61700",
  [Icons.SmFacebook]: "61701",
  [Icons.SmInstagram]: "61702",
  [Icons.SmTwitter]: "61703",
  [Icons.TestingMqas]: "61704",
  [Icons.TestingPower]: "61705",
  [Icons.TestingPrise]: "61706",
};
