import { MainContainer } from "./assets/tailwind-classes";
import CreateProject from "./components/CreateProject";
import NoProjectedSelected from "./components/NoProjectedSelected";
import ProjectSideBar from "./components/ProjectSidebar";

function App() {
  return (
    <>
     <MainContainer>
      <ProjectSideBar/>
      <NoProjectedSelected/>
      {/* <CreateProject/> */}
     </MainContainer>
    </>
  );
}

export default App;
