import type { Meta, StoryObj } from "@storybook/react";
import { IdentificationStatus } from "./IdentificationStatus";

const meta: Meta<typeof IdentificationStatus> = {
  title: "Components/Identification/IdentificationStatus",
  component: IdentificationStatus,
  argTypes: {
    confidenceScore: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    confidenceScoreThresholds: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IdentificationStatus>;

export const Default: Story = {
  args: {
    confidenceScore: 0.8,
  },
};

export const Applied: Story = {
  args: {
    ...Default.args,
    applied: true,
  },
};

export const WithScoreBelowWarning: Story = {
  args: {
    ...Default.args,
    confidenceScore: 0.6,
  },
};

export const WithScoreBelowAlert: Story = {
  args: {
    ...Default.args,
    confidenceScore: 0.4,
  },
};
