import { ReactNode } from "react";

interface BoxProps {
  label?: string;
  children: ReactNode;
}

export const Box = ({ label, children }: BoxProps) => (
  <div className="p-4 border rounded-xl">
    {label?.length ? (
      <div className="h-8 flex items-center justify-between">
        <span className="body-overline font-bold">{label}</span>
      </div>
    ) : null}
    {children}
  </div>
);
