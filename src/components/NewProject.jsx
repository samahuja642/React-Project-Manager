import Input from './Input.jsx';
import {useRef,forwardRef} from 'react';
import Modal from './Modal.jsx';
const NewProject = function NewProject({saveHandler},refs){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    let msg = '';
    const modalRef =useRef();
    function saveInput(){
        if(title.current.value.trim() ==='' || description.current.value.trim() ==='' || dueDate.current.value.trim() ===''){
            msg = "Please Enter Value, Can't be empty.";
            modalRef.current.setMessage(msg);
            modalRef.current.open();
        }
        else saveHandler({title:title.current.value, description:description.current.value, dueDate:dueDate.current.value})
    }
    return (
        <>
        <Modal ref={modalRef}></Modal>
        <div className='w-1/2 mt-20 py-5'>
            <menu className="flex items-center justify-end gap-4 my-1">
                <li><button className='bg-cyan-500 hover:bg-cyan-600 rounded px-4 py-1' onClick={saveInput}>Save</button></li>
                <li><button className='bg-red-500 hover:bg-red-600 rounded px-4 py-1'>Cancel</button></li>
            </menu>
            <div>
                <Input labelValue="Title" isTextArea={false} ref={title}></Input>
                <Input labelValue="Description" isTextArea={true} ref={description}></Input>
                <Input labelValue="Due Date" isTextArea={false} ref={dueDate} type="date"></Input>
            </div>
        </div>
        </>
    );
}
export default NewProject;