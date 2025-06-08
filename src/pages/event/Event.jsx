import React, { useRef, useState } from 'react';
import ImageText from '../../components/common/ImageText';
import InputField from '../../components/common/InputField';
import { Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

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
            <div className="relative h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: `url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-5.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div data-aos="fade-down" className="z-10 text-center">
                    <h2 className="text-4xl mt-2">Event</h2>
                </div>
            </div>

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

            <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
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
