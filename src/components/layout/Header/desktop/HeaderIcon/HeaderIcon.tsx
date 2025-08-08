import Link from "next/link";
import { HeaderIconProps } from "./header-icon.types";

/**
 * Base CSS classes for the HeaderIcon component.
 *
 * Defines the default styling for social media icon links:
 * - Horizontal margin of 8px on both sides (mx-2)
 * - Ensures proper spacing between multiple icons in the header
 */
const BASE_STYLES = "mx-1";

/**
 * HeaderIcon component that renders a clickable social media icon link.
 *
 * This component creates a link wrapper around a social media icon that opens
 * in a new tab when clicked. It's used for displaying social media links
 * in the header with proper accessibility attributes and styling.
 *
 * @param {HeaderIconProps} props - Component props
 * @param {string} props.href - The URL to navigate to when the icon is clicked
 * @param {React.ReactNode} props.icon - The icon element to display (typically from react-icons)
 *
 * @returns {JSX.Element} A Link component containing the social media icon with proper styling
 *
 * @example
 * ```tsx
 * // Basic usage
 * <HeaderIcon href="https://twitter.com/user" icon={<FaTwitter />} />
 *
 * // With custom icon
 * <HeaderIcon href="https://github.com/user" icon={<FaGithub />} />
 * ```
 *
 * @since 1.0.0
 */
function HeaderIcon({ href, icon }: HeaderIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={BASE_STYLES}
    >
      {icon}
    </Link>
  );
}

export default HeaderIcon;
