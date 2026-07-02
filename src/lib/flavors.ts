export type FlavorId =
  | "magic-masala"
  | "pani-puri"
  | "jeera"
  | "methi"
  | "schezwan";

export type Flavor = {
  id: FlavorId;
  index: string;
  label: string;
  name: string;
  nameLines: string[];
  tagline: string;
  color: string;
  colorDark: string;
  colorLight: string;
  textOn: "ink" | "cream";
  graphic: "sunburst" | "waves" | "rays" | "stripes" | "blob";
  ingredients: string[];
};

export const flavors: Flavor[] = [
  {
    id: "magic-masala",
    index: "01",
    label: "Flavour No. 01",
    name: "Magic Masala",
    nameLines: ["MAGIC", "MASALA"],
    tagline: "The one everyone fights over. Bold masala, zero apology.",
    color: "var(--color-masala)",
    colorDark: "var(--color-masala-dark)",
    colorLight: "var(--color-masala-light)",
    textOn: "ink",
    graphic: "sunburst",
    ingredients: ["Tomato Powder", "Paprika", "Garlic"],
  },
  {
    id: "pani-puri",
    index: "02",
    label: "Flavour No. 02",
    name: "Pani Puri",
    nameLines: ["PANI", "PURI"],
    tagline: "Tangy, golgappa-sour, gone in one round.",
    color: "var(--color-panipuri)",
    colorDark: "var(--color-panipuri-dark)",
    colorLight: "var(--color-panipuri-light)",
    textOn: "ink",
    graphic: "waves",
    ingredients: ["Mint Leaf", "Garlic", "Parsley"],
  },
  {
    id: "jeera",
    index: "03",
    label: "Flavour No. 03",
    name: "Jeera",
    nameLines: ["JEERA"],
    tagline: "Toasted cumin, kept honest. Crunch that means it.",
    color: "var(--color-jeera)",
    colorDark: "var(--color-jeera-dark)",
    colorLight: "var(--color-jeera-light)",
    textOn: "ink",
    graphic: "rays",
    ingredients: ["Cumin Seed", "Rock Salt", "Ajwain"],
  },
  {
    id: "methi",
    index: "04",
    label: "Flavour No. 04",
    name: "Methi",
    nameLines: ["METHI"],
    tagline: "Earthy fenugreek. Slightly bitter, entirely addictive.",
    color: "var(--color-methi)",
    colorDark: "var(--color-methi-dark)",
    colorLight: "var(--color-methi-light)",
    textOn: "cream",
    graphic: "stripes",
    ingredients: ["Fenugreek Leaf", "Turmeric", "Green Chilli"],
  },
  {
    id: "schezwan",
    index: "05",
    label: "Flavour No. 05",
    name: "Schezwan",
    nameLines: ["SCHEZ", "WAN"],
    tagline: "Loud, red, unreasonable heat. You were warned.",
    color: "var(--color-schezwan)",
    colorDark: "var(--color-schezwan-dark)",
    colorLight: "var(--color-schezwan-light)",
    textOn: "cream",
    graphic: "blob",
    ingredients: ["Cinnamon", "Paprika", "Garlic"],
  },
];
