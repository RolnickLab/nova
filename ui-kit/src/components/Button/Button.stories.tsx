import type { Meta, StoryObj } from "@storybook/react";
import { ChevronRight, Mail } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ["default", "small", "icon"],
      control: { type: "radio" },
    },
    variant: {
      options: ["default", "destructive", "outline", "ghost", "link"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Button {...args}>
      <span>Button</span>
    </Button>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    disabled: false,
    size: "default",
  },
};

export const Secondary: Story = {
  args: { ...Default.args, variant: "secondary" },
};

export const Success: Story = {
  args: { ...Default.args, variant: "success" },
};

export const Destructive: Story = {
  args: { ...Default.args, variant: "destructive" },
};

export const Outline: Story = {
  args: { ...Default.args, variant: "outline" },
};

export const Ghost: Story = {
  args: { ...Default.args, variant: "ghost" },
};

export const Link: Story = {
  args: { ...Default.args, variant: "link" },
};

export const Small: Story = {
  args: { ...Default.args, size: "small" },
};

export const Icon: Story = {
  args: { ...Default.args, size: "icon" },
  render: (args) => (
    <Button {...args}>
      <ChevronRight className="w-4 h-4" />
    </Button>
  ),
};

export const WithIcon: Story = {
  args: { ...Default.args },
  render: (args) => (
    <Button {...args}>
      <Mail className="w-4 h-4 mr-2" />
      <span>Login with Email</span>
    </Button>
  ),
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
