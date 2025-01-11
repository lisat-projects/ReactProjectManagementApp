import NoProjectSelected from "./NoProjectSelected"
import Tasks from "./Tasks";

export default function ProjectsView({ onCreateClick, selectedProject, onRemove, onAddTask, onRemoveTask }) {
    return (!selectedProject ? <NoProjectSelected onCreateClick={onCreateClick} />
        : <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {selectedProject.title}
                    </h1>
                    <button onClick={onRemove} className="text-stone-600 hover:text-stone-950">
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{selectedProject.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{selectedProject.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onRemove={onRemoveTask} tasks={selectedProject.tasks}></Tasks>
        </div>
    );
}