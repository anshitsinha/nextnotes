import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });

    if (!res.ok) { 
      throw new Error("Failed to load Notes");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const NotesList = async () => {
  const { notes } = await getNotes();

  return (
    <>
      {notes.map((note) => (
        <div className="p-4 border border-pink-200 my-3 flex justify-between gap-5">
          <div>
            <h2 className="font-bold text-2xl"> {note.title}</h2>
            <div> {note.description}</div>
          </div>

          <div className="flex gap-2 items-start">
            <RemoveBtn id={note._id} />
            <Link href={`/editNote/${note._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesList;
