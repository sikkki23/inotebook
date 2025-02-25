import  React, { useContext,useEffect }  from 'react'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes'
import AddNote from './AddNote';


function Home() {
//  const context = useContext(noteContext);
 // const {notes,setNotes} = context;

 const context = useContext(noteContext);
  const {notes,setNotes} = context;


  return (
    <div>
     
       <Notes/>
    </div>
  );
}

export default Home
