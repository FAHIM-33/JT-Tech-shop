import axios from "axios";
import { useEffect, useState } from "react";
import Comm from "./Comm";

const Comments = () => {
    let [comm, setComm] = useState([])
    useEffect(() => {
        axios.get('/comments.json')
            .then(data => setComm(data.data))
    }, [])
    return (
        <section className="mt-12">
            <div className="flex items-center justify-center text-gray-300">
                <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2 w-full">Our contributors</h2>

            </div>
            <h2 className="text-center lg:text-3xl md:text-2xl text-base text-gray-300 underline">Leading tech companies comment about us</h2>
            <div className="grid lg:grid-cols-2 gap-4 py-8 lg:px-12 px-2">
                {
                    comm?.map(obj => <Comm
                        key={obj.id}
                        data={obj}
                    ></Comm>)
                }
            </div>

        </section>
    );
};

export default Comments;