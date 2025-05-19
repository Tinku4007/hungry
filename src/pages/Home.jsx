import React from 'react'
import TheameButton from '../components/common/TheameButton'
import DeliciousExperiences from '../components/common/DeliciousExperiences'

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
            Discover the true meaning of luxury dining
          </h1>
          <p className="text-gray-300 max-w-xl mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <TheameButton title=' Book a table now' />
        </div>
      </section>

      {/* Delicious food & exquisite drinks */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 my-16 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col space-y-6">
          <img src="https://pxdraft.com/wrap/hungry/assets/img/about-1.jpg" alt="Food" className="rounded-lg shadow-lg object-cover h-64 w-full" />
          <img src="https://pxdraft.com/wrap/hungry/assets/img/about-1-1.jpg" alt="Drinks" className="rounded-lg shadow-lg object-cover h-64 w-full" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-orange-600 uppercase font-semibold tracking-wide text-sm">Quality Service</h2>
          <h3 className="text-3xl font-serif font-semibold">Delicious food & exquisite drinks</h3>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <p className="text-sm text-gray-400">Mon-Fri: 9 AM - 22 PM <br /> Sat-Sun: 9 AM - 23 PM</p>
          <TheameButton title='Book a table now' />
        </div>
      </section>

      {/* Why we are the best */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 text-white grid grid-cols-1 md:grid-cols-4 gap-6">
          <h2 className="col-span-full text-3xl font-semibold mb-6 text-center md:text-left">Why we are the best in food quality</h2>

          {/* Card */}
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

      {/* Selected Menu */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <h2 className="text-center text-3xl font-serif font-semibold mb-10">Selected Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Menu List */}
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

          {/* Right Menu List - Duplicate same for demonstration */}
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

      {/* Elegant atmosphere */}
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

      {/* Excellent service */}
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

      {/* Wine selection */}
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

      {/* Happy Customers */}
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

      {/* Delicious experiences */}
    <DeliciousExperiences title='We create delicious experiences' bgImage='https://pxdraft.com/wrap/hungry/assets/img/home-banner-5.jpg' />

      {/* Most Recent News */}
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
      </section>

    
    </div>
  )
}

export default Home