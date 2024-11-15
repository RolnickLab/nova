import type { Meta, StoryObj } from "@storybook/react";
import { ChevronsUpDown } from "lucide-react";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { Placeholder } from "../Placeholder/Placeholder";
import * as Collapsible from "./Collapsible";

type CollapsibleArgs = React.ComponentProps<typeof Collapsible.Root>;

const meta: Meta<CollapsibleArgs> = {
  component: Collapsible.Root,
  render: (args) => (
    <Box>
      <Collapsible.Root {...args}>
        <div className="flex items-center justify-between ml-2">
          <span className="body-overline font-bold">Filters</span>
          <Collapsible.Trigger asChild>
            <Button size="icon" variant="ghost">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content>
          <Placeholder label="Content placeholder" />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  ),
};

export default meta;

type Story = StoryObj<CollapsibleArgs>;

export const Default: Story = { args: { disabled: false, defaultOpen: false } };

export const DefaultOpen: Story = {
  args: { ...Default.args, defaultOpen: true },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
