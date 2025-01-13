import { EXAMPLE_TAXON } from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import { TaxonDetails } from "./TaxonDetails";
import { Taxon } from "./types";

const meta: Meta<typeof TaxonDetails> = {
  component: TaxonDetails,
};

export default meta;

type Story = StoryObj<typeof TaxonDetails>;

export const Default: Story = {
  args: {
    taxon: EXAMPLE_TAXON as Taxon,
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compact: true,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const WithTooltips: Story = {
  args: {
    ...Default.args,
    withTooltips: true,
  },
};
