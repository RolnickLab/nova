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

export const EXAMPLE_PREDICTION = {
  id: 10,
  taxon: {
    id: 7,
    name: "moth",
    rank: "UNKNOWN",
    parent: null,
    parents: [],
  },
  score: 0.6834218272113759,
  algorithm: {
    id: 3,
    name: "Always Moth Classifier",
    key: "3",
    description: "",
    url: "",
    version: 1,
    version_name: "",
    created_at: "2025-01-08T13:03:52.416740",
  },
  created_at: "2025-01-09T05:19:29.386562",
};

export const EXAMPLE_TAXON_SPECIES = {
  id: "1",
  name: "Actias luna",
  rank: "SPECIES",
  parents: [
    {
      id: "7",
      name: "Lepidoptera",
      rank: "ORDER",
    },
    {
      id: "6",
      name: "Bombycoidea",
      rank: "SUPERFAMILY",
    },
    {
      id: "5",
      name: "Saturniidae",
      rank: "FAMILY",
    },
    {
      id: "4",
      name: "Saturniinae",
      rank: "SUBFAMILY",
    },
    {
      id: "3",
      name: "Saturniini",
      rank: "TRIBE",
    },
    {
      id: "2",
      name: "Actias",
      rank: "GENUS",
    },
  ],
};

export const EXAMPLE_TAXON_GENUS = {
  id: "2",
  name: "Actias",
  rank: "GENUS",
  parents: [
    {
      id: "7",
      name: "Lepidoptera",
      rank: "ORDER",
    },
    {
      id: "6",
      name: "Bombycoidea",
      rank: "SUPERFAMILY",
    },
    {
      id: "5",
      name: "Saturniidae",
      rank: "FAMILY",
    },
    {
      id: "4",
      name: "Saturniinae",
      rank: "SUBFAMILY",
    },
    {
      id: "3",
      name: "Saturniini",
      rank: "TRIBE",
    },
  ],
};

export const EXAMPLE_TAXON_SUBFAMILY = {
  id: "4",
  name: "Saturniinae",
  rank: "SUBFAMILY",
  parents: [
    {
      id: "7",
      name: "Lepidoptera",
      rank: "ORDER",
    },
    {
      id: "6",
      name: "Bombycoidea",
      rank: "SUPERFAMILY",
    },
    {
      id: "5",
      name: "Saturniidae",
      rank: "FAMILY",
    },
  ],
};

export const EXAMPLE_TAXON_FAMILY = {
  id: "5",
  name: "Saturniidae",
  rank: "FAMILY",
  parents: [
    {
      id: "7",
      name: "Lepidoptera",
      rank: "ORDER",
    },
    {
      id: "6",
      name: "Bombycoidea",
      rank: "SUPERFAMILY",
    },
  ],
};

export const EXAMPLE_TAXON_ORDER = {
  id: "7",
  name: "Lepidoptera",
  rank: "ORDER",
  parents: [],
};
