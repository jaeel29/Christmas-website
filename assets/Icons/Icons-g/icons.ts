export type IconsId =
  | "arrow-down"
  | "instagram"
  | "mqas"
  | "power"
  | "prise"
  | "search"
  | "twitter"
  | "youtube";

export type IconsKey =
  | "ArrowDown"
  | "Instagram"
  | "Mqas"
  | "Power"
  | "Prise"
  | "Search"
  | "Twitter"
  | "Youtube";

export enum Icons {
  ArrowDown = "arrow-down",
  Instagram = "instagram",
  Mqas = "mqas",
  Power = "power",
  Prise = "prise",
  Search = "search",
  Twitter = "twitter",
  Youtube = "youtube",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowDown]: "61697",
  [Icons.Instagram]: "61698",
  [Icons.Mqas]: "61699",
  [Icons.Power]: "61700",
  [Icons.Prise]: "61701",
  [Icons.Search]: "61702",
  [Icons.Twitter]: "61703",
  [Icons.Youtube]: "61704",
};
