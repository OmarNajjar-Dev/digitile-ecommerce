/**
 * Unit tests for <HeaderTop />
 */
import { render, screen } from "@testing-library/react";
import HeaderTop from "../HeaderTop";

/* ------------------------------------------------------------------ */
/* 🔧 Mocks */
/* ------------------------------------------------------------------ */

// Mock config to control which links are rendered
jest.mock("@/data/config", () => ({
  config: {
    response: {
      social_media_link: {
        twitter: "https://twitter.com/foo",
        facebook: "", // ← empty → should be filtered out
        github: "https://github.com/foo",
      },
    },
  },
}));

// Mock getIcon to avoid importing react-icons
jest.mock(
  "@/components/layout/Header/desktop/HeaderIcon/HeaderIcon.utils",
  () => ({
    getIcon: (platform: string) => <span data-testid={`icon-${platform}`} />,
  })
);

// Mock HeaderIcon so we can assert on its props easily
jest.mock("@/components/layout/Header/desktop/HeaderIcon", () => ({
  __esModule: true,
  default: ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a data-testid="header-icon" href={href}>
      {icon}
    </a>
  ),
}));

/* ------------------------------------------------------------------ */
/* 🧪 Tests */
/* ------------------------------------------------------------------ */

describe("<HeaderTop />", () => {
  it("renders only non-empty social links", () => {
    render(<HeaderTop className="foo" />);

    // Should render exactly 2 icons (twitter & github)
    const icons = screen.getAllByTestId("header-icon");
    expect(icons).toHaveLength(2);

    // Check that each href matches mocked config
    expect(icons[0]).toHaveAttribute("href", "https://twitter.com/foo");
    expect(icons[1]).toHaveAttribute("href", "https://github.com/foo");

    // Ensure corresponding SVG / span from getIcon is present
    expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
    expect(screen.getByTestId("icon-github")).toBeInTheDocument();
  });
});
