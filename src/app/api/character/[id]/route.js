import { readCharacters } from "../readWrite";

export async function GET(req, { params }) {
  const { id } = await params;
  if (!id || typeof id !== "string" || !id.trim()) {
    return new Response("`id` is required", { status: 400 });
  }
  const characters = await readCharacters();
  return Response.json({ ok: true, data: characters[id.trim()] });
}
