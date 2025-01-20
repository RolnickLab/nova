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
    snippet: JSON.stringify(EXAMPLE_PREDICTION, null, 4),
    theme: "default",
  },
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
};

export const WithExternalLink: Story = {
  args: {
    ...Default.args,
    externalLink: "http://django:8000/api/v2/occurrences/12/",
  },
};

export const WithErrorTheme: Story = {
  args: {
    ...Default.args,
    theme: "error",
  },
};

export const OneLine: Story = {
  args: {
    ...Default.args,
    snippet: "[2025-01-09 05:19:29] INFO Changing status of job 1 to SUCCESS",
  },
};
