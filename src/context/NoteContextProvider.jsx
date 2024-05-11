import React, {useState} from 'react'
import { NoteContext } from './note-context'

function NoteContextProvider({children}) {
    const [notes, setNotes] = useState([])

    const addNotesHandler = (note) =>{
        setNotes((prevNote)=>[{note}, ...prevNote])
    }

    const removeNoteHandler = (id) =>{
        setNotes((prevNotes)=>prevNotes.filter(item => item.note.id !== id ))
    }

    const noteContextValue = {
        note:notes,
        addToNote: addNotesHandler,
        removeFromNote: removeNoteHandler
    }

  return <NoteContext.Provider value={noteContextValue}>
            {children}
    </NoteContext.Provider>
}
export default NoteContextProvider