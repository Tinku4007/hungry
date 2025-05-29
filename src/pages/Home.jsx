import React from 'react'
import TheameButton from '../components/common/TheameButton'
import DeliciousExperiences from '../components/common/DeliciousExperiences'
import ImageText from '../components/common/ImageText'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import her_sec from "../assets/images/WhatsApp Image 2025-05-22 at 22.28.32_efff7f22.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import home_img from '../assets/images/home_1.jpeg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  return (
    <div className="font-serif text-gray-900">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        // spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={3500}
        loop={true}
        className='w-full h-full'
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <section
            className="relative bg-cover bg-center h-[80vh]"
            style={{
              // backgroundAttachment: "fixed",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${home_img})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1  data-aos="zoom-in-up" className="text-white mb-10  sm:text-4xl md:text-7xl font-semibold max-w-3xl leading-snug">
                Welcome
              </h1>
              <TheameButton title='ORDER ONLINE' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className="relative bg-cover bg-center h-[80vh]"
            style={{
              // backgroundAttachment: "fixed",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://nomadsouthbay.com/wp-content/uploads/2021/12/restaurant-interior-private-parties.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white mb-10   sm:text-4xl md:text-7xl font-semibold max-w-3xl leading-snug">
                Welcome
              </h1>
              <TheameButton title='ORDER ONLINE' />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      {/* Hero Section */}


      {/* Delicious food & exquisite drinks */}
      <ImageText
        aos="fade-right"
        offset="500"
        easing="ease-in-sine"
        duration="500"

        heading='WELCOME TO HUNGRY BAKER'
        image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/home_intro.jpg'
        para='Hungry Baker is a contemporary eatery set in Sydney’s leafy Hills District that brings a rich Hamptons style together with a familiar classic décor. The clean lines, accents of greenery and a light-filled alfresco area offer an intimate setting for breakfast, lunch and dinner.'
        secondPara='As a family-owned business, we strive to build an atmosphere that welcomes you in with the warmth of coming home; The surrounds and relaxed ambience are complemented by food and beverages set to heighten your senses and calm the noise of the day.'
      />

      <ImageText
        aos="fade-left"
        anchor="#example-anchor"
        offset="500"
        duration="500"
        // imageWrapper='min-h-[500px]'
        reverse={true}
        heading='EATERY'
        image='https://nomadsouthbay.com/wp-content/uploads/2021/12/restaurant-interior-private-parties.jpg'
        para='Take a break from the week’s hectic run-around with classic Australian breakfasts alongside remarkable coffee. Be welcomed by the rich aromas of Five Senses coffee and daily fresh treats from Sonoma Bakery.'
        secondPara='Hungry Baker is a home away from home. Open for Breakfast, Lunch Monday to Friday.'
        third='We look forward to welcoming you and your family and friends soon!'
      />

      <ImageText
        aos="fade-right"
        offset="500"
        easing="ease-in-sine"
        duration="500"
        heading='EVENTS'
        image='https://scontent.fixc4-5.fna.fbcdn.net/v/t39.30808-6/470185357_1349871159758319_3884551672326250717_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=q0dJ1o-voMoQ7kNvwFtZ3Hl&_nc_oc=AdkSzwZK9pMcHeXvyzGySGcSzKzfStlGLR11mnXSoaaKxQ-hYuFoHSVshuoh-vdvXD55hYpsBGMI0d_O9wPaWnvW&_nc_zt=23&_nc_ht=scontent.fixc4-5.fna&_nc_gid=rI8m56ud9lSiX233vK16jg&oh=00_AfLtJagLJK4NTFFBRUxmhMt-VDjA5LEsgUu2aPHmPtkDaA&oe=68326519'
        para='When the occasion arises, experience wholesome Mediterranean-inspired Breakfast and Lunch together with a carefully selected collection of Coffees and Smoothies and Juices. Here to help you unwind and relax with good company in a casual, familiar setting. With our relaxed indoor alfresco area we able to offer the perfect space for your next event, so get in touch and we can tailor something to suit!'
        secondPara='Speak to one of the team next time your in and we would love to discuss your event.'
      />

      <ImageText
        aos="fade-left"
        anchor="#example-anchor"
        offset="500"
        duration="500"

        reverse={true}
        heading='CATERING'
        image='https://media.licdn.com/dms/image/v2/D4D12AQGCfNd46fzsJw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1658750246612?e=2147483647&v=beta&t=nJr6jTcqirUruQaLPwXU3crVbOhYQt1-fM_Pch97VW4'
        para='When you have a Work Meeting, Get together or just Stuck in the office? That’s ok, we offer corporate catering in the Hills delivered to your door! We have a variety of menus or we can tailor something to you your requirements. Speak to one of the team next time your in or simply send us an email.'
      />

      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 text-white grid grid-cols-1 md:grid-cols-4 gap-6">
          <h2 className="col-span-full text-3xl font-semibold mb-6 text-center md:text-left">Why we are the best in food quality</h2>

          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Skilled Chefs</h3>
            <p className="text-sm">Learn lorem dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
            <p className="text-sm">Learn lorem dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Bamboo Bar's Best Bar</h3>
            <p className="text-sm">Learn lorem dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Vegan Cuisine</h3>
            <p className="text-sm">Learn lorem dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <h2 className="text-center text-3xl font-serif font-semibold mb-10">Selected Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ul className="space-y-5">
            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">STEAK TARTARE BUTTER</h3>
                  <p className="text-sm text-gray-400">Steak tartare, seasoned butter</p>
                </div>
                <div className="text-orange-600 font-semibold">$35</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">SOUP OF CONSOMME</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$19</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">CHICKEN WITH PEANUTS</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$29</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">JULIARD LAMB STEAK</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$40</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">RISOTTO WITH SEAFOOD</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$20</div>
              </div>
            </li>
          </ul>

          <ul className="space-y-5">
            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">STEAK TARTARE BUTTER</h3>
                  <p className="text-sm text-gray-400">Steak tartare, seasoned butter</p>
                </div>
                <div className="text-orange-600 font-semibold">$35</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">SOUP OF CONSOMME</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$19</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">CHICKEN WITH PEANUTS</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$29</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">JULIARD LAMB STEAK</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$40</div>
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">RISOTTO WITH SEAFOOD</h3>
                  <p className="text-sm text-gray-400">Simple and balanced. A seasonal table.</p>
                </div>
                <div className="text-orange-600 font-semibold">$20</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <section
          className="relative bg-cover bg-center py-20"
          style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-4.jpg" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-10 text-white grid md:grid-cols-2 items-center gap-6">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-4">Our wine selection to complement your meal</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <ul className="space-y-2 text-right">
                <li className="flex justify-between">
                  <span>Cabernet</span>
                  <span>$120</span>
                </li>
                <li className="flex justify-between">
                  <span>Merlot</span>
                  <span>$120</span>
                </li>
                <li className="flex justify-between">
                  <span>Chardonnay</span>
                  <span>$120</span>
                </li>
                <li className="flex justify-between">
                  <span>Pinot noir</span>
                  <span>$120</span>
                </li>
                <li className="flex justify-between">
                  <span>Kenfrancous</span>
                  <span>$120</span>
                </li>
              </ul>
            </div>
          </div>
        </section> */}

      {/* <section className="max-w-7xl mx-auto px-4 md:px-10 py-20 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-12">Happy Customer</h2>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-pink-100 p-6 rounded-lg max-w-xs mx-auto text-left">
              <div className="text-orange-600 font-semibold mb-2">Awesome Experience</div>
              <p className="text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="font-semibold">Travis Warren</div>
              <div className="text-xs text-gray-400">New York</div>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg max-w-xs mx-auto text-left">
              <div className="text-orange-600 font-semibold mb-2">Awesome Experience</div>
              <p className="text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="font-semibold">Travis Warren</div>
              <div className="text-xs text-gray-400">New York</div>
            </div>
          </div>
        </section> */}

      <DeliciousExperiences title='We create delicious experiences' bgImage='https://pxdraft.com/wrap/hungry/assets/img/home-banner-5.jpg' />

      <div className='max-w-7xl mx-auto px-4 md:px-10 py-20'>
        <h3 className="text-3xl mb-5 text-orange-600 font-serif font-semibold">FAQ’s</h3>
        <Accordion defaultExpanded>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">How can I make a booking at your restaurant</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Head to our website to open a booking at Hungry Baker, one of the leading Castle Hill restaurants. Select a date and time to book a table for up to 8 guests. For bookings of 10 or more people, enter the number in the box corresponding to the ‘request for a group’ section. You can call us at 0298327770 to make your request, and we will do our best to accommodate your request in line with the Government restrictions and regulations.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">Can I book Hungry Baker for a private event?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Yes! Hungry Baker, one of the best
              , also cater for group celebrations and private events. We feature Mediterranean-inspired lunches together with a carefully selected collection of coffee, smoothies and juices. Our relaxed alfresco area provides the perfect space for your next event including, birthdays, graduation parties, and more. You can relax and unwind with your group in a casual setting. Call 0298327770 to book your space.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">Do you offer corporate catering services?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Yes! Do you have a work meeting or get together? Stuck in the office? We have got you covered! Hungry Baker, one of the
              , offer corporate catering in the Hills delivered to your door. Our delicious menu option includes a variety of food options that can be tailored to meet your requirements. Delivery available!
            </p>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">What’s so special about your Five Senses Coffee?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Five Senses coffee at our
              is made with the purpose to impact people positively through coffee. At Hungry Baker, we believe that delicious coffee has an incredible ability to connect people, relationships that make the world just that little bit better. Call 0298327770 for more details.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">Where to get the best coffee in Castle?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Hungry Baker, a top-rated
              , is the perfect place for coffee addicts and aficionados. At Hungry Baker, you are welcomed by the rich aromas of Five Senses coffee and daily fresh treats. We serve you a classic Australian breakfast alongside remarkable coffee. We are open for breakfast and lunch daily on Monday to Friday. Call  0298327770 to find out more.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

    </div>
  )
}

export default Home