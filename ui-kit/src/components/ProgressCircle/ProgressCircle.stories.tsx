import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from "./ProgressCircle";
import { CONSTANTS } from "@/lib/constants";

const meta: Meta<typeof ProgressCircle> = {
  title: "Components/ProgressCircle",
  component: ProgressCircle,
  argTypes: {
    //progress: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    color: CONSTANTS.COLORS.warning[500],
    progress: 0.8,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};
