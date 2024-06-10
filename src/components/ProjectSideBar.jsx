import Button from "./Button";
import ProjectListItem from "./ProjectListItem.jsx";
export default function ProjectSideBar({projects,addNewProjectHandler,clickHandler}){
    return (
        <aside className="bg-black text-white w-1/4 mt-20 rounded-r-xl px-8 py-8 sm-10">
            <h2 className="mx-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <Button onClick={addNewProjectHandler}>+ Add Project</Button>
            <ul className="mt-6">
                {projects.map(project => <ProjectListItem key={project.id} project={project} clickHandler={clickHandler}/>)}
            </ul>
        </aside>
    );
}