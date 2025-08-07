/**
 * Localised name for a single category.
 */
export interface CategoryName {
  ar: string;
  en: string;
}

/**
 * Item inside the “Browse Categories” dropdown.
 *
 * @property id     - Unique identifier.
 * @property slug   - URL-friendly slug used for navigation.
 * @property name   - Localised names.
 * @property image  - Optional category image URL.
 * @property href   - Optional custom link (defaults to `/${slug}`).
 */
export interface CategoryItem {
  id: number | string;
  slug: string;
  name: CategoryName;
  image?: string;
  href?: string;
}

/**
 * Link rendered in the centre section.
 */
export interface PrimaryLink {
  label: string;
  href: string;
}

/**
 * Language-switch option.
 */
export interface LanguageOption {
  code: string;
  label: string;
  href: string;
}

/**
 * Props accepted by `<HeaderBottom />`.
 *
 * @property mainLinks   - Array of primary navigation links.
 * @property categories  - Array of category items for the dropdown.
 * @property currentLang - Active language code.
 * @property languages   - Array of language switch options.
 */
export interface HeaderBottomProps
  extends React.HTMLAttributes<HTMLElement> {
  mainLinks?: PrimaryLink[];
  categories?: CategoryItem[];
  currentLang?: string;
  languages?: LanguageOption[];
}
