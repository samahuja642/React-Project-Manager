export default function SelectedProject({data}){
    return (
        <div className="flex flex-col w-1/2 h-1/2 mt-20 py-5 justify-center items-center bg-stone-600 rounded-3xl">
            <h1 className="text-2xl font-bold uppercase text-stone-300">{data.title}</h1>
            <p className="text-lg text-stone-300">{data.description}</p>
            <p className="text-stone-300">{data.dueDate}</p>
        </div>
    );
}