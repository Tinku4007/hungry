import React, { useRef, useState } from 'react';
import ImageText from '../../components/common/ImageText';
import InputField from '../../components/common/InputField';
import { Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import event_page_img from "../../assets/images/event_page.jpg"
import { Link } from 'react-router-dom';

const Event = () => {
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
        <>
            <section
                className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${event_page_img})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div data-aos="fade-down" className="relative z-10 text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                        Host Your Event with Us
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                        Celebrate with style, flavor, and a warm atmosphere. Let’s make your next event unforgettable.
                    </p>
                    {/* <Link to="#enquire" className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                        Make an Enquiry
                    </Link> */}
                </div>
            </section>

            <ImageText
                aos="fade-right"
                offset="500"
                easing="ease-in-sine"
                duration="500"
                heading='EVENT'
                image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/events_p_1.jpg'
                para='Hungry Bakers is a home away from home open for Breakfast and Lunch Monday to Friday...'
                secondPara='Chat with our team next time you’re in to discuss your event or contact us by phone or email.'
            />

            <section id='enquire' className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
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

                    <div data-aos="zoom-in-up" duration="500" offset="500" className='relative'>
                        <img src='https://img.freepik.com/free-photo/smiling-woman-headset-presentation-something_329181-11710.jpg' alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;
