import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

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
