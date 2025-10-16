//import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions,notSelector } from "../../redux/reducers/noteReducer";
import "./NoteList.css";
import { useSelector,useDispatch } from "react-redux";
function NoteList() {
    const notes= useSelector(notSelector)
    const disptach = useDispatch()
    // function deleteTime(){
    //  setTimeout(()=>{
    //        disptach(actions.delete())
    //  },5000)
    // }
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>disptach(noteActions.deleteNote(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
