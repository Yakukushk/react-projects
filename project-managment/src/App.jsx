import { useState } from "react";
import { MainContainer } from "./assets/tailwind-classes";
import CreateProject from "./components/CreateProject";
import NoProjectedSelected from "./components/NoProjectedSelected";
import ProjectSideBar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [selectedProjects, setSelectedProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setSelectedProject((prev) => {
      const newTask = {
         text: text,
         taskId: Math.random(),
         projectId: prev.selectedProjectId
      }
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks]
      }
    })
  };


  const handleAddProject = () => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (id) => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleCreateProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setSelectedProject((prev) => {
      console.log("Prev debug", prev);
      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleDeleteProject = (id) => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((project) => project.id !== id),
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setSelectedProject(prev => {
      return {
        ...prev,
        tasks: prev.tasks.filter(task => task.taskId !== taskId)
      }
    })
  }

  const handleCancel = () => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const selectedProject = selectedProjects.projects.find(
    (project) => project.id === selectedProjects.selectedProjectId
  );
  
  const selectedProjectTasks = selectedProjects.tasks.filter(
    (task) => task.projectId === selectedProjects.selectedProjectId
  );

  console.log("Task", selectedProjectTasks.map(item => item.text));
  
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={() => handleDeleteProject(selectedProject.id)}
      project={selectedProject}
      tasks={selectedProjectTasks}
    />
  );

  if (selectedProjects.selectedProjectId === null) {
    content = (
      <CreateProject onCancel={handleCancel} onSave={handleCreateProject} />
    );
  } else if (selectedProjects.selectedProjectId === undefined) {
    content = <NoProjectedSelected onCreateProject={handleAddProject} />;
  }
  return (
    <>
      <MainContainer>
        <ProjectSideBar
          onSelectedProject={handleSelectProject}
          projects={selectedProjects.projects}
          onCreateProject={handleAddProject}
        />
        {content}
      </MainContainer>
    </>
  );
}

export default App;
