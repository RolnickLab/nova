import { EXAMPLE_PREDICTION } from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: {
    collapsible: false,
    data: {
      prediction: EXAMPLE_PREDICTION,
    },
    theme: "default",
  },
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
};

export const WithErrorTheme: Story = {
  args: {
    ...Default.args,
    theme: "error",
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    data: {},
  },
};
