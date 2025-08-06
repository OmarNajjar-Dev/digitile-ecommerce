import { HTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

/* ---------------------------  Icon bar links  --------------------------- */

export interface HeaderIconLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

/* ---------------------------     Props      ----------------------------- */

export interface HeaderMiddleProps extends HTMLAttributes<HTMLDivElement> {
  logoSrc: string;
  logoWidth?: number;
  logoHeight?: number;

  /** Optional callback (runs *after* url-navigation). */
  onSearchSubmit?: (query: string) => void | Promise<void>;

  navIcons?: HeaderIconLink[];
}
