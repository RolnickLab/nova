import type { Meta, StoryObj } from "@storybook/react";
import * as Command from "./Command";

type CommandArgs = React.ComponentProps<typeof Command.Root> & {
  disabled?: boolean;
  empty?: boolean;
  loading?: boolean;
};

const meta: Meta<CommandArgs> = {
  component: Command.Root,
  render: ({ disabled, empty, loading, ...args }) => (
    <Command.Root {...args} className="w-72">
      <Command.Input
        placeholder="Search taxonomy..."
        disabled={disabled}
        loading={loading}
      />
      {!disabled && (
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {!empty && (
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
          )}
        </Command.List>
      )}
    </Command.Root>
  ),
};

export default meta;

type Story = StoryObj<CommandArgs>;

export const Default: Story = {
  args: { disabled: false, empty: false, loading: false },
};

export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const Loading: Story = { args: { ...Default.args, loading: true } };

export const Empty: Story = { args: { ...Default.args, empty: true } };
