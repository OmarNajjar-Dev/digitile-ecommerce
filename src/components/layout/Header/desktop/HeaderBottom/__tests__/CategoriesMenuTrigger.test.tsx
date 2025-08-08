import { render, screen, fireEvent } from "@testing-library/react";
import CategoriesMenuTrigger from "../CategoriesMenuTrigger";
import type { CategoryItem } from "../header-bottom.types";

/* Mock Next.js router */
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

const mockItems: CategoryItem[] = [
  { id: 1, slug: "beverages-123", name: { en: "Beverages", ar: "" } },
];

describe("CategoriesMenuTrigger", () => {
  it("shows default button text", () => {
    render(<CategoriesMenuTrigger items={mockItems} />);
    expect(screen.getByText("Browse Categories")).toBeInTheDocument();
  });

  it("changes text on hover", () => {
    render(<CategoriesMenuTrigger items={mockItems} />);
    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);
    expect(screen.getByText("All Categories")).toBeInTheDocument();
    fireEvent.mouseLeave(button);
    expect(screen.getByText("Browse Categories")).toBeInTheDocument();
  });
});
