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
        <div className="min-h-screen flex justify-center bg-zinc-950 p-6">
            <div className="w-full max-w-xl">

                <div className="w-full flex flex-col justify-center align-center">
                    <h1 className="text-center text-4xl font-bold text-stone-400 pt-5">
                        Notes App
                    </h1>

                    <p className="text-center mt-3 text-gray-400 italic text-[14px]">
                        Your website Note
                    </p>

                    <button className="w-1/6 mx-auto my-10 mb-5 bg-stone-700 text-[13px] text-gray-300 py-2 rounded-[25px]"
                        onClick={goToAdd}>
                        Add Note
                    </button>
                </div>



                <div className="mt-10 space-y-5 p-4 border border-stone-800 rounded-xl">
                    {notes.map((note) => (
                        <div key={note.id} className="w-full min-w-0 flex flex-col justify-start items-end bg-zinc-900 p-4 rounded-[6px]">

                            <div className="w-full flex flex-col justify-center items-start">
                                <h3 className="py-2 text-white text-[17px] font-semibold">{note.title}</h3>
                                <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere] text-gray-400 text-[14px]">{note.content}</p>
                            </div>

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