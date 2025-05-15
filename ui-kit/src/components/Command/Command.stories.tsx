import { EXAMPLE_PIPELINES, EXAMPLE_TAXA } from "@/stories/constants";
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
    <Command.Root {...args} className="w-72 border border-input rounded-md">
      <Command.Input
        placeholder="Search pipelines..."
        disabled={disabled}
        loading={loading}
      />
      {!disabled && (
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {!empty && (
            <Command.Group>
              {EXAMPLE_PIPELINES.map((pipeline) => (
                <Command.Item key={pipeline.value} value={pipeline.value}>
                  {pipeline.label}
                </Command.Item>
              ))}
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

export const WithTaxa: Story = {
  args: Default.args,
  render: ({ disabled, empty, loading, ...args }) => (
    <Command.Root {...args} className="w-72 border border-input rounded-md">
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
              {EXAMPLE_TAXA.map((taxon) => (
                <Command.Item
                  key={taxon.value}
                  className="h-16 pr-2"
                  value={taxon.value}
                >
                  <Command.Taxon
                    hasChildren={taxon.hasChildren}
                    image={taxon.image}
                    label={taxon.label}
                    level={taxon.level}
                    rank={taxon.rank}
                    selected={taxon.selected}
                  />
                </Command.Item>
              ))}
            </Command.Group>
          )}
        </Command.List>
      )}
    </Command.Root>
  ),
};
