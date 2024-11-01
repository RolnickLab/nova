import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  render: (args) => <Input {...args} className="w-64" />,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { disabled: false, id: "email", placeholder: "Email", type: "email" },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const WithLabel: Story = {
  args: Default.args,
  render: (args) => (
    <>
      <label
        className="flex pl-2 pb-3 text-muted-foreground body-overline-small font-bold"
        htmlFor={args.id}
      >
        Email
      </label>
      <Input {...args} className="w-64" />
    </>
  ),
};

export const WithDescription: Story = {
  args: Default.args,
  render: (args) => (
    <>
      <label
        className="flex pl-2 pb-3 text-muted-foreground body-overline-small font-bold"
        htmlFor={args.id}
      >
        Email
      </label>
      <Input {...args} className="w-64" />
      <p className="flex pl-2 pt-3 body-small text-foreground/50">
        Enter your email address.
      </p>
    </>
  ),
};
