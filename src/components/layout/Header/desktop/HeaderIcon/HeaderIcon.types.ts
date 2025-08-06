/**
 * Props interface for the HeaderIcon component.
 *
 * Defines the configuration options for rendering social media icon links
 * in the header with proper accessibility and styling.
 */
export interface HeaderIconProps {
  /**
   * The URL to navigate to when the icon is clicked.
   *
   * This should be a valid URL for the social media platform.
   * The link will open in a new tab with proper security attributes.
   *
   * @example
   * ```tsx
   * <HeaderIcon href="https://twitter.com/username" icon={<FaTwitter />} />
   * ```
   */
  href: string;
  /**
   * The icon element to display.
   *
   * Typically a React icon component from react-icons library.
   * The icon will be rendered inside a Link component with proper styling.
   *
   * @example
   * ```tsx
   * <HeaderIcon href="https://github.com/user" icon={<FaGithub />} />
   * ```
   */
  icon: React.ReactNode;
}
