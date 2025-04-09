import { ChevronsUpDownIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "../Button/Button";
import * as Tooltip from "../Tooltip/Tooltip";

interface IdentificationCard {
  avatar: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  collapsibleTriggerTooltip?: string;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  subTitle?: string;
  title: string;
}

export const IdentificationCard = ({
  avatar,
  children,
  collapsible,
  collapsibleTriggerTooltip,
  onOpenChange,
  open,
  subTitle,
  title,
}: IdentificationCard) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <div className="flex items-center justify-between gap-4 px-4 py-3 bg-primary-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full border border-border bg-fieldguide overflow-hidden">
          {avatar}
        </div>
        <div className="grid">
          <span className="pt-0.5 body-base font-medium text-primary-500">
            {title}
          </span>
          {subTitle?.length ? (
            <span className="pt-0.5 body-small text-muted-foreground">
              {subTitle}
            </span>
          ) : null}
        </div>
      </div>
      {collapsible ? (
        <ButtonWrapper tooltip={collapsibleTriggerTooltip}>
          <Button
            className="w-8 h-8 hover:bg-primary-50"
            size="icon"
            variant="ghost"
            onClick={() => onOpenChange?.(!open)}
          >
            <ChevronsUpDownIcon className="w-4 h-4" />
          </Button>
        </ButtonWrapper>
      ) : null}
    </div>
    {children}
  </div>
);

const ButtonWrapper = ({
  children,
  tooltip,
}: {
  children: ReactNode;
  tooltip?: string;
}) => {
  if (!tooltip) {
    return children;
  }

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content side="bottom">
          <span>{tooltip}</span>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
