import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IdentificationDetailsProps {
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
  status?: "unconfirmed" | "confirmed";
}

export const IdentificationDetails = ({
  children,
  className,
  imageSrc,
  status = "unconfirmed",
}: IdentificationDetailsProps) => (
  <div
    className={cn(
      "flex items-center justify-between",
      {
        "bg-success-50": status === "confirmed",
      },
      className
    )}
  >
    <div className="flex items-center gap-4 py-6 px-4">{children}</div>
    {imageSrc ? <img alt="" className="h-24" src={imageSrc} /> : null}
  </div>
);
