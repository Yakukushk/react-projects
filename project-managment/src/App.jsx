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
        projects: [newTask, ...prev.tasks]
      }
    })
  };

  const handleDeleteTask = () => {};

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
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={() => handleDeleteProject(selectedProject.id)}
      project={selectedProject}
      tasks={selectedProjects.tasks}
    />
  );

  if (selectedProjects.selectedProjectId === null) {
    content = (
      <CreateProject onCancel={handleCancel} onSave={handleCreateProject} />
    );
  } else if (selectedProjects.selectedProjectId === undefined) {
    content = <NoProjectedSelected OnCreateProject={handleAddProject} />;
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
