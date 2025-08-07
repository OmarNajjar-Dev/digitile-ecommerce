import Link from "next/link";
import clsx from "clsx";
import type { LanguageOption } from "./HeaderBottom.types";

/** Optional right-hand language switcher. */
export default function LanguageSwitcher({
  options,
  active,
}: {
  options: LanguageOption[];
  active: string;
}) {
  if (options.length === 0) return null;

  return (
    <div className="flex w-2/12 justify-end gap-6">
      {options.map(({ code, label, href }) => (
        <Link
          key={code}
          href={href}
          aria-label={`Switch language to ${label}`}
          className={clsx(
            "rounded-full text-lg font-bold lowercase",
            code === active ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
