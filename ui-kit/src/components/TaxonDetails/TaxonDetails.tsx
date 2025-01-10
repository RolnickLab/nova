import { cn } from "@/lib/utils";
import { ChevronRightIcon, MinusIcon } from "lucide-react";
import { Taxon } from "./types";

interface TaxonDetailsProps {
  compact?: boolean;
  size?: "default" | "lg";
  taxon: Taxon;
}

export const TaxonDetails = ({
  compact,
  size = "default",
  taxon,
}: TaxonDetailsProps) => {
  const mainParent = compact
    ? taxon.parents.find((p) => p.rank === "FAMILY")
    : undefined;

  const parents = compact
    ? taxon.parents
        .filter(
          (p) =>
            p.rank === "SUBFAMILY" ||
            p.rank === "TRIBE" ||
            p.rank === "SUBTRIBE"
        )
        .slice(-2)
    : taxon.parents;

  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn("font-medium text-primary-500", {
          "body-large": size === "default",
          "body-xlarge": size === "lg",
        })}
      >
        {taxon.name}
      </span>
      <div className="flex items-center flex-wrap gap-1 body-small font-medium text-muted-foreground">
        {mainParent ? (
          <div className="flex items-center gap-1">
            <span>{mainParent.name}</span>
            <MinusIcon className="w-4 h-4 text-neutral-400 rotate-90" />
          </div>
        ) : null}
        {parents.map((parent, index) => (
          <div className="flex items-center gap-1">
            <span>{parent.name}</span>
            {index < parents.length - 1 ? (
              <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
