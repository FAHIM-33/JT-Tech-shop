import { useLoaderData } from "react-router-dom";
import './details.css'
import { BsCart3 } from 'react-icons/bs';
import axios from "axios";
import Swal from "sweetalert2";

const Details = () => {
    let { data } = useLoaderData()
    let { _id, name: oldName, brand, url, rating, type, price, discription } = data

    function handleCart() {

        axios.post('https://assignment-10-pied.vercel.app/cart', data, { headers: { "Content-type": "application/json" } })
        .then(() => {
            Swal.fire({
                icon: 'success',
                title:`${oldName} added to cart`,    
                text: 'Added to cart!',
                // footer: 'Product has been Updated'
            })
            
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title:'Could not add to Cart',    
                text: 'It can already exist in cart',
                // footer: ''
            })
        })
    }

    return (
        <section className="mb-12 mt-0">
            <div className="flex flex-col lg:flex-row justify-center gap-2 items-center p-4">
                <figure>
                    <img src={url} alt="" className="w-full lg:w-96 mx-auto" />
                </figure>
                <div>
                    <h1 className="text-center text-5xl text-mid">{oldName}</h1>
                    <button onClick={handleCart} className="flex items-center justify-center gap-4 btn  bg-amber-400 w-full mx-auto mt-4 p-4 rounded-lg text-xl"><BsCart3></BsCart3> Add to cart</button>
                </div>
            </div>

            <table className="text-start border border-mid mx-auto">
                <tr>
                    <th>Brand</th>
                    <td>{brand}</td>
                </tr>
                <tr>
                    <th>Model name</th>
                    <td>{oldName + " by " + brand}</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>{type}</td>
                </tr>
                <tr>
                    <th>Public Rating</th>
                    <td>{rating}/5</td>
                </tr>
                <tr>
                    <th>Price(USD)</th>
                    <td>$ {price}</td>
                </tr>
                <tr>
                    <th>Discription</th>
                    <td>{discription}</td>
                </tr>
                <tr>
                    <th>Product ID</th>
                    <td>{_id}</td>
                </tr>
            </table>

        </section>
    );
};

export default Details;