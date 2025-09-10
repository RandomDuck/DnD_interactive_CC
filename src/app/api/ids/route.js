import { readCharacters, writeCharacters } from "../character/readWrite";

export async function GET() {
  return Response.json({ ids: Object.keys(await readCharacters()).sort() });
}

export async function POST(req) {
  const chars = await readCharacters()
  const { id } = await req.json().catch(() => ({}));
  if (!id || typeof id !== "string" || !id.trim()) {
    return new Response("`id` is required", { status: 400 });
  }
  if (chars[id.trim()] !== undefined) {
    return new Response("ID already exists", { status: 409 }); // Conflict
  }
  chars[id.trim()] = { id: id.trim() };
  await writeCharacters(chars)
  return Response.json({ ok: true, id: id.trim() });
}
