/**
 * Unit tests for <HeaderMiddle />
 *
 * This test suite validates the functionality of the HeaderMiddle component,
 * ensuring it correctly renders the logo, search form, and icon bar.
 *
 * @module HeaderMiddle.test
 * @since 1.0.0
 */
import { render, screen } from "@testing-library/react";
import HeaderMiddle from "../HeaderMiddle";

jest.mock("../IconBar", () => ({
  __esModule: true,
  default: () => <div data-testid="iconbar" />,
}));
jest.mock("../SearchForm.client", () => ({
  __esModule: true,
  default: () => <form data-testid="searchform" />,
}));

/**
 * Test suite for HeaderMiddle component functionality.
 *
 * Validates that the component correctly renders all required sub-components
 * including the logo, search form, and icon bar.
 */
describe("<HeaderMiddle />", () => {
  /**
   * Test that the component renders Logo, IconBar and SearchForm.
   *
   * This test verifies that:
   * - The logo link is present with correct accessibility attributes
   * - The IconBar component is rendered
   * - The SearchForm component is rendered
   *
   * @test
   */
  it("renders Logo, IconBar and SearchForm (no nav)", () => {
    render(<HeaderMiddle />);

    expect(
      screen.getByRole("link", { name: /go to homepage/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("iconbar")).toBeInTheDocument();
    expect(screen.getByTestId("searchform")).toBeInTheDocument();
  });
});
