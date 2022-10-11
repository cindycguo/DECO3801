import React from "react";

function CreateNote({ textHandler, saveHandler, cancelHandler,
  titleHandler, inputTitle, inputText }) { 

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <input 
        type="text" 
        id="title"
        value={inputTitle}
        placeholder="Title" 
        onChange={titleHandler}
        autoFocus 
      ></input>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Create a new note here..."
        onChange={textHandler}
        maxLength="1000"
      ></textarea>
      <div className="note__footer">
        {/* <span className="label"></span> */}
        <button className="note__cancel" onClick={cancelHandler}>Cancel</button>
        <button className="note__save" onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default CreateNote;
