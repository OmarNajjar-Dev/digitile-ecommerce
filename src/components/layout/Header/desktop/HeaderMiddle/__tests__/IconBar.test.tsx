/**
 * Unit tests for <IconBar />
 *
 * This test suite validates the functionality of the IconBar component,
 * ensuring it correctly renders navigation links in the expected order.
 *
 * @module IconBar.test
 * @since 1.0.0
 */
import { render, screen } from "@testing-library/react";
import IconBar from "../IconBar";

/**
 * Test suite for IconBar component functionality.
 *
 * Validates that the component correctly renders all navigation links
 * in the expected order: wishlist, cart, and account.
 */
describe("<IconBar />", () => {
  /**
   * Test that the component contains the expected links in the correct order.
   *
   * This test verifies that:
   * - All three navigation links are present (wishlist, cart, account)
   * - The links are rendered in the correct order
   * - Each link has the correct href attribute
   *
   * @test
   */
  it("contains the expected links in order", () => {
    render(<IconBar />);

    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));

    expect(hrefs).toEqual(["/wishlist", "/cart", "/account"]);
  });
});
