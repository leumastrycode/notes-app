import { useState, useEffect } from "react"
import NotesPage from "./pages/NotesPage"
import AddPage from "./pages/AddPage"

type Note = {
  id: number
  title: string
  content: string
}


function App() {
  const [page, setPage] = useState("home")
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
    }

    setNotes([...notes, newNote])
  }

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };



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
