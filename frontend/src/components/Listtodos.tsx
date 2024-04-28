import axios from "axios";
import { useEffect, useState } from "react";

export const Todolist = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3001/todos");
                setList(response.data);
                console.log(list);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>
            loading....
        </div>
    }
    return (
        <div>
            <div className="">
                {list?.map((obj: { title: string; description: string; }) => { return todo(obj?.title, obj?.description) })}
            </div>
        </div>
    );




}

function todo(title: string, description: string) {
    return <div className="flex flex-col gap-5 border-2 border-slate-500">
        <div className=" text-xl font-bold ">
            {title}
        </div>
        <div className="font-light">
            {description}
        </div>
    </div>
}
