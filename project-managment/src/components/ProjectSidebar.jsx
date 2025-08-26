import { forwardRef } from "react";
import { Button, SidebarButton, SidebarTitle, SidebarList, Sidebar } from "../assets/tailwind-classes";

const ProjectSideBar = forwardRef(function ProjectSideBar({}, ref) {
    return(
        <>
        <Sidebar>
            <SidebarTitle>Your Projects</SidebarTitle>
            <div>
                <Button>
                    Add project
                </Button>
            </div>
            <SidebarList>

            </SidebarList>
        </Sidebar>
        </>
    );
});

export default ProjectSideBar