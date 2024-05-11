import React, {useContext} from 'react'
import { NoteContext } from '../context/note-context'


function NoteBookList({searchedNotes}) {
    const {note, removeFromNote} = useContext(NoteContext);
    const filteredData = searchedNotes.trim().length > 0 ? note.filter((item)=>(
        item.note.title.toLowerCase().includes(searchedNotes) || item.note.desc.toLowerCase().includes(searchedNotes)
    )): note;

  return (
    <div className='ml-[2rem] w-fit'>
        <h1 className='font-bold text-2xl p-3 shadow-md'>Note List:</h1>
        <div className=' w-fit'>
            {filteredData.map((item)=>(
                <div key={item.note.id} className='border-2 shadow-md shadow-gray-300 flex gap-6 mb-2 py-3'>
                    <p className='font-bold'>Title: {item.note.title}</p>
                    <p className='font-bold'>Desc: {item.note.desc}</p>
                    <button onClick={()=>removeFromNote(item.note.id)} className='bg-red-700 text-white font-bold px-3 py-1'>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NoteBookList;