
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';
import { useState } from 'react';

const MyCart = () => {
    let { data } = useLoaderData()
    let [cart, setCart] = useState(data)


    return (
        <div className='my-12'>
            <h1 className='text-5xl text-center text-mid'>Your Cart</h1>
            {
                cart.length > 0 ?
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg p-4 lg:p-8  lg:w-4/5 mx-2 lg:mx-auto border-2 border-low'>
                        {
                            cart.map(obj => <CartCard
                                key={obj._id}
                                data={obj}
                                cart={cart}
                                setCart={setCart}
                            ></CartCard>)
                        }
                    </div>
                    :
                    <h1 className='text-4xl text-center text-white bg-red-600 mt-12 p-4 w-full'>No products Added in cart</h1>
            }

        </div>
    );
};


export default MyCart;