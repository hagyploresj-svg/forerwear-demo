export type Size = "S" | "M" | "L" | "XL" | "XXL";

export type CategorySlug =
  | "tshirt"
  | "gomlek"
  | "pantolon"
  | "jean"
  | "sweatshirt"
  | "ceket"
  | "takim-kombin";

export interface Category {
  slug: CategorySlug;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAtPrice?: number;
  images: string[];
  sizes: Size[];
  soldOutSizes?: Size[];
  isNew?: boolean;
  description: string;
  fabric: string;
  care: string;
  colorName: string;
}

export interface CartLine {
  slug: string;
  size: Size;
  quantity: number;
}
