import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    disabled: false,
    max: 100,
    step: 1,
    min: 1,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Inverted: Story = {
  args: {
    ...Default.args,
    inverted: true,
  },
};

export const InvertedColors: Story = {
  args: {
    ...Default.args,
    invertedColors: true,
  },
};

export const WithCustomColor: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => <Slider {...args} className="[&_.range]:bg-secondary [&_.thumb]:border-secondary" />
};
