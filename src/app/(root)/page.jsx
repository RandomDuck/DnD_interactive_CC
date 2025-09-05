import Link from "next/link";
import { revalidatePath } from "next/cache";

async function getIds() {
  // Relative fetch works on the server for route handlers
  const res = await fetch("http:localhost:3000/api/ids", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load IDs");
  return res.json();
}

export default async function Home() {
  const { ids } = await getIds();

  async function createId(formData) {
    "use server";
    const id = String(formData.get("id") || "").trim();

    const res = await fetch(`http:localhost:3000/api/ids`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error("Could not create ID");
    }

    // Refresh the homepage list after creating a new one
    revalidatePath("/");
  }

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Characters</h1>
        <p className="text-sm text-gray-500">
          Pick an ID to view its page, or create a new one.
        </p>
      </header>

      {/* Create new ID */}
      <section className="rounded-2xl border p-4">
        <form action={createId} className="flex items-center gap-3">
          <input
            name="id"
            placeholder="new-id"
            className="flex-1 rounded-xl border px-3 py-2 outline-none focus:ring"
          />
          <button
            type="submit"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50 active:scale-[.98]"
          >
            Create
          </button>
        </form>
      </section>

      {/* Available IDs */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Available IDs</h2>
        <div className="flex flex-wrap gap-3">
          {ids.length === 0 ? (
            <span className="text-gray-500">No IDs yet—create one above.</span>
          ) : (
            ids.map((id) => (
              <div key={id}>
                <Link
                  key={id}
                  href={`/${id}`}
                  className="rounded-xl border px-4 py-2 hover:bg-gray-50 active:scale-[.98]"
                >
                  {id}
                </Link>
                <br />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
