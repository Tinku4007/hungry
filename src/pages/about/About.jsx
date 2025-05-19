import React from 'react'
import DeliciousExperiences from '../../components/common/DeliciousExperiences'

const About = () => {
    return (
        <div className="w-full text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}>
                <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
                <h1 className="text-5xl font-bold z-10">About Us</h1>
            </section>

            {/* Info Section */}
            <section className="py-16 px-4 md:px-16 bg-white grid md:grid-cols-2 gap-10 items-center">
                <img src="https://pxdraft.com/wrap/hungry/assets/img/about-1.jpg" alt="Dining" className="rounded-lg shadow-lg" />
                <div>
                    <h3 className="text-sm text-orange-500 font-semibold mb-2">QUALITY SERVICE</h3>
                    <h2 className="text-3xl font-bold mb-4">Delicious food & exquisite drinks</h2>
                    <p className="mb-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="mb-2">
                        <p><strong>Mon-Fri:</strong> 9 AM – 22 PM</p>
                        <p><strong>Saturday:</strong> 9 AM – 23 PM</p>
                    </div>
                    <button className="mt-4 bg-orange-600 text-white px-5 py-3 rounded hover:bg-orange-700">Book a Table Now</button>
                </div>
            </section>

            {/* Accomplishments */}
            <section className="py-16 bg-cover bg-center text-white relative" style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}>
                <div className="bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-8">Our accomplishments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center px-4">
                        {[
                            { label: 'Clients', value: 32 },
                            { label: 'Experience', value: 11 },
                            { label: 'Daily', value: 384 },
                            { label: 'Awards', value: 10 },
                        ].map((item, index) => (
                            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold">{item.value}</h3>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 md:px-16">
                <h3 className="text-center text-orange-500 text-sm font-semibold">Our Team</h3>
                <h2 className="text-center text-3xl font-bold mb-10">Meet our passionate team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {Array(4).fill(0).map((_, i) => (
                        <div key={i} className="text-center">
                            <img src={'https://pxdraft.com/wrap/hungry/assets/img/team-3.jpg'} className="rounded-lg shadow-md mb-4" alt={`Chef ${i + 1}`} />
                            <h3 className="font-semibold">Toni Kroos</h3>
                            <p className="text-sm text-gray-500">Co-founder</p>
                            <div className="flex justify-center gap-2 mt-2">
                                {["fb", "tw", "ig"].map((s, idx) => (
                                    <span key={idx} className="w-6 h-6 bg-gray-200 rounded-full"></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Wine Selection Section */}
            {/* <section className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-4 md:px-16 gap-10 bg-gray-100">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our wine selection to complement your meal</h2>
                    <ul className="bg-white p-6 rounded-lg shadow-md">
                        {["Cabernet", "Zinfandel", "Chardonnay", "Pinot noir", "Beef carpaccio"].map((item, i) => (
                            <li key={i} className="flex justify-between py-2 border-b last:border-0">
                                <span>{item}</span>
                                <span>$120</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <img src="/images/wine.jpg" alt="Wine" className="rounded-lg shadow-md" />
            </section> */}

            {/* Testimonials */}
            <section className="py-16 px-4 md:px-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Happy Customer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="mb-2">Awesome Experience.</p>
                            <div className="flex justify-center mb-2">⭐⭐⭐⭐⭐</div>
                            <p className="text-sm text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <h4 className="font-semibold">Emma Watson</h4>
                            <p className="text-sm text-gray-500">Happy Customer</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <DeliciousExperiences title='We create delicious experiences' bgImage='https://pxdraft.com/wrap/hungry/assets/img/home-banner-4.jpg' />
        </div>
    )
}

export default About