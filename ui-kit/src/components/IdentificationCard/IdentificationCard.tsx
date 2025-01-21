import { ChevronsUpDownIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "../Button/Button";

interface IdentificationCard {
  avatar: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title: string;
}

export const IdentificationCard = ({
  avatar,
  children,
  collapsible,
  open,
  onOpenChange,
  title,
}: IdentificationCard) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <div className="flex items-center justify-between gap-4 px-4 py-3 bg-primary-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-fieldguide overflow-hidden">
          {avatar}
        </div>
        <span className="pt-0.5 body-base font-medium text-primary-500">
          {title}
        </span>
      </div>
      {collapsible ? (
        <Button
          className="w-8 h-8 hover:bg-primary-50"
          size="icon"
          variant="ghost"
          onClick={() => onOpenChange(!open)}
        >
          <ChevronsUpDownIcon className="w-4 h-4" />
        </Button>
      ) : null}
    </div>
    {children}
  </div>
);
