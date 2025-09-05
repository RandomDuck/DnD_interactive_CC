import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "characters.json");

async function readCharacters() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    // If file doesn't exist, start fresh
    return {};
  }
}

async function writeCharacters(characters) {
  await fs.writeFile(filePath, JSON.stringify(characters, null, 2), "utf8");
}

export { readCharacters, writeCharacters };
