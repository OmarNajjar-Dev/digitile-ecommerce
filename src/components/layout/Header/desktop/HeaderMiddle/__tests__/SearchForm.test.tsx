import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../SearchForm.client";

const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("<SearchForm />", () => {
  beforeEach(() => pushMock.mockClear());

  it("disables submit when query < 2 chars", () => {
    render(<SearchForm />);
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeDisabled();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "a" },
    });
    expect(button).toBeDisabled();
  });

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
