import { CONSTANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { EyeIcon, ShieldCheckIcon } from "lucide-react";
import {
  CONFIDENCE_SCORE_THRESHOLDS,
  RADIUS_DEFAULT,
  RADIUS_LG,
  STROKE_WIDTH,
} from "./constants";

interface IdentificationScoreProps {
  confidenceScore: number;
  confidenceScoreThresholds?: { warning: number; alert: number };
  confirmed?: boolean;
  size?: "default" | "lg";
}

export const IdentificationScore = ({
  confidenceScore,
  confidenceScoreThresholds = CONFIDENCE_SCORE_THRESHOLDS,
  confirmed,
  size = "default",
}: IdentificationScoreProps) => {
  const strokeColor = (() => {
    if (confidenceScore >= confidenceScoreThresholds.warning) {
      return CONSTANTS.COLORS.success[500];
    }
    if (confidenceScore >= confidenceScoreThresholds.alert) {
      return CONSTANTS.COLORS.warning[500];
    }
    return CONSTANTS.COLORS.alert[600];
  })();

  const Icon = confirmed ? ShieldCheckIcon : EyeIcon;

  const radius = {
    default: RADIUS_DEFAULT,
    lg: RADIUS_LG,
  }[size];
  const normalizedRadius = radius - STROKE_WIDTH / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - confidenceScore * circumference;

  return (
    <div
      className={cn("relative rounded-full")}
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
    >
      <div
        className={cn(
          "w-full h-full flex items-center justify-center border-4 border-neutral-200 rounded-full text-muted-foreground"
        )}
      >
        <Icon style={{ width: `${radius}px`, height: `${radius}px` }} />
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        <svg height={radius * 2} width={radius * 2} transform="rotate(-90)">
          <circle
            className="transition-colors"
            cx={radius}
            cy={radius}
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
