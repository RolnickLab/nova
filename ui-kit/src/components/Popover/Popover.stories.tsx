import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Placeholder } from "../Placeholder/Placeholder";
import * as Popover from "./Popover";

type PopoverArgs = React.ComponentProps<typeof Popover.Root>;

const meta: Meta<PopoverArgs> = {
  component: Popover.Root,
  render: ({ ...args }) => (
    <Popover.Root {...args}>
      <Popover.Trigger asChild>
        <Button variant="outline">Open popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Placeholder label="Content placeholder" />
      </Popover.Content>
    </Popover.Root>
  ),
};

export default meta;

type Story = StoryObj<PopoverArgs>;

export const Default: Story = {};
