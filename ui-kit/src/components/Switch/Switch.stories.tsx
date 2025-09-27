import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <label
        htmlFor={args.id}
        className="pt-0.5 body-small text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
      >
        Process source images
      </label>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { id: "default" },
};

export const Disabled: Story = {
  args: { ...Default.args, id: "disabled", disabled: true },
};
