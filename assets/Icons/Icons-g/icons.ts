export type IconsId =
  | "arrow-down"
  | "arrow-right"
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
  [Icons.Search]: "61699",
  [Icons.SmFacebook]: "61700",
  [Icons.SmInstagram]: "61701",
  [Icons.SmTwitter]: "61702",
  [Icons.TestingMqas]: "61703",
  [Icons.TestingPower]: "61704",
  [Icons.TestingPrise]: "61705",
};
