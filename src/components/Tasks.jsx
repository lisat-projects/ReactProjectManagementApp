import { list } from "postcss"
import NewTask from "./NewTask"
export default function Tasks({onAdd, onRemove, tasks}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd}></NewTask>
        {tasks.length === 0 ? <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
        : <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task, taskIndex) => 
            <li key={taskIndex} className="flex justify-between my-4">
                <span>{task}</span>
                <button onClick={() => onRemove(task)} className="text-stone-700 hover:text-red-500">Clear</button>
            </li>)}
        </ul>}
    </section>
}