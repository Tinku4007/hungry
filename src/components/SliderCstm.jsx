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
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      speed={1500}
      loop={true}
      className='w-full h-full'
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        item?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full overflow-hidden">
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
  );
};

export default SliderCstm;
