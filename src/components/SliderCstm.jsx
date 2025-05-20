import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderCstm = ({ item }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      className='w-full h-full'
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      speed={1500}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        item?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h w-full overflow-hidden">
              <img
                src={item}
                alt={`slide-${index}`}
                className="h-full w-full object-cover rounded-lg shadow-md mb-4"
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SliderCstm;
