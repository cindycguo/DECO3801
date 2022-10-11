import React from "react";

function NoteEdit({ editData, editChangeHandler, editSaveHandler, editChancelHandler}) { 
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <input 
        type="text" 
        id="title"
        name="title"
        value={editData.title}
        placeholder="Title" 
        onChange={editChangeHandler}
        autoFocus 
      ></input>
      <textarea
        id="content"
        name="content"
        cols="10"
        rows="5"
        value={editData.text}
        placeholder="Create a new note here..."
        onChange={editChangeHandler}
      ></textarea>
      <div className="note__footer">
        <button className="note__cancel" onClick={editChancelHandler}>Cancel</button>
        <button className="note__save" onClick={editSaveHandler}>Save</button>
      </div>
    </div>
  );
}

export default NoteEdit;