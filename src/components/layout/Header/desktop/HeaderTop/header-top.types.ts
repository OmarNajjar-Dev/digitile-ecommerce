/**
 * Props interface for the HeaderTop component.
 *
 * Defines the configuration options for the top section of the desktop header
 * that displays social media links and icons.
 */
export interface HeaderTopProps {
  /**
   * Optional CSS classes to apply to the HeaderTop container.
   *
   * This allows for custom styling and theming of the header top section
   * while maintaining the base styles defined in the component.
   *
   * @example
   * ```tsx
   * <HeaderTop className="bg-blue-500 text-white" />
   * ```
   */
  className?: string;
}
