interface PlaceholderProps {
  label?: string;
}

export const Placeholder = ({ label = "Placeholder" }: PlaceholderProps) => (
  <div className="p-4 rounded-sm bg-muted text-muted-foreground/50 body-overline font-bold">
    {label}
  </div>
);
