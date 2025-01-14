import { cn } from "@/lib/utils";
import { ChevronRightIcon, MinusIcon } from "lucide-react";
import { ReactNode } from "react";
import * as Tooltip from "../Tooltip/Tooltip";

interface TaxonDetailsProps {
  compact?: boolean;
  size?: "default" | "lg";
  taxon: {
    name: string;
    rank: string;
    parents: { name: string; rank: string }[];
  };
  withTooltips?: boolean;
}

export const TaxonDetails = ({
  compact,
  size = "default",
  taxon,
  withTooltips,
}: TaxonDetailsProps) => {
  const isGenusOrBelow =
    taxon.rank === "GENUS" ||
    taxon.rank === "SPECIES" ||
    taxon.rank === "SUBSPECIES";

  const mainParent =
    compact && taxon.parents.length > 3
      ? taxon.parents.find((p) => p.rank === "FAMILY")
      : undefined;

  const parents = compact
    ? taxon.parents.filter((p) => p !== mainParent).slice(mainParent ? -2 : -3)
    : taxon.parents;

  return (
    <div className="flex flex-col items-start gap-1">
      <RankTooltip rank={withTooltips ? taxon.rank : undefined}>
        <span
          className={cn("font-medium text-primary-500", {
            "body-large": size === "default",
            "body-xlarge": size === "lg",
            italic: isGenusOrBelow,
          })}
        >
          {taxon.name}
        </span>
      </RankTooltip>
      <div className="flex items-center flex-wrap gap-1 body-small font-medium text-muted-foreground">
        {mainParent ? (
          <RankTooltip rank={withTooltips ? mainParent.rank : undefined}>
            <div className="flex items-center gap-1">
              <span>{mainParent.name}</span>
              <MinusIcon className="w-4 h-4 text-neutral-400 rotate-90" />
            </div>
          </RankTooltip>
        ) : null}
        {parents.map((parent, index) => (
          <RankTooltip
            key={index}
            rank={withTooltips ? parent.rank : undefined}
          >
            <div className="flex items-center gap-1">
              <span>{parent.name}</span>
              {index < parents.length - 1 ? (
                <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
              ) : null}
            </div>
          </RankTooltip>
        ))}
      </div>
    </div>
  );
};

const RankTooltip = ({
  children,
  rank,
}: {
  children: ReactNode;
  rank?: string;
}) => {
  if (!rank) {
    return children;
  }

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Content side="bottom">
          <span>{rank}</span>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
