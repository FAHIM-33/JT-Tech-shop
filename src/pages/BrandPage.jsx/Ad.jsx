import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css/bundle'
import pt from 'prop-types'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Ad = ({ brand }) => {
    let [data, setData] = useState([])
    let nav = useNavigate()
    useEffect(() => {
        axios.get('/brands.json')
            .then(({ data }) => {
                let remaining = data.filter(obj => obj.name !== brand)
                setData(remaining)

            })
    }, [brand])
    let isMobile = window.innerWidth < 768;


    let swiperRules = {
        modules: [Navigation, Pagination, A11y],
        spaceBetween: 50,
        slidesPerView: isMobile ? 1.3 : 2.7,
        navigation: true,
        pagination: { clickable: true },
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log('slide change')
    }

    function handleCard(name) {
        let title = name;
        nav(`/brand/${title}`)
    }

    return (
        <div className='p-4 lg:w-3/4 mx-auto my-20'>
            <h2 className="text-center text-2xl lg:text-5xl mb-4 lg:mb-8 text-low bg-fadegray p-2">You might also like:</h2>

            <Swiper {...swiperRules}
            // install Swiper modules
            // modules={[Navigation, Pagination, A11y]}
            // spaceBetween={50}
            // slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
            // // scrollbar={{ draggable: false }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map((obj) => <SwiperSlide key={obj.id}>
                        <div onClick={()=>handleCard(obj.name)} className="hover:cursor-pointer text-center flex bg-fadegray hover:bg-[#33333359] justify-center items-center flex-col rounded-md">
                            <figure className="flex-grow p-4">
                                <img src={obj.img} alt="" className="h-20" />
                            </figure>
                            <p className="text-3xl bg-low w-full text-white p-1 my-4">{obj.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};
Ad.propTypes = {
    brand: pt.string,
}
export default Ad;
