import type { Meta, StoryObj } from "@storybook/react";
import { addDays } from "date-fns";
import { Calendar, CalendarProps } from "./Calendar";

const meta: Meta<CalendarProps> = {
  component: Calendar,
  argTypes: {
    mode: {
      options: ["default", "single", "multiple", "range"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  args: {
    mode: "default",
  },
};

export const WithSelectedDate: Story = {
  args: {
    ...Default.args,
    mode: "single",
    selected: new Date(),
  },
};

export const WithSelectedDates: Story = {
  args: {
    ...Default.args,
    mode: "multiple",
    selected: [addDays(new Date(), -2), new Date(), addDays(new Date(), 2)],
  },
};

export const WithSelectedDateRange: Story = {
  args: {
    ...Default.args,
    mode: "range",
    selected: {
      from: addDays(new Date(), -2),
      to: addDays(new Date(), 2),
    },
  },
};
