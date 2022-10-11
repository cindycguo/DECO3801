import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from '@mui/icons-material/Edit';
import "./css/Note.css";

function Note({ note, title, text, deleteNote, editHandler}) {
  return (
    <div className="note">
      <strong>{title}</strong>
      {text}
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
      <EditIcon
          className="note__edit"
          onClick={(event) => editHandler(event, note)}
          aria-hidden="true"
      ></EditIcon>
      <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(note.id)}
          aria-hidden="true"
      ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}

export default Note;