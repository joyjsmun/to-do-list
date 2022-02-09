import React, { useState } from "react";
import {useForm} from "react-hook-form";

/* function ToDoList(){
    const [toDo,setToDo] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget:{value},
        } = event;
        setToDo(value);
    };
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(toDo);
    };
    return (
       <div>
           <form onSubmit={onSubmit}>
           <input onChange={onChange} value={toDo} placeholder="What is your todo" />
            <button>Add</button>
            </form>
       </div>
    );
} 
 */

function ToDoList(){
    const {register,handleSubmit,formState} = useForm();
    const onValid = (data:any) => {
        console.log(data);
    }
    console.log("error is...",formState.errors);
    return <div>
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register("Email",{required:"no EMAIL"})} placeholder="Email" />
            <input {...register("Phone", { required: "PASSWORD IS REQUIRED", 
            minLength: {
                value:5,
                message:"Your password is too short",
            } })} placeholder="Phone" />
            <button>Add</button>
        </form>
    </div>
}

export default ToDoList;