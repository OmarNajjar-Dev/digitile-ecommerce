/**
 * @file Unit tests for getIcon util
 */
import { getIcon } from "../HeaderIcon.utils";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

describe("getIcon()", () => {
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

  it("returns null for unsupported platform", () => {
    expect(getIcon("mySpace")).toBeNull();
  });
});
