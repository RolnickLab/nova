import type { Meta, StoryObj } from "@storybook/react";
import * as Select from "./Select";

const meta: Meta<typeof Select.Root> = {
  component: Select.Root,
  render: (args) => (
    <Select.Root {...args}>
      <Select.Trigger className="w-64">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Appleee</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export default meta;

type Story = StoryObj<typeof Select.Root>;

export const Default: Story = { args: { disabled: false } };

export const Disabled: Story = { args: { ...Default.args, disabled: true } };
