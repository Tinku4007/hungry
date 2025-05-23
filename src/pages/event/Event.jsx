import React from 'react'
import ImageText from '../../components/common/ImageText'

const Event = () => {
    return (
        <>
            <div className="relative h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: `url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-5.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="z-10 text-center">
                    {/* <p className="text-sm font-light">THE STORY BEHIND</p> */}
                    <h2 className="text-4xl mt-2">Event</h2>
                </div>
            </div>

            <ImageText
                // imageWrapper='min-h-[500px]'
                heading='EVENT'
                image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/events_p_1.jpg'
                para='Hungry Bakers is a home away from home open for Breakfast and Lunch Monday to Friday. We are here to help you unwind and relax with good company in a casual, familiar setting. With our relaxed alfresco area we are able to offer the perfect space for your next event, so get in touch and we can tailor something to suit!'
                secondPara='Chat with our team next time you’re in to discuss your event or contact us by phone or email.'
            />

            <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className='grid grid-cols-2 gap-10 items-start'>
                    <div className="bg-gray-50 p-8 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">ENQUIRE</h3>
                        {/* <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        <form className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input className="border p-2 rounded" placeholder="Your Name" />
                                <input className="border p-2 rounded" placeholder="Email Address" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input className="border p-2 rounded" placeholder="Phone Number" />
                                <input className="border p-2 rounded" placeholder="Number Of People" />
                            </div>
                            <div className="w-full">
                                <select name="" id="" className='w-full outline-none border p-2 rounded'>
                                    <option value="">Seating</option>
                                    <option value="">Breakfast</option>
                                    <option value="">Lunch</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <input type='date' className="border p-2 rounded" placeholder="Subject" />
                                <input type='time' className="border p-2 rounded" placeholder="Subject" />
                            </div>
                            <textarea className="border p-2 rounded" placeholder="Message" rows="4"></textarea>
                            <button className="bg-orange-600 text-white py-2 rounded">Get Started</button>
                        </form>
                    </div>
                    <div className='relative'>
                        <img src='https://img.freepik.com/free-photo/smiling-woman-headset-presentation-something_329181-11710.jpg?t=st=1748020830~exp=1748024430~hmac=bcb7b877a09c431f7045923244a744e8e7d67cfdba94fa52352400e22fa970ae&w=1380' alt="" />
                        {/* <img className='absolute -top-12 h-[750px]' src={'https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/events_p_3.png'} alt="" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Event