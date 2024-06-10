import Button from './Button';
export default function ProjectListItem({project,clickHandler}){
    return (
        <li key={project.id} className="mx-8">
            <button className="px-6 py-1 text-stone-500 hover:text-stone-400 hover:bg-stone-900 rounded uppercase " onClick={()=>clickHandler(project)}>{project.title}</button>
        </li>
    );
}