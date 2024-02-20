import axios from 'axios';
import pt from 'prop-types'
import { BsCart3 } from 'react-icons/bs';
import Swal from 'sweetalert2';

const CartCard = ({ data, cart, setCart }) => {
    let { _id, name, brand, url, rating, type, price } = data


    function handleDelete(){

        axios.delete(`https://assignment-10-pied.vercel.app/cart/${_id}`)
        .then(({data})=>{
            if(data.deletedCount>0){
                Swal.fire({
                    icon: 'success',
                    title:'Deteled!',    
                    text: 'Item Deleted Succesfully',
                    footer: `${name} has been deleted`
                })
                let remaining = cart.filter(obj => obj._id !== _id)
                setCart(remaining)
            }
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title:'Error!',    
                text: 'Could not delete item.',
            })
        })
    }

    return (
        <div>
            <div className="rounded-md overflow-hidden bg-fadegray pt-2">
                <figure className=''>
                    <img src={url} alt="" className="mx-auto h-60 w-72 object-center object-contain" />
                </figure>
                <h1 className="text-2xl p-2 text-center bg-mid text-white mt-2">{name}</h1>
                <div className="flex my-2   ">
                    <p className=" pl-2 text-low ">{type} by</p>
                    <p className="  px-2 flex-grow text-mid">{brand}</p>
                    <p className=" text-amber-400 px-2 text-end font-semibold ">{rating}/5</p>
                </div>
                <p className="text-3xl pr-2 text-end font-semibold text-mid my-4">$ {price}</p>
                <button onClick={handleDelete} className="btn bg-red-600 text-white w-3/4 flex justify-center items-center gap-2 rounded-md mb-3 p-3 font-semibold mx-auto"> <BsCart3 className='text-xl'></BsCart3> Delete</button>
            </div>
        </div>
    );
};
CartCard.propTypes = {
    data: pt.object,
    cart: pt.array,
    setCart: pt.func,
}
export default CartCard;