import { readCharacters, writeCharacters } from "./readWrite";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.id) {
      return new Response("Missing character id", { status: 400 });
    }

    const characters = await readCharacters();
    characters[data.id] = data; // update or create
    await writeCharacters(characters);

    return Response.json(characters[data.id]);
  } catch (err) {
    console.error("Failed to save character:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
