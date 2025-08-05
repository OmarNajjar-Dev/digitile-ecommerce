import Link from "next/link";
import { HeaderIconProps } from "./HeaderIcon.types";

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
 * @returns JSX.Element - A Link component containing the social media icon with proper styling
 */
function HeaderIcon({ href, icon }: HeaderIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      {icon}
    </Link>
  );
}

export default HeaderIcon;
