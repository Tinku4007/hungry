import React from 'react'

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: `url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-5.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="z-10 text-center">
          <p className="text-sm font-light">THE STORY BEHIND</p>
          <h2 className="text-4xl mt-2">Contact Us</h2>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="grid md:grid-cols-2 gap-8 px-6 py-12 max-w-6xl mx-auto">
        <div className="bg-gray-50 p-8 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">You Can Mail Us</h3>
          <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Your Name" />
              <input className="border p-2 rounded" placeholder="Email Address" />
            </div>
            <input className="border p-2 rounded" placeholder="Subject" />
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Company (optional)" />
              <input className="border p-2 rounded" placeholder="Phone (optional)" />
            </div>
            <textarea className="border p-2 rounded" placeholder="Message" rows="4"></textarea>
            <button className="bg-orange-600 text-white py-2 rounded">Get Started</button>
          </form>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="space-y-4 text-sm">
            <div>
              <strong>Phone:</strong> +01 5555 6565 6565
            </div>
            <div>
              <strong>Email:</strong> info@domain.com
            </div>
            <div>
              <strong>Address:</strong><br />1600 Amphitheatre Parkway, New York WC1 1BA
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#">🔵</a>
              <a href="#">🟠</a>
              <a href="#">🔴</a>
              <a href="#">🟤</a>
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="bg-gray-100 py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {["NEW YORK", "NEW YORK", "LOS ANGELES", "LAS VEGAS"].map((city, index) => (
          <div key={index} className="text-sm space-y-2">
            <strong>{city}</strong>
            <p>301 The Greenhouse London, E2 8DY UK</p>
            <p>support@domain.com</p>
            <p>+01 8585 855 855</p>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="h-96 my-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096164!2d144.9537363153189!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577af4d4c0e5c0!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1632988076209!5m2!1sen!2sau"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

</div>
  )
}

export default Contact