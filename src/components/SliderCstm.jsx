import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderCstm = ({ item, images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 2000, disableOnInteraction: false }}
      speed={1500}
      loop={true}
      // height={null}
      autoHeight={true}
      className='w-full h-full mySwiper'
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
          slidesPerView: 3,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images &&
        item?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full overflow-hidden">
              <img
                src={item}
                alt={`slide-${index}`}
                className="h-[350px] w-full object-cover rounded-lg shadow-md mb-4"
              />
            </div>
          </SwiperSlide>
        ))
      }

      {!images &&
        item?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 mb-10 rounded-lg shadow-md">
                {/* <p className="mb-2">Awesome Experience.</p> */}
                <div className='text-center flex justify-center mb-2'>
                  <img src={item?.src} alt="src" />
                </div>
                <h4 className="font-semibold mb-3">{item?.name}</h4>
                <div className="flex justify-center mb-2">{item?.rating}</div>
                <p className="text-sm line-clamp-5 h-[100px] text-gray-600 mb-4">
                  {item?.description}
                </p>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default SliderCstm;
