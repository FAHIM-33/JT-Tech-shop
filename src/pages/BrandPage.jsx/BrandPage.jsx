import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Ad from "./Ad";
// import Ad from "./Ad";


const BrandPage = () => {
    let { data } = useLoaderData()
    let brand = useParams()
    // console.log(products)

    return (
        <div className=" lg:my-12">
            <h1 className=" text-3xl lg:text-5xl text-mid font-medium bg-fadegray my-4 p-4 text-center"><span className="bg-mid text-amber-400 px-2 py-1 rounded-md">{brand.title}</span> products</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8 lg:p-4 justify-center ">
                {
                    data.length > 0 ?
                        data.map(obj => <Product
                            key={obj._id}
                            data={obj}
                        ></Product>)
                        :
                        <h1 className="lg:col-span-4 text-5xl text-center bg-red-700 text-white p-4 animate-pulse rounded-md">No Products Available</h1>
                }
            </div>

            <div>
                <Ad brand={brand.title}></Ad>
            </div>
        </div>
    );
};

export default BrandPage;