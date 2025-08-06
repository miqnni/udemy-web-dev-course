import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

export default function CreateArea(props) {
  const { onAddNote } = props;

  const defaultNewNoteData = {
    title: "",
    content: "",
  };

  const [newNoteData, setNewNoteData] = useState(defaultNewNoteData);
  const [isTextAreaClicked, setIsTextAreaClicked] = useState(false);

  function validateNoteData(noteData) {
    return (
      noteData.title &&
      noteData.title.length > 0 &&
      noteData.content &&
      noteData.content.length > 0
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNoteData({ ...newNoteData, [name]: value });
  }

  function handleSubmit(e) {
    if (!validateNoteData(newNoteData)) {
      // v1
      console.error("Tried to add an empty note.");
      return;

      // v2
      // throw new Error("Tried to add an empty note.");
    }

    onAddNote(newNoteData);
    setIsTextAreaClicked(false);
    setNewNoteData(defaultNewNoteData);

    e.preventDefault();
  }

  function handleTextAreaClick() {
    setIsTextAreaClicked(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isTextAreaClicked && (
          <input
            name="title"
            value={newNoteData.title}
            placeholder="Title"
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          value={newNoteData.content}
          placeholder="Take a note..."
          rows={isTextAreaClicked ? 3 : 1}
          onChange={handleChange}
          onClick={handleTextAreaClick}
        />
        <Zoom in={isTextAreaClicked}>
          <Fab disabled={!validateNoteData(newNoteData)} type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
