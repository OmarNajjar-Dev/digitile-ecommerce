/**
 * @file Unit tests for HeaderMiddle component
 */
import { render, screen } from "@testing-library/react";
import { HeaderMiddle } from "..";

describe("<HeaderMiddle />", () => {
  it("renders main navigation", () => {
    render(<HeaderMiddle />);
    // looking for the div content since HeaderMiddle currently renders a div
    expect(screen.getByText("HeaderMiddle")).toBeInTheDocument();
  });
});
