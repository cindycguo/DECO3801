import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";    //npm install uuidv4
import "./css/Note.css";
import Note from "./Note"
import CreateNote from "./CreateNote"; 
import NoteEdit from "./NoteEdit";

function NoteContent() {

  const [allNotes, setNotes] = useState([]);
  const [inputTitle, setInputTitle] = useState("")
  const [inputText, setInputText] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({
    title: "",
    text: "",
  })

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title: inputTitle,
        text: inputText,
      },
    ]);
    //clear the textarea
    setInputText("");
    setInputTitle("");
  };

  const cancelHandler = () => {
    setInputTitle("");
    setInputText("");
  }

  const deleteNote = (id) => {
    const filteredNotes = allNotes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const editHandler = (e, note) => {
    e.preventDefault();
    setEditId(note.id);

    const noteData = {
      id: note.id,
      title: note.title,
      text: note.text,
    }
    setEditData(noteData);
  }

  const editChangeHandler = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newData = { ...editData };
    newData[fieldName] = fieldValue;
    setEditData(newData); 
  }

  const editSaveHandler = (e) => {
    const edited = {
      id: editId,
      title: editData.title,
      text: editData.text,
    }
    const newNotes = [ ...allNotes];
    const index = allNotes.findIndex((note) => note.id === editId);
    newNotes[index] = edited;
    setNotes(newNotes);
    setEditId(null);
  }

  const editChancelHandler = () => {
    setEditId(null);
  }

  return (
    <div>
      <div className="search">
        <input type="text" placeholder='Search...' 
          onChange={(event) => {setSearchTerm(event.target.value)}} />
      </div>
      <div className="noteContent">
        <CreateNote 
          textHandler={textHandler}
          saveHandler={saveHandler}
          cancelHandler={cancelHandler}
          titleHandler={titleHandler}
          inputTitle={inputTitle}
          inputText={inputText}
        />
        {allNotes.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((note) => (
          <Fragment>
            {editId === note.id ? (
              <NoteEdit
                editData={editData}
                editChangeHandler={editChangeHandler}
                editSaveHandler={editSaveHandler}
                editChancelHandler={editChancelHandler}
              />
            ) : (
              <Note
                key={note.id}
                note={note}
                title={note.title}
                text={note.text}
                deleteNote={deleteNote}
                editHandler={editHandler}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default NoteContent;