import axios from "axios";
import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAdd = (e) => {
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
        let data = {
            name: name,
            brand: brand,
            url: url,
            type: type,
            price: price,
            discription: discription,
            rating: rating,
        }
        // console.log("Your input data:",data)


        // axios.post('https://assignment-10-pied.vercel.app/product', data, { headers: { "content-type": "application/json" } })
        axios.post('https://assignment-10-pied.vercel.app/product', data, { headers: { "content-type": "application/json" } })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Great!',
                    text: 'Added succesfully!',
                    footer: 'Product has been added'
                })

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
            <h2 className="text-4xl text-center mt-12 font-semibold text-low">Add new product</h2>
            <form onSubmit={handleAdd} className="border border-low lg:p-4 rounded-lg m-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Product name:</label>
                        <br />
                        <input type="text" placeholder="Product Name" name="name" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Brand:</label>
                        <br />
                        <input type="text" placeholder="Brand" name="brand" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Image URL:</label>
                        <br />
                        <input type="text" placeholder="URL" name="url" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Product type:</label>
                        <br />
                        <input type="text" placeholder="Type" name="type" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="price">Price:</label>
                        <br />
                        <input type="text" placeholder="Price" name="price" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="rating">Rating:</label>
                        <br />
                        <input type="text" placeholder="Rating" name="rating" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="discription">Short discription:</label>
                        <br />
                        <textarea name="discription" placeholder="Write short discription" className="w-full h-32 bg-fadegray p-3 rounded-md"></textarea>
                    </div>


                </div>
                <input type="submit" value="Add Product" className="bg-amber-400 block w-1/2 mx-auto text-lg font-medium my-4 " />
            </form>
        </div>
    );
};

export default AddProducts;