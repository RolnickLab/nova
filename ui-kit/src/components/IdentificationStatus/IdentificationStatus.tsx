import { CONSTANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CONFIDENCE_SCORE_THRESHOLDS, RADIUS, STROKE_WIDTH } from "./constants";

interface IdentificationStatusProps {
  applied?: boolean;
  confidenceScore: number;
  confidenceScoreThresholds?: { warning: number; alert: number };
}

export const IdentificationStatus = ({
  applied,
  confidenceScore,
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
        "bg-success-300": applied,
      })}
    >
      <div
        className={cn(
          "border-4 border-neutral-200 rounded-full text-generic-white",
          { "text-success-50": applied }
        )}
      >
        <CheckIcon />
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

const CheckIcon = () => (
  <svg
    fill="none"
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M23.4142 13.4142C24.1953 12.6332 24.1953 11.3668 23.4142 10.5858C22.6332 9.80474 21.3668 9.80474 20.5858 10.5858L14 17.1716L11.4142 14.5858C10.6332 13.8047 9.36683 13.8047 8.58579 14.5858C7.80474 15.3668 7.80474 16.6332 8.58579 17.4142L12.5858 21.4142C13.3668 22.1953 14.6332 22.1953 15.4142 21.4142L23.4142 13.4142Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
