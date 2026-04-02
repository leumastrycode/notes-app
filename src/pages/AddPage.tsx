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
            <div className="w-full max-w-xl flex flex-col items-start gap-4">

                <h1 className="w-full text-center text-4xl font-bold text-stone-400 pt-5">
                    Notes App
                </h1>


                <div className="w-full flex flex-col justify-center mt-7 p-5 gap-4 border border-stone-800 rounded-xl">
                    <p className="text-[13px] text-gray-300">
                        Write your story
                    </p>

                    <input
                        className="w-full rounded-[10px] py-2 px-3 bg-gray-100 placeholder:text-[12px]"
                        placeholder="Input your title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="w-full rounded-[10px] px-3 py-3 bg-gray-100 placeholder:text-[12px] resize-none overflow-hidden"
                        placeholder="Write your note..."
                        onInput={(e) => {
                            const el = e.currentTarget;
                            el.style.height = "auto";
                            el.style.height = el.scrollHeight + "px";
                        }}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <div className="w-full flex flex-row gap-5">
                        <button
                            onClick={handleSave}
                            className="w-1/4 bg-stone-500 text-white py-2 rounded-lg"
                        >
                            Save
                        </button>

                        <button
                        onClick={goBack}
                            className="text-white w-1/4 bg-stone-500 text-white py-2 rounded-lg">
                            Cancel
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AddPage
