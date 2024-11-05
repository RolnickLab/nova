import type { Meta, StoryObj } from "@storybook/react";
import * as Select from "./Select";

type SelectArgs = React.ComponentProps<typeof Select.Root> & {
  loading?: boolean;
};

const meta: Meta<SelectArgs> = {
  component: Select.Root,
  render: ({ loading, ...args }) => (
    <Select.Root {...args}>
      <Select.Trigger className="w-64" loading={loading}>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export default meta;

type Story = StoryObj<SelectArgs>;

export const Default: Story = { args: { disabled: false, loading: false } };

export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const Loading: Story = { args: { ...Default.args, loading: true } };
