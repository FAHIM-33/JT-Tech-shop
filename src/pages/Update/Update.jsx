import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    let { data } = useLoaderData()
    let { _id, name: oldName, brand, url, rating, type, price, discription } = data
    let nav = useNavigate()
    function handleUpdate(e) {
        e.preventDefault()
        let form = e.target;
        const name = form.name.value;
        let brand = form.brand.value;
        const url = form.url.value;
        const type = form.type.value;
        const price = form.price.value;
        const discription = form.discription.value;
        const rating = form.rating.value;
        brand = brand.charAt(0).toUpperCase()+brand.slice(1)

        let newData = {
            name: name,
            brand: brand,
            url: url,
            type: type,
            price: price,
            discription: discription,
            rating: rating,
        }

        axios.put(`https://assignment-10-pied.vercel.app/product/${_id}`, newData, { headers: { "Content-type": "application/json" } })
            .then(({ data }) => {
                data.modifiedCount &&
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Updated succesfully!',
                    footer: 'Product has been Updated'
                })
                nav(-1)
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Try again'
                })
            })



    }

    return (
        <div className="pb-12">
            <h2 className="text-4xl text-center mt-12 font-semibold text-low">Update {oldName}</h2>
            <form onSubmit={handleUpdate} className="border border-low lg:p-4 rounded-lg m-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Product name:</label>
                        <br />
                        <input type="text" placeholder="Product Name" name="name" defaultValue={oldName} />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Brand:</label>
                        <br />
                        <input type="text" placeholder="Brand" name="brand" defaultValue={brand} />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Image URL:</label>
                        <br />
                        <input type="text" placeholder="URL" name="url" defaultValue={url} />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Product type:</label>
                        <br />
                        <input type="text" placeholder="Type" name="type" defaultValue={type} />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="price">Price:</label>
                        <br />
                        <input type="text" placeholder="Price" name="price" defaultValue={price} />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="rating">Rating:</label>
                        <br />
                        <input type="text" placeholder="Rating" name="rating" defaultValue={rating} />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="discription">Short discription:</label>
                        <br />
                        <textarea name="discription" placeholder="Write short discription" className="w-full h-32 bg-fadegray p-3 rounded-md" defaultValue={discription}></textarea>
                    </div>


                </div>
                <input type="submit" value="Submit" className="bg-amber-400 block w-1/2 mx-auto text-xl font-medium my-4 " />
            </form>
        </div>
    );
};

export default Update;