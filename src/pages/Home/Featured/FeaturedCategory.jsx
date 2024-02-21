import SecHead from "../../../Components/SecHead";

const FeaturedCategory = () => {

    const categories = [
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png',
            title: "Mobile Phone"
        },
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png',
            title: "TV"
        },
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png',
            title: "Smart Watch"
        },
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png',
            title: "Headphone"
        },
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/earbuds-48x48.png',
            title: "Earbud"
        },
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png',
            title: "Drone"
        },
        {
            img: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/home-appliances-48x48.png',
            title: "Home appliance"
        },
    ]

    return (
        <section className="mt-12">
            <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2">Featured category</h2>
            <div className="flex justify-center gap-4 my-4">
                {
                    categories.map((obj, idx) => <div
                        key={idx}
                        className="p-4 bg-fade text-center w-36 rounded-md"
                    >
                        <img src={obj.img} className="mx-auto mb-2" alt={obj.title} />
                        <p className="whitespace-nowrap">{obj.title}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default FeaturedCategory;