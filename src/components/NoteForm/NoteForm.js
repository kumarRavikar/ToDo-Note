import {  useEffect, useState } from "react";
import "./NoteForm.css";
//import { addNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import { useDispatch,useSelector } from "react-redux";
import { notificationAction, notificationSelector } from "../../redux/reducers/notificationReducer";
function NoteForm() {
  const [noteText, setNoteText] = useState("");
 const dispatch = useDispatch()
 const message = useSelector(notificationSelector);
 useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(notificationAction());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(noteActions.addNote(noteText))
    setNoteText("");
  };
 
  return (
    <div className="container">
      {message &&
      <div class="alert alert-success" role="alert">
           {message}
        </div>} 
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
