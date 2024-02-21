import './featured.css'

const Featured = () => {
    const img = '/pngwing.com(1).png'
    return (
        <section className='my-12'>
          <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2">You can achieve</h2>
            <section className="card-container cont p-4  lg:p-0 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 lg:mt-12">
                <div className="card p-8 rounded-lg">
                    <figure>
                        <img src={img} className='w-16' alt="" />
                    </figure>
                    <h3 className="font-bold text-xl py-4">Get help By creators</h3>
                    <p className="text-lg text-mid">The Powerful Impact of tech creation</p>
                </div>

                <div className="card p-8 rounded-lg h-full">
                    <figure>
                    <img src={img} className='w-16' alt="" />
                    </figure>
                    <h3 className="font-bold text-xl py-4">Helping people</h3>
                    <p className="text-lg text-mid"> Benefits of using technology Regularly</p>
                </div>

                <div className="card p-8 rounded-lg h-full">
                    <figure>
                    <img src={img} className='w-16' alt="" />
                    </figure>
                    <h3 className="font-bold text-xl py-4">Becoming a engineer</h3>
                    <p className="text-lg text-mid flex-grow">Wellness and enthusiasm: The Dual Rewards of Knowledge</p>
                </div>
                <div>

                </div>

                <div className="card p-8 rounded-lg">
                    <figure>
                    <img src={img} className='w-16' alt="" />
                    </figure>
                    <h3 className="font-bold text-xl py-4">The Ripple Effect</h3>
                    <p className="text-lg text-mid">How Your innovation Creates Positive Change</p>
                </div>

            </section>
        </section>
    );
};

export default Featured;