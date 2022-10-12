import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import "./css/NotesPage.css";
import NoteContent from "./NoteContent";

function Notes(props) {

  return (
    <ContentHolder>
      <h1 className="header">My Note</h1>
      <div className="main">
        <NoteContent />
      </div>
    </ContentHolder>
  );
}

Notes.propTypes = {
  window: PropTypes.func,
};

export default Notes;