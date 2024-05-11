import React, { useState, useContext, useEffect } from 'react'
import Modal from './Modal';
import NoteBookList from './NoteBookList';
import { NoteContext } from '../context/note-context';

function AddNoteBook() {
    const [modalShowing, setModalShowing] = useState(false);
    const [searchedNotes, setSearchedNotes] = useState('');
    const {note, addToNote} = useContext(NoteContext);

//    const searchHandler = (e) =>{
//     const searchTerm = e.target.value.toLowerCase();
//     setSearchedNotes(searchTerm);
    
//     const filteredData = note.filter((item) => (
//         item.note.title.includes(searchTerm) || item.note.desc.includes(searchTerm)
//     ))
//     addToNote(filteredData)
//     console.log(filteredData);
//     console.log(filteredData.length);
//    }

  return (
    <>
    <div className='flex flex-col items-center justify-center py-[3rem]'>
        <h1 className='text-2xl font-bold'>NoteBook</h1>
        <label>
            Search Notes:
            <input 
                className='border-2'
                type="text" 
                name="search" 
                placeholder="Search" 
                value={searchedNotes}
                onChange={(e)=>setSearchedNotes(e.target.value.toLowerCase())}
            />
        </label>
        <p>Total Notes: {note.length}</p>
        <p>Showing: {searchedNotes.length}</p>
        <button onClick={()=>setModalShowing(true)}
        className='px-4 py-1 bg-gray-400'>Add New Note</button>
    </div>
        <div>
        <NoteBookList searchedNotes={searchedNotes}/>
        </div>

    {modalShowing && <Modal setModalShowing={setModalShowing}/>}
    </>
    
  )
}

export default AddNoteBook