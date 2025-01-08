import { CONSTANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { CONFIDENCE_SCORE_THRESHOLDS, RADIUS, STROKE_WIDTH } from "./constants";

interface IdentificationStatusProps {
  confidenceScore: number;
  confidenceScoreThresholds?: { warning: number; alert: number };
  status: "unconfirmed" | "confirmed";
}

export const IdentificationStatus = ({
  confidenceScore,
  status,
  confidenceScoreThresholds = CONFIDENCE_SCORE_THRESHOLDS,
}: IdentificationStatusProps) => {
  const strokeColor = (() => {
    if (confidenceScore >= confidenceScoreThresholds.warning) {
      return CONSTANTS.COLORS.success[500];
    }
    if (confidenceScore >= confidenceScoreThresholds.alert) {
      return CONSTANTS.COLORS.warning[500];
    }
    return CONSTANTS.COLORS.alert[600];
  })();

  const normalizedRadius = RADIUS - STROKE_WIDTH / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - confidenceScore * circumference;

  return (
    <div
      className={cn("relative w-10 h-10 rounded-full bg-primary-300", {
        "bg-success-300": status === "confirmed",
      })}
    >
      <div className="p-1 border-4 border-neutral-200 rounded-full">
        <CheckIcon className="w-full h-full text-generic-white" />
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        <svg height={RADIUS * 2} width={RADIUS * 2} transform="rotate(-90)">
          <circle
            className="transition-colors"
            cx={RADIUS}
            cy={RADIUS}
            fill="transparent"
            r={normalizedRadius}
            stroke={strokeColor}
            strokeDasharray={circumference + " " + circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            strokeWidth={STROKE_WIDTH}
          />
        </svg>
      </div>
    </div>
  );
};
