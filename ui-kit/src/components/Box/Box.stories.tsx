import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../Placeholder/Placeholder";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const WithLabel: Story = {
  args: {
    label: "Filters",
    children: <Placeholder label="Content placeholder" />,
  },
};

export const WithoutLabel: Story = {
  args: {
    children: <Placeholder label="Content placeholder" />,
  },
};
