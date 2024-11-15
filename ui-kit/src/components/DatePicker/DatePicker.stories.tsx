import { Button, Calendar, Popover } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const DatePickerDemo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-72 justify-between text-muted-foreground font-normal"
        >
          <>
            <span>{date ? format(date, "yyyy-MM-dd") : "Select a date"}</span>
            <CalendarIcon className="w-4 w-4" />
          </>
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0 overflow-hidden">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </Popover.Content>
    </Popover.Root>
  );
};

const meta: Meta<typeof DatePickerDemo> = {
  component: DatePickerDemo,
  parameters: {
    docs: {
      description: {
        component:
          "The Date Picker is built using a composition of the `<Popover />` and the `<Calendar />` components.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePickerDemo>;

export const Default: Story = {};
