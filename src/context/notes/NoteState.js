import React, { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState = (props) => {
 
    // const s1 = {
    //     "name" : "Radhe",
    //     "classs" : "5b"
    // }

  const host = 'http://localhost:5000';
 
  const notesInitial = [];

  const getNotes = async () => {

    const response= await fetch(`${host}/api/notes/fetchallnotes`, {
          method : 'GET',
          headers: {
            'content-type' : 'application/json',
            "auth-token" : localStorage.getItem('token')
          }
    });
    const json = await response.json();
    setNotes(json);
    console.log("This is getNotes ",json);
  }

    const [notes, setNotes] = useState(notesInitial);
    //Add a note
    const addNote = async (title,description,tag) => {
      let bodydata = JSON.stringify({
        title:title,
        description:description,
        tag:tag 
      });
      const response= await fetch(`${host}/api/notes/addnotes`, {
        method : 'POST',
        headers: {
          'content-type' : 'application/json',
          "auth-token" : localStorage.getItem('token')
        },
       body: bodydata
      });
      const note = await response.json();
      setNotes(notes.concat(note));
    }
    // edit a note
    const editNote = async (id, title, description ,tag) => {
      let bodydata = JSON.stringify({
        _id:id,  
        title:title,
        description:description,
        tag:tag
      });
          const response= await fetch(`${host}/api/notes/updatenote/${id}`, {
            method : 'PUT',
            headers: {
              'content-type' : 'application/json',
              "auth-token" : localStorage.getItem('token')
            },
            body: bodydata

      });
      const json = response.json();
      console.log("This is Edited ",json);
      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id===id)
        {
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
      }  
      setNotes(newNotes);

    }
    // delete a note
    const deleteNote = async (id) => {

      const response= await fetch(`${host}/api/notes/deletenote/${id}`, {
        method : 'DELETE',
        headers: {
          'content-type' : 'application/json',
          "auth-token" : localStorage.getItem('token')
        },
       // body: JSON.stringfy({id, title, description ,tag})
      });
      const json = await response.json();
      console.log("This is deleted",json);
      const newNote = notes.filter((note ) => {return note._id !==id; });
      setNotes(newNote);
    }
 
  return (
   // <NoteContext.Provider value = {{state,update}}>
  
        <NoteContext.Provider value ={{notes,addNote,editNote,deleteNote,getNotes}}>
        {props.children}

    </NoteContext.Provider>
  )
}
export default NoteState
