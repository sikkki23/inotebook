import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
function About() {

  const context = useContext(noteContext);
  const {notes} = context;

  return (
    <div>
        {/* <h4>This a About {context.notes.title} {context.notes.tag}</h4> */}
        {
            notes?.map((note) => {
            return  note.title
        })
        //   console.log('HH',context.notes) 
          
        
        }
        <h4>This a About</h4>
    </div>
  );
}

export default About
