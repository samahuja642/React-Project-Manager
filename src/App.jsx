import ProjectSideBar from './components/ProjectSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import {useState,useRef} from 'react';
import SelectedProject from './components/SelectedProject';
function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });
  function handleStartAddProject(){
    setProjectState((prev)=>{
      return {
        ...prev,
        selectedProjectId: null
      }
    })
  }
  function saveHandler(data){
    setProjectState((prev)=>{
      return {
        ...prev,
        selectedProjectId:undefined,
        projects : [...prev.projects,{...data,id: Math.floor(Math.random()*10000)}]
      }
    })
  }
  function selectProject(project){
    setProjectState((prev)=>{
      return {
       ...prev,
        selectedProjectId: project.id
      }
    })
  }
  const data = projectState.projects.find((ele)=>ele.id===projectState.selectedProjectId)
  return (
    <>
      <main className='h-screen flex gap-8'>
        <ProjectSideBar addNewProjectHandler={handleStartAddProject} projects={projectState.projects} clickHandler={selectProject}/>
        {projectState.selectedProjectId===null && <NewProject saveHandler={saveHandler}/>}
        {projectState.selectedProjectId===undefined && <NoProjectSelected addNewProjectHandler={handleStartAddProject}/>}
        {projectState.selectedProjectId && <SelectedProject data={data}></SelectedProject>}
      </main>
    </>
  );
}

export default App;
