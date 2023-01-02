import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNewNote } from './noteSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify';

const AddNoteForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    noteTitle: "",
    noteContent: ""
  });
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [canSave, setCanSave] = useState(false);

  const onFormDataChange = (event) => {
    event.preventDefault();
    if(event.target.name === 'noteTitle'){
      if(event.target.value.length === 0){
        setTitleError(true);
      } else {
        setTitleError(false);
        setCanSave(true);
      }
    }

    if(event.target.name === 'noteContent'){
      if(event.target.value.length === 0){
        setContentError(true);
      } else {
        setContentError(false);
        setCanSave(true);
      }
    }

    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  const onSaveNoteClicked = () => {
    if(!titleError && !contentError){
      dispatch(addNewNote(formData));
      toast("New Note added successfully");
      setFormData({noteTitle: "", noteContent: ""});
    }
  }

  return (
    <div>
      <section className='note-form-section'>
        <h2 className='my-4 fs-16'>Add New Note</h2>
        <form className='note-form'>
          <div className='form-element'>
            <label htmlFor='noteTitle' className='form-label'>Title:</label>
            <input type = "text" id = "noteTitle" name = "noteTitle" placeholder='Note title here ...' onChange={onFormDataChange} className = "form-control" value = {formData.noteTitle} />
            <span className='form-error-text'>{titleError ? "Title can't be empty!" : ""}</span>
          </div>

          <div className='form-element'>
            <label htmlFor='noteContent' className='form-label'>Content:</label>
            <textarea id = "noteContent" name = "noteContent" placeholder='Note content here ...' onChange={onFormDataChange} className = "form-control" rows = "10" value = {formData.noteContent}></textarea>
            <span className='form-error-text'>{contentError ? "Content can't be empty!" : ""}</span>
          </div>

          <button type = "button" onClick={(onSaveNoteClicked)} className = "btn btn-default" disabled = {!canSave}>Save Note</button>
          <ToastContainer />
        </form>
      </section>
    </div>
  )
}

export default AddNoteForm
