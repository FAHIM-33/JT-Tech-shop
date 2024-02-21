import axios from "axios";
import { useEffect, useState } from "react";
import Goal from "./Goal";


const Goalsss = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get('/goals.json')
            .then(res => setData(res.data))
    }, [])


    return (
        <section>
            <div className="flex items-center justify-center text-gray-300 lg:mt-20 mt-8 " data-aos="fade-right">


                <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2 w-full">Goals in mind</h2>

            </div>
            <h2 className="text-center lg:text-3xl md:text-2xl text-base text-gray-300 underline">We Rush to Achieve the Goals!</h2>
            <div className="lg:p-8 p-2 mb-8">
                {
                    data.map(obj => <Goal
                        key={obj.id}
                        data={obj}
                    ></Goal>)
                }
            </div>

        </section>
    );
};

export default Goalsss;