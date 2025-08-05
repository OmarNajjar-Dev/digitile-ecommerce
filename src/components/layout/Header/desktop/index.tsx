import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

/**
 * Desktop Header component that renders the complete desktop header layout.
 *
 * This component combines three header sections: top (social media links),
 * middle (main navigation), and bottom (additional navigation elements).
 * The layout is responsive and includes proper styling classes for desktop view.
 *
 * @returns JSX.Element - A div containing the three header sections with responsive styling
 */
function index() {
  return (
    <div>
      <HeaderTop className="hidden sm:flex sm:justify-end h-12 px-10 w-full bg-primary"></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>
  );
}

export default index;
