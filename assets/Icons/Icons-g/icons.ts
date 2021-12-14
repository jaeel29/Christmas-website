export type IconsId =
  | "arrow-down"
  | "mqas"
  | "power"
  | "prise"
  | "search";

export type IconsKey =
  | "ArrowDown"
  | "Mqas"
  | "Power"
  | "Prise"
  | "Search";

export enum Icons {
  ArrowDown = "arrow-down",
  Mqas = "mqas",
  Power = "power",
  Prise = "prise",
  Search = "search",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowDown]: "61697",
  [Icons.Mqas]: "61698",
  [Icons.Power]: "61699",
  [Icons.Prise]: "61700",
  [Icons.Search]: "61701",
};
