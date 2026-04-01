import { useState } from "react"

function AddPage({
    addNote,
    goBack,
}: {
    addNote: (title: string, content: string) => void
    goBack: () => void
}) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSave = () => {
        addNote(title, content)
        goBack()
    }

    return (
        <div className="min-h-screen flex justify-center bg-zinc-900 p-6">
            <div className="w-full max-w-xl flex flex-col gap-4">

                <h1 className="text-center text-4xl font-bold text-stone-400 pt-5">
                    Notes App
                </h1>

                <p className="text-[13px] text-gray-300">
                    Simple Diary Website
                </p>

                <input
                    className="w-full rounded-[12px] py-2 px-3 bg-gray-100 placeholder:text-[12px]"
                    placeholder="Input your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="w-full rounded-[12px] px-3 py-3 bg-gray-100 placeholder:text-[12px]"
                    placeholder="Write your note..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button
                    onClick={handleSave}
                    className="w-1/3 mb-5 bg-stone-500 text-white py-2 rounded-lg"
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default AddPage
