import { forwardRef } from "react";
import { Button, SidebarButton, SidebarTitle, SidebarList, Sidebar, ListItem } from "../assets/tailwind-classes";

const ProjectSideBar = forwardRef(function ProjectSideBar({onCreateProject, projects, onSelectedProject, selectedProjectId}, ref) {
    console.log(projects)
    return(
        <>
        <Sidebar>
            <SidebarTitle>Your Projects</SidebarTitle>
                <Button onClick={onCreateProject}>
                    Add project
                </Button>
            <SidebarList>
             {projects.map((project) => (
                <ListItem key={project.id}>
                    <SidebarButton onClick={() => onSelectedProject(project.id)}>{project.title}</SidebarButton>
                </ListItem>
            ))}
            </SidebarList>
        </Sidebar>
        </>
    );
});

export default ProjectSideBar