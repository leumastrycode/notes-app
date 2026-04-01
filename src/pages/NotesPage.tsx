import type { Note } from "../types/note"

function NotesPage({
    notes,
    goToAdd,
    deleteNote,
}: {
    notes: Note[]
    goToAdd: () => void
    deleteNote: (id: number) => void
}) {
    return (
        <div className="min-h-screen flex justify-center bg-zinc-900 p-6">
            <div className="w-full max-w-xl">
                <h1 className="text-center text-4xl font-bold text-stone-400 pt-5">
                    Notes App
                </h1>

                <button onClick={goToAdd}>Add Note</button>

                <div className="space-y-3">
                    {notes.map((note) => (
                        <div key={note.id} className="bg-white p-4 rounded-xl">
                            <h3 className="font-semibold">{note.title}</h3>
                            <p className="text-gray-600">{note.content}</p>
                            <button
                                onClick={() => deleteNote(note.id)}
                                className="text-red-500 text-sm mt-2"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NotesPage