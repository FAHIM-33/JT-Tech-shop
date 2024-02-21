import { BiCheck } from 'react-icons/bi';

const Join = () => {
    return (
        <div className='my-12'>
            <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2 mb-2">Join Our Community</h2>
            <div className='join px-4 py-12 lg:p-12'>
                <div className=' text-white  lg:pl-[40%] lg:text-center'>
                    <p className='text-xl font-semibold text-start'>Benefits:</p>
                    <p className=' flex items-center gap-2'><BiCheck className='text-green-400 '></BiCheck>Early Access to the Latest Releases</p>
                    <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Engaging Discussions</p>
                    <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Tech Tips and Tricks</p>
                    <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Exclusive Promotions</p>
                    <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Product Reviews and Recommendations</p>
                </div>
                <div className='flex lg:w-1/2 mx-auto mt-8'>
                    <input type="text" className='rounded-r-none backdrop-blur-md' placeholder='Email:' /> <button className='btn rounded-r-lg bg-amber-400 text-lg p-2'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Join;