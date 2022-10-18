import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import ShowSessions from './ShowSessions';
import AddSession from './AddSession';
import SessionDetail from './SessionDetails';
import NoteContent from "./NoteContent";
import UploadSessionRecording from './UploadSessionRecording';


function PostSessions(props) {

  return (

    <ContentHolder>
      <h1 className="header">Post-Session Review</h1>
      <ShowSessions></ShowSessions>
      <NoteContent />
    </ContentHolder>
  );
}

PostSessions.propTypes = {
  window: PropTypes.func,
};

export default PostSessions;