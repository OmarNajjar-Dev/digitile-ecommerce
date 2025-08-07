/** Localised name for a single category. */
export interface CategoryName {
  ar: string;
  en: string;
}

/** Item inside the “Browse Categories” dropdown. */
export interface CategoryItem {
  id: number | string;
  slug: string;
  name: CategoryName;
  image?: string;
  href?: string;
}

/** Link rendered in the centre section. */
export interface PrimaryLink {
  label: string;
  href: string;
}

/** Language-switch option. */
export interface LanguageOption {
  code: string;
  label: string;
  href: string;
}

/** Props accepted by `<HeaderBottom />`. */
export interface HeaderBottomProps extends React.HTMLAttributes<HTMLElement> {
  mainLinks?: PrimaryLink[];
  categories?: CategoryItem[];
  currentLang?: string;
  languages?: LanguageOption[];
}
