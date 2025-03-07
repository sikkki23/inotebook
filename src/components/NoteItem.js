import React, {useContext  } from 'react' 
import noteContext from '../context/notes/noteContext';


function NoteItem(props) {
  const context = useContext(noteContext);
  const {deleteNote} = context;

 const {note,updateNote} = props;
  return (
    <div className='col-md-3'>
      <div className='card'>
      <div className='card-body'>
        <div className="d-flex align-items-center" >
         <h5 className='card-title'> {note.title}</h5>
              <i className="fi fi-rr-trash mx-2" onClick={() => {deleteNote(note._id);  props.showAlert("Deleted Note", "success")} } style={{cursor: 'pointer'}}></i>
              <i className="fi fi-rr-edit mx-2"  onClick={() => {updateNote(note)}}  style={{cursor: 'pointer'}}></i>
        </div>
        <p className='card-text'>{note.description}</p>
        
        </div>
        </div>
    </div>
  )
}

export default NoteItem
