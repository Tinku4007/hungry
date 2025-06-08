import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { Form, Formik } from 'formik';
import InputField from '../../components/common/InputField';

const Contact = () => {
  const formRef = useRef(); // Step 1
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {
    // Step 4 - send the actual HTML form
    setLoading(true)
    emailjs.sendForm(
      'service_hxpljg1',
      'template_iown3cf',
      formRef.current,
      'BT_QtSEPmCpCUjnxl'
    ).then(
      () => {
        toast.success("Form Sent Successfully ✅");
        resetForm(); // reset the form after successful submission
        setLoading(false); // stop loading
      },
      (error) => {
        console.log('FAILED...', error?.text || error);
        toast.error("Failed to send the form ❌");
        setLoading(false); // stop loading
      }
    );
  };

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
        {/* <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        <div className="bg-gray-50 md:p-8 p-3 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">ENQUIRE</h3>

          <Formik
            initialValues={{
              name: '',
              email: '',
              phone_number: '',
              number_people: '',
              seating: '',
              date: '',
              time: '',
              message: ''
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form ref={formRef} className='grid gap-4'> {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField required name='name' placeholder='Your Name' />
                  <InputField required name='email' placeholder='Email Address' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField required name='phone_number' type='number' placeholder='Phone Number' />
                  <InputField required name='number_people' placeholder='Number Of People' />
                </div>
                <div className="w-full">
                  <InputField required className='w-full' as='select' name='seating'>
                    <option value="">Select Seating</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                  </InputField >
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <InputField required name='date' type='date' />
                  <InputField required name='time' type='time' />
                </div>
                <InputField required as='textarea' rows={4} name='message' placeholder='Message' />
                <button
                  disabled={loading}
                  type='submit'
                  className={`bg-orange-600 text-white py-2 rounded transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Sending...' : 'Get Started'}
                </button>
                {/* <button disabled={isSubmitting} type='submit' className="bg-orange-600 text-white py-2 rounded">Get Started</button> */}
              </Form>
            )}
          </Formik>
        </div>
        {/* <form className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Your Name" />
              <input className="border p-2 rounded" placeholder="Email Address" />
            </div>
            <input className="border p-2 rounded" placeholder="Subject" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Company (optional)" />
              <input className="border p-2 rounded" placeholder="Phone (optional)" />
            </div>
            <textarea className="border p-2 rounded" placeholder="Message" rows="4"></textarea>
            <button className="bg-orange-600 text-white py-2 rounded">Get Started</button>
          </form> */}

        <div className="p-8">
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          {/* <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <div className="space-y-4 text-sm">
            <div>
              <strong>Phone:</strong> 0298327770
            </div>
            <div>
              <strong>Email:</strong> hungrybaker.catering@gmail.com
            </div>
            <div>
              <strong>Address:</strong><br />Shop 3, 1-5 INTERCHANCE DRIVE EASTERN CREEK
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
      {/* <div className="bg-gray-100 py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {["NEW YORK", "NEW YORK", "LOS ANGELES", "LAS VEGAS"].map((city, index) => (
          <div key={index} className="text-sm space-y-2">
            <strong>{city}</strong>
            <p>301 The Greenhouse London, E2 8DY UK</p>
            <p>support@domain.com</p>
            <p>+01 8585 855 855</p>
          </div>
        ))}
      </div> */}

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