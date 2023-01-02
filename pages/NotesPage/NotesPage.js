import React from 'react';
import NotesList from "../../components/NotesList/NotesList";
import { useSelector} from "react-redux";
import { getAllNotes } from '../../features/notes/noteSlice';

const NotesPage = () => {
  const notes = useSelector(getAllNotes);
  return (
    <NotesList notes = {notes} />
  )
}

export default NotesPage;
