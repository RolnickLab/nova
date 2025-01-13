import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import * as Tooltip from "./Tooltip";

type TooltipArgs = React.ComponentProps<typeof Tooltip.Root>;

const meta: Meta<TooltipArgs> = {
  component: Tooltip.Root,
  render: ({ ...args }) => (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root {...args}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">
            <span>Hover me!</span>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span>Content placeholder</span>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};

export default meta;

type Story = StoryObj<TooltipArgs>;

export const Default: Story = {};
