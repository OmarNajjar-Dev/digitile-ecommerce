import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { CategoriesMenu, MainLinks, LanguageSwitcher } from "./index"; // barrel file inside the same folder

import type {
  HeaderBottomProps,
  PrimaryLink,
  LanguageOption,
} from "./HeaderBottom.types";

/* -------------------------------------------------------------------------- */
/* External data                                                              */
/* -------------------------------------------------------------------------- */
import { categories as categoriesPayload } from "@/data/categories/categories";
import type { CategoryItem } from "@/types/categories/categories";

/** Default category list extracted from the payload. */
const defaultCategories: CategoryItem[] = categoriesPayload.response.categories;

/* -------------------------------------------------------------------------- */
/* Styling                                                                    */
/* -------------------------------------------------------------------------- */
/**
 * Base CSS classes for the HeaderBottom component.
 *
 * - Hidden on mobile (`hidden`)
 * - Flexbox layout on medium screens and up (`md:flex`)
 * - Items vertically centred (`items-center`)
 * - Fixed height of 64 px (`h-16`)
 * - Horizontal padding of 40 px (`px-10`)
 * - Full width (`w-full`)
 * - Custom white background (`bg-twhite`)
 * - Subtle shadow (`shadow-[1px_2px_3px_rgba(148,139,139,0.75)]`)
 */
const BASE_STYLES =
  "hidden md:flex items-center h-16 w-full px-10 bg-twhite shadow-[1px_2px_3px_rgba(148,139,139,0.75)]";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */
/**
 * Bottom section of the site header.
 *
 * Renders three areas:
 * 1. Browse-Categories dropdown (left)
 * 2. Centre navigation links
 * 3. Optional language switcher (right)
 */
export default function HeaderBottom({
  className,
  categories = defaultCategories,
  mainLinks = [{ label: "Brands", href: "/en/brands" }] as PrimaryLink[],
  currentLang = "en",
  languages = [] as LanguageOption[],
  ...navProps
}: HeaderBottomProps) {
  const rootClass = twMerge(clsx(BASE_STYLES, className));

  return (
    <nav
      {...navProps}
      className={rootClass}
      aria-label="Primary navigation (bottom header)"
    >
      <CategoriesMenu items={categories} />
      <MainLinks links={mainLinks} />
      <LanguageSwitcher options={languages} active={currentLang} />
    </nav>
  );
}
