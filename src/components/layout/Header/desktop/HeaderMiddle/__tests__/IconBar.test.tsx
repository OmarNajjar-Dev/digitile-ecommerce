import { render, screen } from "@testing-library/react";
import IconBar from "../IconBar";

describe("<IconBar />", () => {
  it("contains the expected links in order", () => {
    render(<IconBar />);

    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));

    expect(hrefs).toEqual(["/wishlist", "/cart", "/account"]);
  });
});
