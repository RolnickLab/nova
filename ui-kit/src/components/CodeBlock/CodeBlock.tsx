import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { useShowFader } from "./useShowFader";

interface CodeBlockProps {
  collapsible?: boolean;
  snippet: string;
  theme?: "default" | "error";
}

export const CodeBlock = ({
  collapsible = false,
  snippet,
  theme = "default",
}: CodeBlockProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(!collapsible);
  const showFader = useShowFader(collapsible, elementRef, [
    collapsible,
    expanded,
    snippet,
  ]);
  const showExpandButton = (() => {
    if (!collapsible) {
      return false;
    }

    if (!expanded) {
      return showFader;
    }

    return true;
  })();

  useEffect(() => {
    setExpanded(!collapsible);
  }, [collapsible]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "relative p-4 rounded-xl border border-border bg-muted overflow-auto overflow-y-hidden",
        { "max-h-32": !expanded }
      )}
    >
      <pre
        className={cn("text-xs text-muted-foreground", {
          "text-destructive": theme === "error",
        })}
      >
        {snippet}
      </pre>
      {showFader && (
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-[transparent] to-muted" />
      )}
      {showExpandButton ? (
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => setExpanded(!expanded)}
        >
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
};
