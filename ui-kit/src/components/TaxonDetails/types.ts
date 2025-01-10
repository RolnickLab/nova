export type TaxonomicRank =
  | "UNKNOWN"
  | "ORDER"
  | "SUBORDER"
  | "SUPERFAMILY"
  | "FAMILY"
  | "SUBFAMILY"
  | "TRIBE"
  | "SUBTRIBE"
  | "GENUS"
  | "SPECIES"
  | "SUBSPECIES";

export interface Taxon {
  name: string;
  rank: TaxonomicRank;
  parents: { name: string; rank: TaxonomicRank }[];
}
