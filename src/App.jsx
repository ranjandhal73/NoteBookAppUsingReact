import AddNoteBook from "./components/AddNoteBook"
import NoteContextProvider from "./context/NoteContextProvider"

function App() {

  return (
    <NoteContextProvider>
      <AddNoteBook />
    </NoteContextProvider>
  )
}

export default App
