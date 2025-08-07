/**
 * CategoriesMenuTrigger component.
 *
 * Renders a dropdown button that lists product categories.
 * - Hover shows the menu and flips the arrow icon.
 * - Clicking the main button navigates to `/categories`.
 * - Clicking a list item navigates to `/{slug}` or a custom `href`.
 *
 * This file is “client-side” because it relies on React state and browser events.
 */

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import type { CategoryItem } from "./HeaderBottom.types";

/**
 * Props for {@link CategoriesMenuTrigger}.
 * @property items - Array of categories to display in the dropdown.
 */
interface Props {
  items: CategoryItem[];
}

/**
 * Dropdown trigger that lists categories.
 */
export default function CategoriesMenuTrigger({ items }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
      className="w-full z-50 mx-auto h-full mt-0 bg-primary flex justify-between items-center gap-4 px-2 text-white lg:text-base text-sm font-bold cursor-pointer relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => router.push("/categories")} // navigate to all categories
        className="w-full h-full bg-primary flex justify-between items-center gap-4 px-2 text-white cursor-pointer rounded-t-md hover:underline"
      >
        <span className="relative w-full flex justify-center items-center">
          <Menu
            size={28}
            aria-hidden
            className="absolute left-0 xl:left-6 2xl:left-8 top-1/2 -translate-y-1/2 shrink-0"
          />

          <span className="ps-16 text-left xl:text-base text-sm font-bold">
            {open ? "All Categories" : "Browse Categories"}
          </span>
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 mr-2 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-white border text-sm text-black shadow-lg transition-transform duration-300 origin-top transform ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul>
          {items.map((cat) => {
            const href = cat.href ?? `/${cat.slug}`; // base_url + slug
            return (
              <li
                key={cat.id}
                className="w-full px-4 py-2.25 cursor-pointer hover:bg-primary hover:text-white"
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
