
const Banner = () => {
    return (
        <section className="relative">
            <img src="https://i.ibb.co/ftccZm8/earth.jpg" className="h-[600px] w-full object-cover object-center" alt="banner  Image" />
            <div className="absolute top-10 w-full p-4 text-white text-5xl">
                <div className=" justify-center mb-8 flex items-center">
                    <img src="/pngwing.com(1).png" alt="" />
                    <h1 className="font-bold">Tech Shop</h1>
                </div>
                <p className="text-center">Eletronics at your doorstep</p>
            </div>
        </section>
    );
};

export default Banner;