import { forwardRef } from "react";

const styles = {
    labelField: "mr-2 text-sm font-bold uppercase text-stone-600",
    inputField: "bg-stone-200 text-stone-600 w-full border-solid border-stone-300 border-b-2 rounded-sm p-1 focus:outline-none focus:border-stone-600"
}
const Input = forwardRef(function Input({labelValue, isTextArea, ...props},ref){
    return (
        <div className="flex flex-col">
            <label className={styles.labelField}>{labelValue}:</label>
            {isTextArea?<textarea {...props} className={styles.inputField} ref={ref}/>:<input {...props} className={styles.inputField} ref={ref}/>}
        </div>
    );
});
export default Input;