import type { Meta, StoryObj } from "@storybook/react";
import * as Command from "../Command/Command";
import { Combobox } from "./Combobox";

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  argTypes: {
    children: {
      control: false,
    },
  },
  render: (args) => (
    <div className="w-72">
      <Combobox {...args}>
        <Command.Root>
          <Command.Input placeholder="Search taxonomy..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group>
              <Command.Item value="limacodinae">
                <Command.Taxon
                  hasChildren
                  label="Limacodinae"
                  rank="Subfamily"
                  level={0}
                />
              </Command.Item>
              <Command.Item value="acharia">
                <Command.Taxon
                  hasChildren
                  label="Acharia"
                  rank="Genus"
                  level={1}
                />
              </Command.Item>
              <Command.Item value="acharia-stimulea">
                <Command.Taxon
                  label="Acharia stimulea"
                  rank="Species"
                  level={2}
                />
              </Command.Item>
              <Command.Item value="achatia-distincta">
                <Command.Taxon
                  label="Achatia distincta"
                  rank="Unknown"
                  level={0}
                />
              </Command.Item>
              <Command.Item value="acleris-braunana">
                <Command.Taxon
                  label="Acleris braunana"
                  rank="Species"
                  level={0}
                />
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Combobox>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    triggerLabel: "Select taxon",
  },
};
