import { EXAMPLE_TAXON_FAMILY } from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import { IdentificationStatus } from "../IdentificationStatus/IdentificationStatus";
import { TaxonDetails } from "../TaxonDetails/TaxonDetails";
import { IdentificationDetails } from "./IdentificationDetails";

const meta: Meta<typeof IdentificationDetails> = {
  title: "Components/Identification/IdentificationDetails",
  component: IdentificationDetails,
  argTypes: {
    children: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  render: (args) => (
    <IdentificationDetails {...args}>
      <IdentificationStatus confidenceScore={0.8} status={args.status} />
      <TaxonDetails taxon={EXAMPLE_TAXON_FAMILY} compact />
    </IdentificationDetails>
  ),
};

export default meta;

type Story = StoryObj<typeof IdentificationDetails>;

export const Default: Story = {
  args: {
    imageSrc: "https://static.inaturalist.org/photos/416188682/small.jpg",
    status: "unconfirmed",
  },
};

export const Confirmed: Story = {
  args: {
    ...Default.args,
    status: "confirmed",
  },
};
