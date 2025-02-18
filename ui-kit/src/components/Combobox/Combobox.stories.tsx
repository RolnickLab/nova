import { Button, Command, Popover } from "@/index";
import { EXAMPLE_TAXA } from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ComboboxDemo = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>();
  const selectedTaxon = EXAMPLE_TAXA.find((taxon) => taxon.value === value);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          aria-expanded={open}
          className="w-72 justify-between px-4 text-muted-foreground font-normal"
          role="combobox"
          variant="outline"
        >
          <>
            <span>{selectedTaxon?.label ?? "Select taxon"}</span>
            <ChevronDown className="h-4 w-4 ml-2 shrink-0" />
          </>
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0 overflow-hidden">
        <Command.Root>
          <Command.Input placeholder="Search taxonomy..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group>
              {EXAMPLE_TAXA.map((taxon) => (
                <Command.Item
                  key={taxon.value}
                  value={taxon.value}
                  onSelect={(value) => {
                    setValue(value);
                    setOpen(false);
                  }}
                >
                  <Command.Taxon
                    hasChildren={taxon.hasChildren}
                    label={taxon.label}
                    level={taxon.level}
                    rank={taxon.rank}
                    selected={taxon.value === selectedTaxon?.value}
                  />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  );
};

const meta: Meta<typeof ComboboxDemo> = {
  component: ComboboxDemo,
  parameters: {
    docs: {
      description: {
        component:
          "The Combobox is built using a composition of the `<Popover />` and the `<Command />` components. Checkout demo component source code in repo for implementation details.",
      },
      source: {
        code: "No code available",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ComboboxDemo>;

export const Default: Story = {};
