import type { Meta, StoryObj } from "@storybook/react";
import { IdentificationScore } from "./IdentificationScore";

const meta: Meta<typeof IdentificationScore> = {
  title: "Components/Identification/IdentificationScore",
  component: IdentificationScore,
  argTypes: {
    confidenceScore: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    confidenceScoreThresholds: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IdentificationScore>;

export const Default: Story = {
  args: {
    confidenceScore: 0.8,
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

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};
