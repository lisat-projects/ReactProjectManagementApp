import Input from "./Input"
import { useRef } from "react";

export default function CreateProject({onCancel, onSave}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={() => onSave(title, description, dueDate)} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input label="Title" ref={title}></Input>
            <Input label="Description" isTextArea ref={description}></Input>
            <Input label="Due Date" type=
            "date" ref={dueDate}></Input>
        </div>
    </div>
}