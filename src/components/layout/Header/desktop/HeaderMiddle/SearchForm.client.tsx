/**
 * SearchForm Component
 *
 * A client-side search form component that allows users to search for products.
 * The form includes input validation (minimum 2 characters) and updates the URL
 * with search parameters for navigation and state management.
 *
 * Features:
 * - Real-time input validation
 * - URL-based search state management
 * - Responsive design with search icon
 * - Disabled state for invalid queries
 *
 * @component
 * @example
 * ```tsx
 * import { SearchForm } from "@/components/layout/Header/desktop/HeaderMiddle";
 *
 * function Header() {
 *   return (
 *     <div className="header">
 *       <SearchForm />
 *     </div>
 *   );
 * }
 * ```
 */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";
import { Button, Input } from "@/components/ui";
import { Search } from "lucide-react";

/**
 * SearchForm component that handles product search functionality
 *
 * @returns {JSX.Element} A search form with input field and submit button
 */
export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  /**
   * Handles form submission and navigates to search results
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = query.trim();

    if (trimmed.length < 2) return;

    const nextParams = new URLSearchParams(params.toString());
    nextParams.set("search", trimmed);
    router.push(`${pathname}?${nextParams.toString()}`);
  };

  const isDisabled = query.trim().length < 2;

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto flex w-4/5 items-center"
    >
      <div className="absolute left-0 flex items-center pl-2">
        <Search className="h-5 w-5 text-gray-500" />
      </div>

      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search (Enter two characters) ..."
        className="w-full rounded-md bg-gray-200 py-6 pl-10 pr-20 placeholder:text-base placeholder:font-semibold placeholder:text-gray-500"
      />

      <Button
        type="submit"
        disabled={isDisabled}
        className="
          absolute right-0 rounded-sm rounded-l-none cursor-pointer bg-primary px-3 py-6 text-lg font-bold text-white"
      >
        search
      </Button>
    </form>
  );
}
