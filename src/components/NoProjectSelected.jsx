import image from "../assets/no-projects.png";
export default function NoProjectSelected({addNewProjectHandler}){
    return (
        <div className="flex flex-col items-center mt-32 text-center w-3/4">
            <img src={image} alt="no-projects" className="w-20"/>
            <h2 className="mt-3 text-xl font-bold text-stone-600">Please select a project</h2>
            <p className="mt-3 text-stone-500">Select a project or get started with a new one</p>
            <p><button onClick={addNewProjectHandler} className="mt-3 text-stone-100 hover:font-bold border-2 p-1 rounded bg-stone-600">Create New Project</button></p>
        </div>
    );
}