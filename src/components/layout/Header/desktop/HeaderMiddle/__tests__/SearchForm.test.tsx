/**
 * Unit tests for <SearchForm />
 *
 * This test suite validates the functionality of the SearchForm component,
 * ensuring it correctly handles form validation and navigation.
 *
 * @module SearchForm.test
 * @since 1.0.0
 */
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../SearchForm.client";

const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

/**
 * Test suite for SearchForm component functionality.
 *
 * Validates that the component correctly handles form validation,
 * button state management, and navigation to search results.
 */
describe("<SearchForm />", () => {
  beforeEach(() => pushMock.mockClear());

  /**
   * Test that the submit button is disabled when query is less than 2 characters.
   *
   * This test verifies that:
   * - The submit button is initially disabled
   * - The button remains disabled when input has less than 2 characters
   *
   * @test
   */
  it("disables submit when query < 2 chars", () => {
    render(<SearchForm />);
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeDisabled();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "a" },
    });
    expect(button).toBeDisabled();
  });

  /**
   * Test that the submit button is enabled and navigation works when query is 2+ characters.
   *
   * This test verifies that:
   * - The submit button becomes enabled when input has 2+ characters
   * - Clicking the button navigates to the correct search URL
   *
   * @test
   */
  it("enables submit and pushes correct url when query ≥ 2 chars", () => {
    render(<SearchForm />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /search/i });

    fireEvent.change(input, { target: { value: "ab" } });
    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith("/?search=ab");
  });
});
