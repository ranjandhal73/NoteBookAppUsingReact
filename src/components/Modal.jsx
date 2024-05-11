import React, {useContext, useState} from 'react'
import {createPortal} from 'react-dom'
import { NoteContext } from '../context/note-context';


function Modal({setModalShowing}) {
    const modalToShwo = document.getElementById('modal');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const {note, addToNote} = useContext(NoteContext);

    const AddNoteToContext = () =>{
        const newNote = {id: Math.random(),title,desc}
        addToNote(newNote);
        setTitle('');
        setDesc('');
    }

  return createPortal(
    <div>
        <div className='absolute top-[30%] left-[35%] bg-gray-600 px-[6rem] py-[4rem]'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='font-bold text-xl'>Add New Note</h1>
                <label className='block'>
                    New Title:
                    <input 
                        className='border-2' 
                        type="text" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </label>
                <label className='block py-4' >
                    New Desc:
                    <input 
                        className='border-2' 
                        type="text" 
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                </label>
                <div className='flex gap-4'>
                    <button onClick={AddNoteToContext} className='bg-green-700 text-white font-bold px-3 py-1'>Add NoteBook</button>
                    <button onClick={()=>setModalShowing(false)} className='bg-red-700 text-white font-bold px-3 py-1'>Close</button>
                </div>
            </div>
        </div>
    </div>,modalToShwo
  );
}

export default Modal