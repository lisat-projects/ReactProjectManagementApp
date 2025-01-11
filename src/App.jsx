import ProjectsSidebar from "./components/ProjectsSidebar";
import CreateProject from "./components/CreateProject";
import ProjectsView from "./components/ProjectsView";
import Modal from "./components/Modal";
import { useRef, useState } from "react";

function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const modal = useRef();

  function handleCreateClick() {
    setIsCreating(true);
  }

  function cancelCreate() {
    setIsCreating(false);
  }

  function handleSave(title, description, dueDate) {
    if (title.current.value.trim() === '' || 
    description.current.value.trim() == '' ||
    dueDate.current.value.trim() === ''){
      modal.current.open();
      return;
    }
    
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: []
    }
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsCreating(false);
    setSelectedProject(projects[0]);
  }

  function handleProjectClick(project) {
    setIsCreating(false);
    setSelectedProject(project);
  }

  function handleProjectRemove(project) {
    setProjects((projects) => {
      const index = projects.indexOf(project);
      projects.splice(index, 1);
      return projects;

    });
    setSelectedProject(undefined);
  }

  function handleAddTask(text) {
    let updatedProject = {
      ...selectedProject,
      tasks: [
        ...selectedProject.tasks,
        text
      ]
    }

    projects[projects.indexOf(selectedProject)] = updatedProject;
    setSelectedProject(updatedProject)

  }
  function handleDeleteTask(text) {
    console.log("delete clicked");
    selectedProject.tasks.splice(selectedProject.tasks.indexOf(text), 1);
    let updatedProject = {
      ...selectedProject
    }
    projects[projects.indexOf(selectedProject)] = updatedProject;
    setSelectedProject(updatedProject);
  }

  return (
    <>
    <Modal ref={modal}>
      <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
      <p className="text-stone-500 mb-4">Title, description, and date must all be entered.</p>
    </Modal>
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onCreateClick={handleCreateClick} projects={projects} onProjectSelect={handleProjectClick}></ProjectsSidebar>
      {isCreating ? <CreateProject onCancel={cancelCreate} onSave={handleSave} />
        : <ProjectsView
          onCreateClick={handleCreateClick}
          selectedProject={selectedProject}
          onRemove={handleProjectRemove}
          onAddTask={handleAddTask}
          onRemoveTask={handleDeleteTask} />}
    </main>
    </>
  );
}

export default App;
