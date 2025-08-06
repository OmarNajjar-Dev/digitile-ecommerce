/**
 * @file Unit tests for DesktopHeader composite component
 */
import { render, screen } from "@testing-library/react";
import { DesktopHeader } from "..";

// Mock the child sections so we only test composition
jest.mock("../HeaderTop/HeaderTop", () => {
  const MockHeaderTop = () => <div data-testid="mock-top" />;
  MockHeaderTop.displayName = "MockHeaderTop";
  return MockHeaderTop;
});

jest.mock("../HeaderMiddle/HeaderMiddle", () => {
  const MockHeaderMiddle = () => <div data-testid="mock-middle" />;
  MockHeaderMiddle.displayName = "MockHeaderMiddle";
  return MockHeaderMiddle;
});

jest.mock("../HeaderBottom/HeaderBottom", () => {
  const MockHeaderBottom = () => <div data-testid="mock-bottom" />;
  MockHeaderBottom.displayName = "MockHeaderBottom";
  return MockHeaderBottom;
});

describe("<DesktopHeader />", () => {
  it("composes Top, Middle and Bottom sections", () => {
    render(<DesktopHeader />);
    expect(screen.getByTestId("mock-top")).toBeInTheDocument();
    expect(screen.getByTestId("mock-middle")).toBeInTheDocument();
    expect(screen.getByTestId("mock-bottom")).toBeInTheDocument();
  });
});
