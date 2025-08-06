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

describe("<HeaderMiddle />", () => {
  it("renders Logo, IconBar and SearchForm (no nav)", () => {
    render(<HeaderMiddle />);

    expect(
      screen.getByRole("link", { name: /go to homepage/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("iconbar")).toBeInTheDocument();
    expect(screen.getByTestId("searchform")).toBeInTheDocument();
  });
});
