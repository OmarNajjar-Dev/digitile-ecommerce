import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

/**
 * Desktop Header component that renders the complete desktop header layout.
 *
 * This component combines three header sections: top (social media links),
 * middle (main navigation), and bottom (additional navigation elements).
 * The layout is responsive and includes proper styling classes for desktop view.
 *
 * @returns JSX.Element - A div containing the three header sections with responsive styling
 */
function DesktopHeader() {
  return (
    <div>
      <HeaderTop className="hidden md:flex md:justify-end h-12 px-10 w-full bg-primary"></HeaderTop>
      <HeaderMiddle className="hidden md:flex md:justify-center md:items-center h-24 px-10 w-full bg-white"></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>
  );
}

export default DesktopHeader;
