import "./globals.css";
import Header from "@/components/layout/Header";

/**
 * Root layout component that wraps the entire application.
 *
 * This component serves as the root layout for the Next.js application,
 * providing the basic HTML structure including the document head,
 * body, and global styles. It includes the main Header component
 * and sets up the fundamental page structure.
 *
 * @returns JSX.Element - The complete HTML document structure with header and body content
 */
function layout() {
  return (
    <html lang="en">
      <body>
        <Header></Header>
      </body>
    </html>
  );
}

export default layout;
