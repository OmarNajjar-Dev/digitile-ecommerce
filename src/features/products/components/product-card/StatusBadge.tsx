import { StatusBadgeProps } from "./StatusBadge.types";

export default function StatusBadge({ discount, isSoldOut, className }: StatusBadgeProps) {
  if (isSoldOut) {
    return (
      <span className={`text-red-600 text-xs font-semibold underline ${className || ""}`}>
        SOLD&nbsp;OUT
      </span>
    );
  }
  if (discount) {
    return (
      <span className={`bg-red-600 text-white text-xs px-1.5 py-0.5 rounded ${className || ""}`}>
        -{discount}%
      </span>
    );
  }
  return null;
}
