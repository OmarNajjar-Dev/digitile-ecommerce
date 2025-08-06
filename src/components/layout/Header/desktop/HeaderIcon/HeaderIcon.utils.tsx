import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

/**
 * Base CSS classes for the HeaderIcon component.
 *
 * Defines the default styling for social media icons:
 * - Width and height of 28px (w-7 h-7)
 * - White text color (text-white)
 * - Ensures consistent sizing and color across all icons
 */
const defaultClasses = "w-7 h-7 text-white";

/**
 * Returns the social-media icon matching the provided platform name.
 *
 * This utility function maps platform names to their corresponding React-Icons
 * components with consistent styling applied. It supports case-insensitive
 * platform names and returns null for unsupported platforms.
 *
 * @param {string} platform - Social-media platform name (case-insensitive).
 *   Supported values: `"twitter"`, `"facebook"`, `"github"`, `"linkedin"`,
 *   `"youtube"`, `"instagram"`, `"whatsapp"`.
 *
 * @returns {React.ReactNode} The corresponding React-Icons element with preset sizing & color,
 *          or `null` if the platform is not supported.
 *
 * @example
 * ```tsx
 * const icon = getIcon("twitter");
 * // => <FaTwitter className="w-7 h-7 text-white" />
 *
 * const icon = getIcon("GITHUB");
 * // => <FaGithub className="w-7 h-7 text-white" />
 *
 * const icon = getIcon("myspace");
 * // => null
 * ```
 *
 * @since 1.0.0
 */
export function getIcon(platform: string): React.ReactNode {
  switch (platform.toLowerCase()) {
    case "twitter":
      return <FaTwitter className={defaultClasses} />;
    case "facebook":
      return <FaFacebook className={defaultClasses} />;
    case "github":
      return <FaGithub className={defaultClasses} />;
    case "linkedin":
      return <FaLinkedin className={defaultClasses} />;
    case "youtube":
      return <FaYoutube className={defaultClasses} />;
    case "instagram":
      return <FaInstagram className={defaultClasses} />;
    case "whatsapp":
      return <FaWhatsapp className={defaultClasses} />;
    default:
      return null;
  }
}
