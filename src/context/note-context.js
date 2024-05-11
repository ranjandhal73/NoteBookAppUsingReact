import { createContext } from "react";

export const NoteContext = createContext({
    note: [],
    addToNote: (note)=>{},
    removeFromNote: (id) =>{},
    updateNote: (id) =>{},
})