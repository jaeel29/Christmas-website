export type IconsId =
  | "arrow-down"
  | "arrow-right"
  | "check"
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
  | "Check"
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
  Check = "check",
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
  [Icons.Check]: "61699",
  [Icons.ChristmasGift]: "61700",
  [Icons.Search]: "61701",
  [Icons.SmFacebook]: "61702",
  [Icons.SmInstagram]: "61703",
  [Icons.SmTwitter]: "61704",
  [Icons.TestingMqas]: "61705",
  [Icons.TestingPower]: "61706",
  [Icons.TestingPrise]: "61707",
};
