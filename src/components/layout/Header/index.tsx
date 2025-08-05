import { DesktopHeader } from "./desktop";
import { MobileHeader } from "./mobile";

/**
 * Main Header component that renders both desktop and mobile header versions.
 *
 * This component serves as the main header wrapper that conditionally renders
 * the appropriate header layout based on the device type. It includes both
 * desktop and mobile header components within a semantic header element.
 *
 * @returns JSX.Element - A header element containing both desktop and mobile header components
 */
function index() {
  return (
    <header>
      <DesktopHeader></DesktopHeader>
      <MobileHeader></MobileHeader>
    </header>
  );
}

export default index;
