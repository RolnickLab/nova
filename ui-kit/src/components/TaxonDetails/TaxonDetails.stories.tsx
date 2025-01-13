import {
  EXAMPLE_TAXON_FAMILY,
  EXAMPLE_TAXON_GENUS,
  EXAMPLE_TAXON_SPECIES,
  EXAMPLE_TAXON_SUBFAMILY,
} from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import { TaxonDetails } from "./TaxonDetails";
import { Taxon } from "./types";

const meta: Meta<typeof TaxonDetails> = {
  component: TaxonDetails,
};

export default meta;

type Story = StoryObj<typeof TaxonDetails>;

export const SpeciesLevel: Story = {
  args: {
    compact: false,
    size: "default",
    taxon: EXAMPLE_TAXON_SPECIES as Taxon,
    withTooltips: true,
  },
};

export const GenusLevel: Story = {
  args: {
    ...SpeciesLevel.args,
    taxon: EXAMPLE_TAXON_GENUS as Taxon,
  },
};

export const SubfamilyLevel: Story = {
  args: {
    ...SpeciesLevel.args,
    taxon: EXAMPLE_TAXON_SUBFAMILY as Taxon,
  },
};

export const FamilyLevel: Story = {
  args: {
    ...SpeciesLevel.args,
    taxon: EXAMPLE_TAXON_FAMILY as Taxon,
  },
};

export const Compact: Story = {
  args: {
    ...SpeciesLevel.args,
    compact: true,
  },
};

export const Large: Story = {
  args: {
    ...SpeciesLevel.args,
    size: "lg",
  },
};
