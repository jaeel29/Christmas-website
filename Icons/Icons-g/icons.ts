export type IconsId =
  | "arrow-down"
  | "arrow-right"
  | "check"
  | "christmas-christmas-1"
  | "christmas-christmas-2"
  | "christmas-christmas-3"
  | "christmas-christmas-4"
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
  | "ChristmasChristmas_1"
  | "ChristmasChristmas_2"
  | "ChristmasChristmas_3"
  | "ChristmasChristmas_4"
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
  ChristmasChristmas_1 = "christmas-christmas-1",
  ChristmasChristmas_2 = "christmas-christmas-2",
  ChristmasChristmas_3 = "christmas-christmas-3",
  ChristmasChristmas_4 = "christmas-christmas-4",
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
  [Icons.ChristmasChristmas_1]: "61700",
  [Icons.ChristmasChristmas_2]: "61701",
  [Icons.ChristmasChristmas_3]: "61702",
  [Icons.ChristmasChristmas_4]: "61703",
  [Icons.ChristmasGift]: "61704",
  [Icons.Search]: "61705",
  [Icons.SmFacebook]: "61706",
  [Icons.SmInstagram]: "61707",
  [Icons.SmTwitter]: "61708",
  [Icons.TestingMqas]: "61709",
  [Icons.TestingPower]: "61710",
  [Icons.TestingPrise]: "61711",
};
