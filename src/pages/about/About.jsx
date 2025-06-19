import React, { useEffect, useRef, useState } from 'react'
import DeliciousExperiences from '../../components/common/DeliciousExperiences'
import ImageText from '../../components/common/ImageText'
import SliderCstm from '../../components/SliderCstm'
import chris from "../../assets/images/chris.png"
import star_img from "../../assets/images/star_img.png"
import sanjeshni from "../../assets/images/sanjeshni.png"
import bill from "../../assets/images/bill.png"
import slider_Ladki_image from "../../assets/images/slider_Ladki_image.jpg"
import knife_cake_img from "../../assets/images/knife-cake.jpg"
import about_img1 from "../../assets/images/kitchen.jpg"
import chawal_img1 from "../../assets/images/chawal.jpg"
import aamlet_img1 from "../../assets/images/aamlet.jpg"
import role_img1 from "../../assets/images/role.jpg"
import { Link } from 'react-router-dom'

const stats = [
    { label: 'Visitors daily', value: '200 +' },
    { label: 'Deliveries monthly', value: '400 +' },
    { label: 'Positive feedback', value: '100%' },
    { label: 'Awards and honors', value: '40 +' },
];


const About = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [counters, setCounters] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        stats.forEach((stat, i) => {
            const numericValue = parseInt(stat.value); // Extract numeric part
            let start = 0;
            const duration = 2000; // 1.5 seconds
            const increment = Math.ceil(numericValue / (duration / 16));

            const interval = setInterval(() => {
                start += increment;
                if (start >= numericValue) {
                    start = numericValue;
                    clearInterval(interval);
                }
                setCounters(prev => {
                    const updated = [...prev];
                    updated[i] = start;
                    return updated;
                });
            }, 16); // ~60fps
        });
    };

    const review = [
        {
            src: star_img,
            name: "Alexander Little",
            rating: "⭐⭐⭐⭐⭐",
            description: " Delicious burger. Need to come here again there was so many great looking dishes on the menu. Service was lovely and prompt. Great outdoor shaded area for chill vibes. Definetely coming back here. Those chips were SO crispy 🍔🤯"
        },
        {
            src: sanjeshni,
            name: "Sanjeshni Lata",
            rating: "⭐⭐⭐⭐⭐",
            description: "  Just love this place. Awesome coffee, friendly atmosphere and lovely people."
        },
        {
            src: chris,
            name: "Chris Dow",
            rating: "⭐⭐⭐⭐⭐",
            description: "  This is the best quality food for a suit down meal in the area. Actually it's the only decent food place in the area. Big selection of meals including healthy options. Recommended. Be aware it gets very busy at lunchtime!"
        },
        {
            src: bill,
            name: "Bill",
            rating: "⭐⭐⭐⭐⭐",
            description: " Whenever I’m in Sydney, I take my team here as a little treat. Even though we’re a fairly large group and don’t make it easy for the poor staff by ordering in a disorganized way, the staff here are always so helpful and good humoured. It doesn’t hurt that the food is pretty decent too!"
        },
    ]
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

                <div className="relative z-10 text-center px-4 md:px-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
                        Discover Our Story
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                        From heartwarming recipes to unforgettable experiences — learn why Hungry Baker is more than just food.
                    </p>
                    <Link to="/event">
                        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                            Book a Table
                        </button>
                    </Link>
                </div>
            </section>


            <ImageText
                aos="fade-left"
                anchor="#example-anchor"
                offset="500"
                duration="500"
                // imageWrapper='min-h-[500px]'
                reverse={true}
                heading='ABOUT US'
                image={about_img1}
                para='Hungry Baker is a contemporary eatery set in Sydney’s leafy Hills District that brings a rich Hamptons style together with a familiar classic décor. The clean lines, accents and greenery and a light-filled alfresco area offer an intimate setting for breakfast, lunch and dinner.'
                secondPara='As a family-owned business, we strive to build an atmosphere that welcomes you in with the warmth of coming home; The surrounds and relaxed ambience are complemented by food and beverages set to heighten your senses and calm the noise of the day.'
            />


            {/* Accomplishments */}
            <section
                ref={sectionRef}
                className="py-[90px] md:py-[150px] bg-cover bg-center bg-fixed text-white relative"
                style={{
                    backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full"></div>

                <div className="relative z-10 text-center">
                    <h2 data-aos="fade-down" className="text-3xl font-bold mb-10">Our accomplishments</h2>
                    <div data-aos="zoom-in-up" className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center px-4">
                        {stats.map((item, i) => (
                            <div key={i} className="bg-white text-black p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl lg:text-6xl font-bold">
                                    {counters[i]}
                                    {stats[i].value.replace(/[0-9]/g, '')}
                                </h3>
                                <p className='pt-4'>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div>
                <ImageText
                    aos="fade-right"
                    offset="500"
                    easing="ease-in-sine"
                    duration="500"
                    // imageWrapper='min-h-[500px]'
                    heading='OUR COFFEE'
                    image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/about_img4.jpg'
                    para='Five Senses was born out of a boundless enthusiasm for sharing delicious coffee and the desire to create a business that would nurture all those it touched.'
                    secondPara='We believe that delicious coffee has an incredible ability to connect people, relationships that make the world just that little bit better. Explore with us as we track the path from origin to your cup.'
                />
            </div>

            {/* Team Section */}
            <section className="py-16 px-4 md:px-16">
                <h3 className="text-center text-orange-500 text-sm font-semibold">Our Specials</h3>
                <h2 className="text-center text-3xl font-bold mb-10">A Taste You’ll Never Forget</h2>
                <SliderCstm images={true} item={[knife_cake_img, slider_Ladki_image,
                    aamlet_img1,
                    chawal_img1,
                    role_img1
                ]} />
            </section>

        </div >
    )
}

export default About