import './banner.css'

const Banner = () => {
    return (
        <div className="banner text-white pl-2 lg:pl-12 ">
            <div className="flex items-end pt-16 lg:pt-52 pb-8" >
                <figure className="-m-4 -mr-5 w-24 overflow-hidden">
                    <img src="/pngwing.com.png" alt="logo" className="block w-full" />
                </figure>
                <p className="text-4xl font-medium">randify</p>
            </div>
            <h1 className='text-3xl lg:text-5xl font-semibold'>The<span className='text-amber-400'>  Biggest</span> Tech Brand Store<span className='animate-bounce inline-block text-amber-400'>!</span></h1>
            <p className='pb-16 lg:pb-48  text-xs lg:text-base lg:w-3/4 pt-8 text-[#c7c7c7a4]'>We got available products, gadgets from trusted tech brands from all around the world. We ensure products purity and grarantee and warrenty. Also providing storng and reliable service to all out customers.</p>
        </div>
    );
};

export default Banner;