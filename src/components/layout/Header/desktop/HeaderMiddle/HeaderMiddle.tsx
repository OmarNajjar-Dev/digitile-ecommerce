import { Logo } from "@/components/layout/common";
import { HeaderMiddleProps } from "./HeaderMiddle.types";
import SearchForm from "./SearchForm.client";
import IconBar from "./IconBar";
import { twMerge } from "tailwind-merge";

/**
 * Default logo configuration for the header
 */
const LOGO_PROPS = {
  src: "/images/logo.webp",
  alt: "MySite Logo",
  width: 320,
  height: 100,
  priority: true,
};

/**
 * Base CSS classes for the HeaderMiddle component.
 *
 * Defines the default styling for the header middle section:
 * - Flexbox layout on medium screens and up (md:flex)
 * - Center-aligned content horizontally and vertically (md:justify-center md:items-center)
 * - Fixed height of 96px (h-24)
 * - Horizontal padding of 40px (px-10)
 * - Full width (w-full)
 * - White background color (bg-white)
 */
const BASE_STYLES =
  "flex justify-center items-center h-28 px-10 w-full bg-white";

/**
 * HeaderMiddle component that renders the middle section of the desktop header
 *
 * @param {HeaderMiddleProps} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply to the root element
 * @returns {JSX.Element} The rendered header middle section
 */
export default function HeaderMiddle({ className }: HeaderMiddleProps) {
  const rootClass = twMerge(BASE_STYLES, className);

  return (
    <div className={rootClass}>
      {/* Logo with required props */}
      <div className="w-1/6 h-full flex justify-center items-center">
        <Logo
          className="absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent"
          {...LOGO_PROPS}
        />
      </div>

      {/* Search */}
      <div className="lg:w-4/6 w-5/6">
        <SearchForm />
      </div>

      <div className="flex w-2/6 items-center justify-end gap-6 lg:w-1/6">
        <IconBar />
      </div>
    </div>
  );
}
