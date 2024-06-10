import { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';
const Modal = forwardRef(function Modal({}, ref) {
    const modal = useRef();
    const message = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                return modal.current.showModal();
            },
            setMessage(msg){
                return message.current.value = msg;
            }
        }
    }
    )
    return createPortal(
        <dialog ref={modal}>
            <h2>Invalid Input</h2>
            <p>{message}</p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})
export default Modal;