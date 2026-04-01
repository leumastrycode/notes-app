import { useState } from "react"
import NotesPage from "./pages/NotesPage"
import AddPage from "./pages/AddPage"

type Note = {
  id: number
  title: string
  content: string
}


function App() {
  const [page, setPage] = useState("home")
  const [notes, setNotes] = useState<Note[]>([])

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
    }

    setNotes([...notes, newNote])
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <>
      {page === "home" && (
        <NotesPage
          notes={notes}
          goToAdd={() => setPage("add")}
          deleteNote={deleteNote}
        />
      )}

      {page === "add" && (
        <AddPage
          addNote={addNote}
          goBack={() => setPage("home")}
        />
      )}
    </>
  )

}

export default App
