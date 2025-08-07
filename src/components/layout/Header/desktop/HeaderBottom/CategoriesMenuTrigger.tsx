// CategoriesMenuTrigger.tsx
/**
 * Dropdown trigger that lists categories.
 *
 * Button redesign:
 * - Uses `AlignJustify` icon (three centered lines) to match the reference image.
 * - Clean flex layout: fixed-width icon, growing label, arrow on the right.
 * - Responsive paddings: tighter on mobile, wider on large screens.
 */

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AlignLeft, ChevronDown } from "lucide-react";
import type { CategoryItem } from "./HeaderBottom.types";

interface Props {
  items: CategoryItem[];
}

export default function CategoriesMenuTrigger({ items }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Close menu on any outside pointer event */
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full z-50 mx-auto h-14 mt-auto bg-secondary flex items-center rounded-t-md relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="w-full h-full flex items-center gap-3 px-2 lg:px-4 text-white cursor-pointer"
      >
        {/* icon */}
        <AlignLeft size={26} aria-hidden className="shrink-0" />

        {/* label */}
        <span className="flex-1 text-left text-sm xl:text-base font-bold">
          Shop By Categories
        </span>

        {/* arrow */}
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      {/* dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white border text-sm text-black shadow-lg transition-transform duration-300 origin-top transform ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul>
          <li
            className="w-full px-4 py-2 cursor-pointer hover:bg-secondary hover:text-white"
          >
            <Link href="./categories" className="flex w-full font-bold">
              All Categories
            </Link>
          </li>
          {items.map((cat) => {
            const href = cat.href ?? `/${cat.slug}`;
            return (
              <li
                key={cat.id}
                className="w-full px-4 py-2 cursor-pointer hover:bg-secondary hover:text-white"
              >
                <Link href={href} className="flex w-full font-bold">
                  {cat.name.en}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
