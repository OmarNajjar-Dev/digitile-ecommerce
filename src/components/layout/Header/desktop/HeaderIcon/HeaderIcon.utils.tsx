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
 * Default Tailwind utility classes applied to every icon.
 *
 * - `w-7 h-7` → sets width & height to 1.75 rem (28 px).  
 * - `text-white` → forces icon color to white so it won’t inherit parent color.
 */
const defaultClasses = "w-7 h-7 text-white";

/**
 * Returns the social-media icon matching the provided platform name.
 *
 * @param platform - Social-media platform name (case-insensitive).  
 *   Supported values: `"twitter"`, `"facebook"`, `"github"`, `"linkedin"`,
 *   `"youtube"`, `"instagram"`, `"whatsapp"`.
 *
 * @returns The corresponding React-Icons element with preset sizing & color,
 *          or `null` if the platform is not supported.
 *
 * @example
 * ```tsx
 * const icon = getIcon("twitter");
 * // => <FaTwitter className="w-7 h-7 text-white" />
 * ```
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
