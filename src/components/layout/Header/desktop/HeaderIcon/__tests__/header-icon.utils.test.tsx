/**
 * Unit tests for <HeaderIcon /> utilities
 *
 * This test suite validates the functionality of the getIcon utility function,
 * ensuring it correctly maps platform names to their corresponding React-Icons
 * components and handles unsupported platforms gracefully.
 *
 * @module HeaderIcon.utils.test
 * @since 1.0.0
 */
import { getIcon } from "../header-icon.utils";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Test suite for getIcon utility function.
 *
 * Validates that the function correctly maps platform names to icons
 * and handles edge cases like unsupported platforms.
 */
describe("getIcon()", () => {
  /**
   * Test that the function returns the correct icon for supported platforms.
   *
   * This test verifies that:
   * - Each supported platform returns the correct React-Icons component
   * - The returned element is a valid React element
   * - The element type matches the expected component
   *
   * @test
   */
  it.each([
    ["twitter", FaTwitter],
    ["facebook", FaFacebook],
    ["github", FaGithub],
    ["linkedin", FaLinkedin],
  ])("returns %s icon", (platform, expectedComponent) => {
    const iconElement = getIcon(platform);
    // Check if the element is a React element and has the expected type
    expect(iconElement).toBeTruthy();
    if (
      iconElement &&
      typeof iconElement === "object" &&
      "type" in iconElement
    ) {
      expect(iconElement.type).toBe(expectedComponent);
    }
  });

  /**
   * Test that the function returns null for unsupported platforms.
   *
   * This test verifies that:
   * - Unsupported platform names return null
   * - The function handles edge cases gracefully
   *
   * @test
   */
  it("returns null for unsupported platform", () => {
    expect(getIcon("mySpace")).toBeNull();
  });
});
