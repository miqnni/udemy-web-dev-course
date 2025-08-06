import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";
// import notes from "../notes";

export default function App() {
  const [allNotes, setAllNotes] = useState([
    // {
    //   id: uuidv4(),
    //   title: "Sample note",
    //   content: "Sample content",
    // },
  ]);

  function addNote(noteData) {
    setAllNotes([
      ...allNotes,
      {
        id: uuidv4(),
        title: noteData.title,
        content: noteData.content,
      },
    ]);
  }

  function deleteNote(noteId) {
    setAllNotes([...allNotes].filter((note) => note.id !== noteId));
  }

  return (
    <div>
      <Header />
      {/* HTML attirbutes, such as `className` or `onClick`,
      should not go into custom React components.
      See: React properties */}
      {/* Here: `className="note"` was applied
      to the `div` element inside the `Note` component
      and NOT to the `Note` component itself. */}

      <CreateArea onAddNote={addNote} />
      {/* <Note key={1} title="Sample note" content="Sample content" /> */}
      {allNotes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDeleteButtonClicked={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}
