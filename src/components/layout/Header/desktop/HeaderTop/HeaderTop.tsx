import { HeaderTopProps } from "./header-top.types";
import HeaderIcon from "@/components/layout/Header/desktop/HeaderIcon";
import { config } from "@/data/config";
import { getIcon } from "@/components/layout/Header/desktop/HeaderIcon/header-icon.utils";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Base CSS classes for the HeaderTop component.
 *
 * Defines the default styling for the header top section:
 * - Flexbox layout on medium screens and up (md:flex)
 * - Right-aligned content (md:justify-end)
 * - Fixed height of 48px (h-12)
 * - Horizontal padding of 40px (px-10)
 * - Full width (w-full)
 * - Primary background color (bg-primary)
 */
const BASE_STYLES = "flex justify-end h-10 px-10 w-full bg-primary";

/**
 * HeaderTop component that displays social media links in the header.
 *
 * This component renders social media icons and links in the top section of the header.
 * It filters out empty social media URLs from the configuration and renders only
 * active social media platforms with their corresponding icons.
 *
 * @param {HeaderTopProps} props - Component props
 * @param {string} [props.className] - Optional CSS classes to apply to the container
 *
 * @returns {JSX.Element} A div containing social media icon links with proper spacing
 *
 * @example
 * ```tsx
 * // Basic usage
 * <HeaderTop />
 *
 * // With custom styling
 * <HeaderTop className="bg-blue-500 text-white" />
 * ```
 *
 * @since 1.0.0
 */
function HeaderTop({ className }: HeaderTopProps): JSX.Element {
  const rootClass = twMerge(clsx(BASE_STYLES, className));

  const socialLinks = Object.entries(config.response.social_media_link).filter(
    ([, url]) => url.trim() !== ""
  );

  return (
    <div className={rootClass}>
      <div className="flex items-center gap-6">
        {socialLinks.map(([platform, url]) => (
          <HeaderIcon key={platform} href={url} icon={getIcon(platform)} />
        ))}
      </div>
    </div>
  );
}

export default HeaderTop;
