import  React, { useContext,useEffect }  from 'react'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes'
import AddNote from './AddNote';


const Home = (props) => {
//  const context = useContext(noteContext);
 // const {notes,setNotes} = context;
 const {showAlert} = props;
 const context = useContext(noteContext);
  const {notes,setNotes} = context;


  return (
    <div>
     
       <Notes showAlert={showAlert}/>
    </div>
  );
}

export default Home
