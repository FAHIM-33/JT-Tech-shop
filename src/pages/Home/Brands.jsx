import axios from "axios";
import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Brands = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        axios.get('/brands.json')
            .then((res) => setData(res.data))
    }, [])

    return (
        <section className="my-12">
            <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2">Choose Brand of your choice</h2>
            <div className="grid p-4 grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    data?.map(card => <BrandCard
                    key={card.id}
                    card={card}
                    ></BrandCard>)
                }
            </div>
        </section>
    );
};

export default Brands;