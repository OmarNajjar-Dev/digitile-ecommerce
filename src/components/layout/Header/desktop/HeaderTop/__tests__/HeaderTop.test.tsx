/**
 * Unit tests for <HeaderTop />
 *
 * This test suite validates the functionality of the HeaderTop component,
 * ensuring it correctly renders social media links and filters out empty URLs.
 *
 * @module HeaderTop.test
 * @since 1.0.0
 */
import { render, screen } from "@testing-library/react";
import HeaderTop from "../HeaderTop";

/* ------------------------------------------------------------------ */
/* 🔧 Mocks */
/* ------------------------------------------------------------------ */

/**
 * Mock configuration for social media links.
 *
 * Provides controlled test data to verify that the component correctly
 * filters out empty social media URLs and renders only active links.
 *
 * @example
 * - twitter: "https://twitter.com/foo" (should render)
 * - facebook: "" (should be filtered out)
 * - github: "https://github.com/foo" (should render)
 */
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

/**
 * Mock for the getIcon utility function.
 *
 * Avoids importing react-icons in tests by providing a simple span element
 * with a test ID for easy identification in assertions.
 *
 * @param {string} platform - The social media platform name
 * @returns {JSX.Element} A span element with test ID for the platform
 */
jest.mock(
  "@/components/layout/Header/desktop/HeaderIcon/HeaderIcon.utils",
  () => ({
    getIcon: (platform: string) => <span data-testid={`icon-${platform}`} />,
  })
);

/**
 * Mock for the HeaderIcon component.
 *
 * Simplifies testing by providing a basic anchor element that can be easily
 * asserted against, while maintaining the expected props interface.
 *
 * @param {Object} props - Component props
 * @param {string} props.href - The URL for the social media link
 * @param {React.ReactNode} props.icon - The icon element to render
 * @returns {JSX.Element} An anchor element with test ID and href attribute
 */
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

/**
 * Test suite for HeaderTop component functionality.
 *
 * Validates that the component correctly renders social media links,
 * filters out empty URLs, and applies custom styling when provided.
 */
describe("<HeaderTop />", () => {
  /**
   * Test that the component renders only non-empty social media links.
   *
   * This test verifies that:
   * - Empty social media URLs are filtered out
   * - Only active social media platforms are rendered
   * - Each rendered link has the correct href attribute
   * - Corresponding icons are present for each platform
   *
   * @test
   */
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
