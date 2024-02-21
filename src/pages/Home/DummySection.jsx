
const DummySection = () => {
    return (
        <section className="mt-6  grid lg:grid-cols-2 gap-4">
            <div className="relative group w-full bg-white p-4 rounded-md">

                <div className=" absolute w-full h-full flex items-center  pl-10 top-2/4 left-0 -translate-y-2/4">

                    <div className="relative ">
                        <p className="text-xl z-30 text-text-color mb-1 font-semibold">Tablet</p>
                        <p className="text-sm z-30 text-gray-600 font-medium mb-2">Optionals Skins</p>

                        <div>
                            <a className="text-primary " href="/">Details new</a>
                        </div>
                    </div>
                </div>
                <img className="w-full" src="https://demo-uminex.myshopify.com/cdn/shop/files/3_4_720x.png?v=1681719070" alt="" />
            </div>

            <div className="relative group w-full bg-white p-4 rounded-md">

                <div className="absolute w-full h-full flex items-center  pl-10 top-2/4 left-0 -translate-y-2/4">

                    <div className="relative ">
                        <p className="text-xl z-30 text-text-color mb-1 font-semibold">In-ear-earphone</p>
                        <p className="text-sm z-30 text-gray-600 font-medium mb-2">Optionals Skins</p>

                        <div>
                            <a className="text-primary" href="/">Details new</a>
                        </div>
                    </div>
                </div>
                <img className="w-full" src="https://demo-uminex.myshopify.com/cdn/shop/files/3_5_720x.png?v=1681719083" alt="" />
            </div>
        </section>
    );
};

export default DummySection;