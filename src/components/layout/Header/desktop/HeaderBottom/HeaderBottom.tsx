/**
 * HeaderBottom component.
 *
 * Renders the bottom section of the site header, which includes:
 * 1. Categories dropdown (left)
 * 2. Centre-aligned navigation links (middle)
 * 3. Optional language switcher (right)
 *
 * @remarks
 * - Combines external data (default categories) with optional props.
 *
 * @param props.className      - Extra Tailwind classes to merge with base styles.
 * @param props.categories     - Category list; defaults to payload from `/data/categories`.
 * @param props.mainLinks      - Array of primary links; default is “Brands”.
 * @param props.currentLang    - Active language code for the switcher.
 * @param props.languages      - Language options to display in the switcher.
 * @param props.navProps       - Additional native `<nav>` attributes.
 */
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { CategoriesMenu, MainLinks, LanguageSwitcher } from "./index";
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
 * - Flexbox layout on medium screens+ (`md:flex`)
 * - Vertically centred items (`items-center`)
 * - Fixed height 64 px (`h-16`)
 * - Horizontal padding 40 px (`px-10`)
 * - Full width (`w-full`)
 * - Custom white background (`bg-twhite`)
 * - Subtle shadow
 */
const BASE_STYLES =
  "flex items-center h-16 w-full px-10 bg-primary shadow-[1px_2px_3px_rgba(148,139,139,0.75)]";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */
export default function HeaderBottom({
  className,
  categories = defaultCategories,
  mainLinks = [{ label: "Brands", href: "/brands" }] as PrimaryLink[],
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
