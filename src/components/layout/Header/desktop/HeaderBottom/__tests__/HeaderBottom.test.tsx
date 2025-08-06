/**
 * @file Unit tests for HeaderBottom component
 */
import { render, screen } from "@testing-library/react";
import { HeaderBottom } from "..";

describe("<HeaderBottom />", () => {
  it("renders additional navigation section", () => {
    render(<HeaderBottom />);
    // looking for the div content since HeaderBottom currently renders a div
    expect(screen.getByText("HeaderBottom")).toBeInTheDocument();
  });
});
