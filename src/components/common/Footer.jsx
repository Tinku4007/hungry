import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#121118] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              HUDSON GEORGE
            </h2>
            <p className="text-gray-300 mb-4">
              Hudson George is a contemporary eatery set in Sydney’s leafy Hills District that brings a rich Hamptons style together with a familiar classic décor. The clean lines, accents and greenery and a light-filled alfresco area offer an intimate setting for breakfast, lunch and dinner.
            </p>
            <div className="flex space-x-3">
              {/* <FaFacebookF className="bg-gray-800 p-2 rounded-full text-xl" />
            <FaTwitter className="bg-gray-800 p-2 rounded-full text-xl" />
            <FaInstagram className="bg-gray-800 p-2 rounded-full text-xl" />
            <FaLinkedinIn className="bg-gray-800 p-2 rounded-full text-xl" /> */}
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
            <div className="text-gray-300 space-y-2">
              <p>Monday - Friday <span className="float-right">09:00 - 22:00</span></p>
              <p>Saturday <span className="float-right">11:00 - 00:00</span></p>
              <p>Sunday <span className="float-right">11:00 - 23:00</span></p>
              <p>* Happy hour <span className="float-right">17:00 - 21:00</span></p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Address</h3>
            <p>Home Co Hills – Hudson Ave entrance
              56/16 Victoria Ave, Castle Hill NSW 2154</p>
            {/* <div className="text-gray-300 space-y-4">
            <p className="flex items-start gap-3"><FiMapPin className="text-orange-600 mt-1" /> 301 The Greenhouse London, E2 8DY UK</p>
            <p className="flex items-start gap-3"><FiMail className="text-orange-600 mt-1" /> support@domain.com<br />info@domain.com</p>
            <p className="flex items-start gap-3"><FiPhone className="text-orange-600 mt-1" /> +01 8585 855 855<br />02454 8523 856</p>
          </div> */}
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mb-3 bg-white text-black rounded focus:outline-none"
            />
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#">Privacy & Policy</a>
            <a href="#">Faq’s</a>
            <a href="#">Get a Quote</a>
          </div>
          <p>© 2023 HUDSON GEORGE</p>
        </div>
      </footer>
    </>
  )
}

export default Footer