import { useState } from "react";
import axios from "axios";

async function add(title: string, description: string) {
    try {
        await axios.post("http://localhost:3001/todos", {
            title,
            description
        });
        window.alert("Todo added successfully");
        window.location.reload();
    } catch (error) {
        console.log("Error adding todo:", error);
        window.alert("Error adding todo. Please try again later.");
    }
}


const InputBox = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    return <div className=" min-w-screen min-h-[95vh] mx-auto my-auto flex justify-center flex-col py-5 gap-4">
        <div className=" flex ">
            <div>
                <label className=" mx-5 text-2xl font-semibold ">Title</label>
            </div>

            <textarea className=" ml-[79px] border-2 border-slate-500  rounded-md p-3 w-[50vw] h-[50px]" placeholder="Enter title ..." onChange={(e) => { setTitle(e.target.value) }} />
        </div>

        <div className=" flex ">
            <div>
                <label className="mx-5 text-2xl font-semibold ">Description</label>
            </div>

            <textarea className="  w-[50vw] border-2 border-slate-500  rounded-md p-3  h-[175px]" placeholder="Write your description here..." onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-[10rem]" onClick={async()=>add(title,description)}>ADD</button>
        </div>

    </div>
}

export default InputBox
