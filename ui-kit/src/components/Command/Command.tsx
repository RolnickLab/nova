import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { Check, ChevronDown, Loader2, Search } from "lucide-react";
import * as React from "react";

const Root = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground border-input border",
      className
    )}
    {...props}
  />
));
Root.displayName = "Command.Root";

const Input = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    loading?: boolean;
  }
>(({ className, loading, ...props }, ref) => (
  <div
    className="flex items-center px-4 border-b last:border-none border-input"
    cmdk-input-wrapper=""
  >
    {loading ? (
      <Loader2 className="h-4 w-4 mr-4 animate-spin" />
    ) : (
      <Search className="h-4 w-4 mr-4" />
    )}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-md bg-background body-base outline-none placeholder:text-muted-foreground/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
Input.displayName = "Command.Input";

const List = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
List.displayName = "Command.List";

const Empty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="h-12 px-4 flex items-center justify-center body-base"
    {...props}
  />
));
Empty.displayName = "Command.Empty";

const Group = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "text-generic-white bg-neutral-700 overflow-hidden",
      className
    )}
    {...props}
  />
));
Group.displayName = "Command.Group";

const Item = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex h-12 px-4 cursor-default gap-2 select-none items-center body-base outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-neutral-800 data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
));
Item.displayName = "Command.Item";

const Taxon = ({
  hasChildren,
  label,
  level = 0,
  rank,
  selected,
}: {
  hasChildren?: boolean;
  label: string;
  level?: number;
  rank: string;
  selected?: boolean;
}) => (
  <div className="w-full h-full flex items-center justify-between">
    <div className="flex items-center">
      <div style={{ width: `${level}rem` }} />
      {selected ? (
        <Check className="w-4 h-4 mr-4" />
      ) : (
        <ChevronDown
          className={cn("w-4 h-4 mr-4 invisible", hasChildren && "visible")}
        />
      )}
      <span className="body-base">{label}</span>
    </div>
    <span className="body-overline-small">{rank}</span>
  </div>
);
Taxon.displayName = "Command.Taxon";

export { Empty, Group, Input, Item, List, Root, Taxon };
