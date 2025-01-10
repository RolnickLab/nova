export const PLACEHOLDER_LABEL = "Catocala relicta luna";

export const PLACEHOLDER_TITLE =
  "Catocala relicta luna argyroploce morrisoni pygarctia";

export const PLACEHOLDER_TEXT =
  "Catocala relicta luna argyroploce morrisoni pygarctia. Zygaena eupithecia noctuidae hyalophora eriogonum purissima lithophane.";

export const EXAMPLE_PIPELINES = [
  {
    value: "panama-moths",
    label: "Panama moths",
  },
  {
    value: "uk-denmark-moths",
    label: "UK & Denmark moths",
  },
  {
    value: "quebec-vermont-moths",
    label: "Quebec & Vermont moths",
  },
  {
    value: "world-moths",
    label: "World moths",
  },
  {
    value: "costa-rica-moths",
    label: "Costa Rica moths",
  },
  {
    value: "anguilla-moths",
    label: "Anguilla moths",
  },
];

export const EXAMPLE_TAXA = [
  {
    value: "limacodinae",
    label: "Limacodinae",
    rank: "Subfamily",
    level: 0,
    hasChildren: true,
  },
  {
    value: "acharia",
    label: "Acharia",
    rank: "Genus",
    level: 1,
    hasChildren: true,
  },
  {
    value: "acharia-stimule",
    label: "Acharia stimulea",
    rank: "Species",
    level: 2,
    hasChildren: false,
  },
  {
    value: "achatia-distincta",
    label: "Achatia distincta",
    rank: "Unknown",
    level: 0,
    hasChildren: false,
  },
  {
    value: "acleris-braunana",
    label: "Acleris braunana",
    rank: "Species",
    level: 0,
    hasChildren: false,
  },
];

export const EXAMPLE_TAXON = {
  name: "Actias luna",
  rank: "SPECIES",
  parents: [
    {
      name: "Lepidoptera",
      rank: "ORDER",
    },
    {
      name: "Bombycoidea",
      rank: "SUPERFAMILY",
    },
    {
      name: "Saturniidae",
      rank: "FAMILY",
    },
    {
      name: "Saturniinae",
      rank: "SUBFAMILY",
    },
    {
      name: "Saturniini",
      rank: "TRIBE",
    },
    {
      name: "Actias",
      rank: "GENUS",
    },
  ],
};
