import React from 'react';
import { Link } from 'react-router-dom';
import catering_hero from "../../assets/images/catering_hero.jpg"

const Catering = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${catering_hero})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-6 md:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Premium Catering for All Events
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            From intimate gatherings to grand celebrations — let Hungry Baker elevate your experience.
          </p>
          <Link to="/catering menu_250420_142610.pdf" target="_blank" rel="noopener noreferrer">
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
              View Catering Menu
            </button>
          </Link>
        </div>
      </section>

      {/* Catering Services */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Catering Services We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfectly tailored menus and flawless execution for every event type.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 text-center p-6 rounded-xl shadow hover:shadow-md transition">
            {/* <FaUtensils className="text-yellow-500 text-4xl mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">CATERING</h3>
            <p>When you have a work meeting, get together or just stuck in the office. That’s ok, we offer corporate catering in the Hills delivered to your door! We have a variety of menus we can tailor to meet your requirements.</p>
            <p className='pt-5'>Get in touch today!</p>
          </div>
          <div className="bg-gray-50 text-center p-6 rounded-xl shadow hover:shadow-md transition">
            {/* <FaUsers className="text-yellow-500 text-4xl mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">CORPORATE CATERING</h3>
            <p>Impress your clients and colleagues with our corporate catering services. From office parties to large conferences, Hungary baker offers tailored menus that suit any business occasion. Our team is committed to delivering professional and timely service, ensuring your event runs smoothly and your guests are satisfied.</p>
          </div>
          <div className="bg-gray-50 p-6 text-center rounded-xl shadow hover:shadow-md transition">
            {/* <FaRegClock className="text-yellow-500 text-4xl mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">EVENT CATERING</h3>
            <p>Whether you’re planning a birthday, baby shower or social gathering, Hungary baker offers top-notch party food catering that is sure to impress. Our menu features a wide range of options, from elegant finger foods to gourmet meals, all crafted with the finest ingredients. We also provide hosting for up to 100 guests at our inviting cafe, making it the perfect venue for a memorable and seamless event.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-yellow-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Why Choose Hungry Baker</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We don’t just serve food — we deliver memories.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Cater Your Next Event</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Reach out today to customize your menu and get a free quote.
        </p>
        <Link to="/contact">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow transition duration-300">
            Contact Us Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Catering;
