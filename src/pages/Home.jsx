import React from 'react'
import TheameButton from '../components/common/TheameButton'
import DeliciousExperiences from '../components/common/DeliciousExperiences'
import ImageText from '../components/common/ImageText'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

const Home = () => {
  return (
    <div className="font-serif text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-semibold max-w-3xl leading-snug">
            WELCOME
          </h1>
          <TheameButton title='ORDER ONLINE' />
        </div>
      </section>

      {/* Delicious food & exquisite drinks */}
      <ImageText
        heading='WELCOME TO HUDSON GEORGE'
        image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/home_intro.jpg'
        para='Hudson George is a contemporary eatery set in Sydney’s leafy Hills District that brings a rich Hamptons style together with a familiar classic décor. The clean lines, accents of greenery and a light-filled alfresco area offer an intimate setting for breakfast, lunch and dinner.'
        secondPara='As a family-owned business, we strive to build an atmosphere that welcomes you in with the warmth of coming home; The surrounds and relaxed ambience are complemented by food and beverages set to heighten your senses and calm the noise of the day.'
      />

      <ImageText
        // imageWrapper='min-h-[500px]'
        reverse={true}
        heading='EATERY'
        image='https://scontent.fixc4-2.fna.fbcdn.net/v/t1.6435-9/107488056_290607019018077_8337921934644874686_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=aLEuDPvm4A4Q7kNvwHqsuVI&_nc_oc=Adm4zX6f9CPYF2a0fIX2alv18pX74TTWNq_aw-OkFHY-PDOdUtH266WxU7pEX7mBBWMRfnuRc-eOrjtpE271FCdF&_nc_zt=23&_nc_ht=scontent.fixc4-2.fna&_nc_gid=jPRPtsnyd0Jj4S6f4dvsCw&oh=00_AfJo3ClW2VdMMDpQNDwAhLPiX8J_0XfmgjGJIovPsBp68Q&oe=685430CB'
        para='Take a break from the week’s hectic run-around with classic Australian breakfasts alongside remarkable coffee. Be welcomed by the rich aromas of Five Senses coffee and daily fresh treats from Sonoma Bakery.'
        secondPara='Hudson George is a home away from home. Open for Breakfast, Lunch Daily, and Dinner Thursday, Friday and Saturday.'
        third='We look forward to welcoming you and your family and friends soon!'
      />

      <ImageText
        heading='EVENTS'
        image='https://scontent.fixc4-5.fna.fbcdn.net/v/t39.30808-6/470185357_1349871159758319_3884551672326250717_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=q0dJ1o-voMoQ7kNvwFtZ3Hl&_nc_oc=AdkSzwZK9pMcHeXvyzGySGcSzKzfStlGLR11mnXSoaaKxQ-hYuFoHSVshuoh-vdvXD55hYpsBGMI0d_O9wPaWnvW&_nc_zt=23&_nc_ht=scontent.fixc4-5.fna&_nc_gid=rI8m56ud9lSiX233vK16jg&oh=00_AfLtJagLJK4NTFFBRUxmhMt-VDjA5LEsgUu2aPHmPtkDaA&oe=68326519'
        para='When the occasion arises, experience wholesome Mediterranean-inspired lunches and dinners together with a carefully selected collection of wine, beer and cider. Here to help you unwind and relax with good company in a casual, familiar setting. With our relaxed indoor alfresco area we able to offer the perfect space for your next event, so get in touch and we can tailor something to suit!'
        secondPara='Speak to one of the team next time your in and we would love to discuss your event.'
      />

      <ImageText
        // imageWrapper='min-h-[500px]'
        reverse={true}
        heading='CATERING'
        image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/home_catering.jpg'
        para='When you have a Work Meeting, Get together or just Stuck in the office? That’s ok, we offer corporate catering in the Hills delivered to your door! We have a variety of menus or we can tailor something to you your requirements. Speak to one of the team next time your in or simply send us an email.'
      />

      {/* <section
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

      <section className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 items-center py-20">
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-6">Immerse yourself in an elegant atmosphere</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition font-semibold">
            More About Us
          </button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://pxdraft.com/wrap/hungry/assets/img/home-banner-3.jpg"
            alt="Elegant atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-10 py-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif font-semibold mb-6">Our excellent service and top quality dishes are unmatched. Pick the best.</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Simple and balanced. A seasonal table to enjoy together. Praised and appreciated.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-signature text-2xl text-orange-600">- Owner Signature</p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://pxdraft.com/wrap/hungry/assets/img/about-3.jpg" alt="Service 1" className="rounded-lg object-cover w-full h-48" />
          <img src="https://pxdraft.com/wrap/hungry/assets/img/about-4.jpg" alt="Service 2" className="rounded-lg object-cover w-full h-48" />
        </div>
      </section>

      <section
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
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20 text-center">
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
      </section>

      <DeliciousExperiences title='We create delicious experiences' bgImage='https://pxdraft.com/wrap/hungry/assets/img/home-banner-5.jpg' />

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Most Recent News</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="border rounded-lg overflow-hidden shadow-sm">
              <img src={`https://pxdraft.com/wrap/hungry/assets/img/blog-1.jpg`} alt={`News ${item}`} className="w-full h-36 object-cover" />
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">Food, Drinks</div>
                <h3 className="font-semibold mb-2">
                  Restaurants in Paris – get to know them in the city
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="text-orange-600 font-semibold mt-3 hover:underline">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <div className='max-w-7xl mx-auto px-4 md:px-10 py-20'>
            <h3 className="text-3xl mb-5 text-orange-600 font-serif font-semibold">FAQ’s</h3>
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">How can I make a booking at your restaura</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Head to our website to open a booking at Hudson George, one of the leading Castle Hill restaurants. Select a date and time to book a table for up to 8 guests. For bookings of 10 or more people, enter the number in the box corresponding to the ‘request for a group’ section. You can call us at (02) 9194 3288 to make your request, and we will do our best to accommodate your request in line with the Government restrictions and regulations.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-xl text-black font-serif font-semibold">Can I book Hudson George for a private event?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-600 leading-relaxed">
              Yes! Hudson George, one of the best
              , also cater for group celebrations and private events. We feature Mediterranean-inspired lunches and dinners together with a carefully selected collection of wine, beer and cider. Our relaxed alfresco area provides the perfect space for your next event including, birthdays, graduation parties, and more. You can relax and unwind with your group in a casual setting. Call (02) 9194 3288 to book your space.
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
              Yes! Do you have a work meeting or get together? Stuck in the office? We have got you covered! Hudson George, one of the
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
              is made with the purpose to impact people positively through coffee. At Hudson George, we believe that delicious coffee has an incredible ability to connect people, relationships that make the world just that little bit better. Call (02) 9194 3288 for more details.
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
              Hudson George, a top-rated
              , is the perfect place for coffee addicts and aficionados. At Hudson George, you are welcomed by the rich aromas of Five Senses coffee and daily fresh treats. We serve you a classic Australian breakfast alongside remarkable coffee. We are open for breakfast and lunch daily on Thursday, Friday, and Saturday. Call (02) 9194 3288 to find out more.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

    </div>
  )
}

export default Home