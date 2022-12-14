import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from '../components/Content';
import "../components/css/NotesPage.css";
import NoteContent from "../components/NoteContent";

function Notes() {

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