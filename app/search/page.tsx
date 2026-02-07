import type { Metadata } from "next";
import Link from "next/link";
import { SEARCH_INDEX, type SearchDoc } from "@/lib/searchIndex";

export const metadata: Metadata = {
  title: "Search | Simcol Petroleum",
};

// Ensures query-string changes are always reflected (no stale cache behavior)
export const dynamic = "force-dynamic";

type SearchParamsShape = { q?: string | string[] | undefined };

export default async function SearchPage({
  searchParams,
}: {
  // Works whether Next passes a Promise or a plain object
  searchParams: Promise<SearchParamsShape> | SearchParamsShape;
}) {
  const sp = await Promise.resolve(searchParams);

  const rawQ = Array.isArray(sp?.q) ? sp.q[0] : sp?.q;
  const q = (rawQ ?? "").trim().toLowerCase();

  const results: SearchDoc[] =
    q.length === 0
      ? []
      : SEARCH_INDEX.filter((doc) => {
          const haystack = [doc.title, doc.description, ...doc.keywords]
            .join(" ")
            .toLowerCase();

          return haystack.includes(q);
        });

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Search</h1>
        <p className="text-muted-foreground">
          Query: <span className="font-medium">{q || "—"}</span>
        </p>
      </header>

      {q && (
        <p className="text-sm text-muted-foreground">
          {results.length === 0
            ? "No results found."
            : `${results.length} result${results.length === 1 ? "" : "s"} found.`}
        </p>
      )}

      {results.length > 0 && (
        <ul className="space-y-4">
          {results.map((doc) => (
            <li
              key={doc.href}
              className="rounded-xl border p-5 hover:bg-muted/30 transition"
            >
              <Link href={doc.href} className="block space-y-1">
                <h2 className="font-semibold">{doc.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {doc.description}
                </p>
                <span className="text-xs text-primary">{doc.href}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!q && (
        <div className="rounded-xl border p-6">
          <p className="text-sm text-muted-foreground">
            Enter a search term to find pages across the site.
          </p>
        </div>
      )}
    </main>
  );
}