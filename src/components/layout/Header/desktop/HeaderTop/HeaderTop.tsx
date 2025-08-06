import { HeaderTopProps } from "./HeaderTop.types";
import HeaderIcon from "@/components/layout/Header/desktop/HeaderIcon";
import { config } from "@/data/config";
import { getIcon } from "@/components/layout/Header/desktop/HeaderIcon/HeaderIcon.utils";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const BASE_STYLES =
  "hidden md:flex md:justify-end h-12 px-10 w-full bg-primary";

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
 * @returns JSX.Element - A div containing social media icon links with proper spacing
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
