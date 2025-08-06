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
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>
  );
}

export default DesktopHeader;
