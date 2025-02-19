import {
  EXAMPLE_TAXON_FAMILY,
  EXAMPLE_TAXON_GENUS,
  EXAMPLE_TAXON_SPECIES,
} from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as Collapsible from "../Collapsible/Collapsible";
import { IdentificationDetails } from "../IdentificationDetails/IdentificationDetails";
import { IdentificationStatus } from "../IdentificationStatus/IdentificationStatus";
import { TaxonDetails } from "../TaxonDetails/TaxonDetails";
import avatar from "./avatar.svg";
import { IdentificationCard } from "./IdentificationCard";

const IdentificationCardDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <IdentificationCard
      avatar={<img alt="" src={avatar} />}
      collapsible
      onOpenChange={setOpen}
      open={open}
      title="Panama Classifier 2023"
    >
      <IdentificationDetails
        applied
        className="border-border border-t"
        imageSrc="https://static.inaturalist.org/photos/416188682/small.jpg"
      >
        <IdentificationStatus applied confidenceScore={0.8} />
        <TaxonDetails taxon={EXAMPLE_TAXON_FAMILY} compact />
      </IdentificationDetails>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Content>
          <IdentificationDetails
            className="border-border border-t"
            imageSrc="https://inaturalist-open-data.s3.amazonaws.com/photos/75856698/small.jpg"
          >
            <IdentificationStatus confidenceScore={0.6} />
            <TaxonDetails taxon={EXAMPLE_TAXON_GENUS} compact />
          </IdentificationDetails>
          <IdentificationDetails
            className="border-border border-t"
            imageSrc="https://inaturalist-open-data.s3.amazonaws.com/photos/75856962/small.jpg"
          >
            <IdentificationStatus confidenceScore={0.4} />
            <TaxonDetails taxon={EXAMPLE_TAXON_SPECIES} compact />
          </IdentificationDetails>
        </Collapsible.Content>
      </Collapsible.Root>
    </IdentificationCard>
  );
};

const meta: Meta<typeof IdentificationCardDemo> = {
  title: "Components/Identification/IdentificationCard",
  component: IdentificationCardDemo,
  parameters: {
    docs: {
      description: {
        component:
          "The Identification Card is built using a composition of the components `<IdentificationCard />`, `<IdentificationDetails />`, `<IdentificationStatus />`, `<TaxonDetails />` and  `<Collapsible />`. Checkout demo component source code in repo for implementation details.",
      },
      source: {
        code: "No code available",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IdentificationCardDemo>;

export const Default: Story = {};
