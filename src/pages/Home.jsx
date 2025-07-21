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
import SliderCstm from '../components/SliderCstm'
import chris from "../assets/images/chris.png"
import star_img from "../assets/images/star_img.png"
import sanjeshni from "../assets/images/sanjeshni.png"
import bill from "../assets/images/bill.png"
import welcomehungrybaker_img from "../assets/images/hungary_baker.jpg"
import eatry_img_img from "../assets/images/catering.jpg"
import event_img from "../assets/images/event.jpg"
import main_home_page from "../assets/images/main-home-page.jpg"
import hungryBaker_img from "../assets/images/hungryBaker.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  const review = [
    {
      src: star_img,
      name: "Alexander Little",
      rating: "⭐⭐⭐⭐⭐",
      description: " Delicious burger. Need to come here again there was so many great looking dishes on the menu. Service was lovely and prompt. Great outdoor shaded area for chill vibes. Definetely coming back here. Those chips were SO crispy 🍔🤯"
    },
    {
      src: sanjeshni,
      name: "Sanjeshni Lata",
      rating: "⭐⭐⭐⭐⭐",
      description: "  Just love this place. Awesome coffee, friendly atmosphere and lovely people."
    },
    {
      src: chris,
      name: "Chris Dow",
      rating: "⭐⭐⭐⭐⭐",
      description: "  This is the best quality food for a suit down meal in the area. Actually it's the only decent food place in the area. Big selection of meals including healthy options. Recommended. Be aware it gets very busy at lunchtime!"
    },
    {
      src: bill,
      name: "Bill",
      rating: "⭐⭐⭐⭐⭐",
      description: " Whenever I’m in Sydney, I take my team here as a little treat. Even though we’re a fairly large group and don’t make it easy for the poor staff by ordering in a disorganized way, the staff here are always so helpful and good humoured. It doesn’t hurt that the food is pretty decent too!"
    },
  ]
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        loop={true}
        className="w-full h-screen overflow-hidden"
        style={{ overflowX: 'hidden' }}
      >
        {[
          home_img,
          'https://nomadsouthbay.com/wp-content/uploads/2021/12/restaurant-interior-private-parties.jpg',
          main_home_page,
          hungryBaker_img,
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative w-full h-screen bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2)), url(${img})`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
                <h1
                  className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-2"
                >
                  Welcome to
                </h1>
                <h2 className="text-yellow-400 text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">
                  HUNGRY BAKER
                </h2>
                <p className="text-white text-base sm:text-lg md:text-xl max-w-xl">
                  Discover delightful meals and heavenly treats with us.
                </p>
                <Link to="/event">
                  <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                    Book a Table
                  </button>
                </Link>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Section */}


      {/* Delicious food & exquisite drinks */}
      <ImageText
        aos="fade-right"
        offset="500"
        easing="ease-in-sine"
        duration="500"

        heading='WELCOME TO HUNGRY BAKER'
        image={welcomehungrybaker_img}
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
        image={event_img}
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
        image={eatry_img_img}
        para='When you have a Work Meeting, Get together or just Stuck in the office? That’s ok, we offer corporate catering in the Hills delivered to your door! We have a variety of menus or we can tailor something to you your requirements. Speak to one of the team next time your in or simply send us an email.'
      />

      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="col-span-full text-3xl font-semibold mb-6 text-center md:text-left">Why we are the best in food quality</h2>

          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Skilled Chefs</h3>
            <p className="text-sm">At Hungry Baker, our expert chefs and cooks blend creativity with precision to craft exceptional baked goods. With years of experience and a passion for perfection, they deliver fresh, flavorful treats that keep our customers coming back for more.</p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
            <p className="text-sm">At Hungry Baker, we pride ourselves on using only the freshest ingredients in all our baked goods. From oven-fresh pies, sausages to handcrafted pastries, every product is made daily to ensure top quality, rich flavor, and unbeatable freshness in every bite.</p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Savory Bakes</h3>
            <p className="text-sm">From meat pies to quiches, Hungry Baker's savory range uses fresh herbs, quality meats, and rich fillings to create satisfying, wholesome options for any time of day.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <h2 className="text-center text-3xl underline  font-semibold mb-10">HOT BAR ( Chef’s Choice )</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ul className="space-y-5">
            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">CURRIES</h3>
                  <p className="text-sm text-gray-400">Butter chicken/Chilli chicken/Honey chicken/Oyster chicken/Hoisin chicken</p>
                  <p className="text-sm text-gray-400">Yellow curry/Green curry/Red curry/Beef curryn</p>
                </div>
                {/* <div className="text-orange-600 font-semibold">$35</div> */}
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">PAN section</h3>
                  <p className="text-sm text-gray-400">Chicken pasta/pesto pasta/chorizo pasta/chicken and bacon pasta</p>
                  <p className="text-sm text-gray-400">mushroom chicken</p>
                </div>
                {/* <div className="text-orange-600 font-semibold">$19</div> */}
              </div>
            </li>
          </ul>

          <ul className="space-y-5">
            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">NOODLES</h3>
                  <p className="text-sm text-gray-400">Hokkien chicken/beef noodles</p>
                  <p className="text-sm text-gray-400">Rice chicken/beef noodles</p>
                </div>
                {/* <div className="text-orange-600 font-semibold">$40</div> */}
              </div>
            </li>

            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">RICE</h3>
                  <p className="text-sm text-gray-400">Saffron rice</p>
                  <p className="text-sm text-gray-400">fried rice</p>
                </div>
                {/* <div className="text-orange-600 font-semibold">$29</div> */}
              </div>
            </li>
          </ul>
        </div>
        <div className='text-center mt-16'>
          <TheameButton to="/menu_250420_142636[1].pdf" target="_blank" rel="noopener noreferrer" title='MENU ORDER' />
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Happy Customer</h2>
        <SliderCstm item={review} />
      </section >

      <div className='max-w-7xl mx-auto px-4 md:px-10 py-20'>
        <h3 className="text-3xl mb-5 text-orange-600  font-semibold">FAQ’s</h3>
        <Accordion defaultExpanded>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-base md:text-xl text-black  font-semibold">How can I make a booking at your restaurant</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
            <h3 className="text-base md:text-xl text-black  font-semibold">Can I book Hungry Baker for a private event?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
            <h3 className="text-base md:text-xl text-black  font-semibold">Do you offer corporate catering services?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
            <h3 className="text-base md:text-xl text-black  font-semibold">What’s so special about your Five Senses Coffee?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
            <h3 className="text-base md:text-xl text-black  font-semibold">Where to get the best coffee in Castle?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Hungry Baker, a top-rated
              , is the perfect place for coffee addicts and aficionados. At Hungry Baker, you are welcomed by the rich aromas of Five Senses coffee and daily fresh treats. We serve you a classic Australian breakfast alongside remarkable coffee. We are open for breakfast and lunch daily on Monday to Friday. Call  0298327770 to find out more.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default Home