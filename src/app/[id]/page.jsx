import { Suspense } from "react";
import CharacterPage from "./characterPage";
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/character/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Root({ params }) {
  const { id } = await params;
  const res = getData(id);
  return (
    <Suspense fallback={<div>loading</div>}>
      <CharacterPage id={id} serverData={res} />
    </Suspense>
  );
}
