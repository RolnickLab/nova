import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { Button } from "../Button/Button";
import * as Popover from "../Popover/Popover";

interface ComboboxProps {
  triggerLabel: string;
  children?: ReactNode;
}

export const Combobox = ({ triggerLabel, children }: ComboboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-muted-foreground font-normal"
        >
          <>
            <span>{triggerLabel}</span>
            <ChevronDown className="h-4 w-4 ml-2 shrink-0" />
          </>
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0 overflow-hidden">
        {children}
      </Popover.Content>
    </Popover.Root>
  );
};
