import React from 'react'
import DeliciousExperiences from '../../components/common/DeliciousExperiences'
import ImageText from '../../components/common/ImageText'
import SliderCstm from '../../components/SliderCstm'

const About = () => {

    const review = [
        {
            src: "https://lh3.googleusercontent.com/a-/ALV-UjUyz09Y4dgOh8sZ4Xhp0SyGrhtL1eZYfUrRkRphXiTXEOiiJptiEg=w54-h54-p-rp-mo-ba4-br100",
            name: "Alexander Little",
            rating: "⭐⭐⭐⭐⭐",
            description: " Delicious burger. Need to come here again there was so many great looking dishes on the menu. Service was lovely and prompt. Great outdoor shaded area for chill vibes. Definetely coming back here. Those chips were SO crispy 🍔🤯"
        },
        {
            src: "https://lh3.googleusercontent.com/a-/ALV-UjVvlQAPR4drXJkhgcwLyu5gRvHlBkdwJHRXq-ybupTs1ujhmFm3=w54-h54-p-rp-mo-ba3-br100",
            name: "Sanjeshni Lata",
            rating: "⭐⭐⭐⭐⭐",
            description: "  Just love this place. Awesome coffee, friendly atmosphere and lovely people."
        },
        {
            src: "https://lh3.googleusercontent.com/a-/ALV-UjVIB7O1z0dW2r-E2dC2s8wML47Jy2e-HGKBBUaypVAXSscoKiA=w54-h54-p-rp-mo-ba5-br100",
            name: "Chris Dow",
            rating: "⭐⭐⭐⭐⭐",
            description: "  This is the best quality food for a suit down meal in the area. Actually it's the only decent food place in the area. Big selection of meals including healthy options. Recommended. Be aware it gets very busy at lunchtime!"
        },
        {
            src: "https://lh3.googleusercontent.com/a-/ALV-UjWeh3bLk7pFb8YdHW4o6WOzIYYdqxKCyAxy1VoED1y5YDHBuJ9E=w54-h54-p-rp-mo-ba5-br100",
            name: "Bill",
            rating: "⭐⭐⭐⭐⭐",
            description: " Whenever I’m in Sydney, I take my team here as a little treat. Even though we’re a fairly large group and don’t make it easy for the poor staff by ordering in a disorganized way, the staff here are always so helpful and good humoured. It doesn’t hurt that the food is pretty decent too!"
        },
    ]
    return (
        <div className="w-full text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}>
                <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
                <h1 className="text-5xl font-bold z-10">About Us</h1>
            </section>

            {/* Info Section */}
            {/* <section className="py-16 px-4 md:px-16 bg-white grid md:grid-cols-2 gap-10 items-center">
                <img src="https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/about_img1.jpg" alt="Dining" className="rounded-lg shadow-lg" />
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
            </section> */}

            <ImageText
                // imageWrapper='min-h-[500px]'
                reverse={true}
                heading='ABOUT US'
                image='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/about_img1.jpg'
                para='Hungry Baker is a contemporary eatery set in Sydney’s leafy Hills District that brings a rich Hamptons style together with a familiar classic décor. The clean lines, accents and greenery and a light-filled alfresco area offer an intimate setting for breakfast, lunch and dinner.'
                secondPara='As a family-owned business, we strive to build an atmosphere that welcomes you in with the warmth of coming home; The surrounds and relaxed ambience are complemented by food and beverages set to heighten your senses and calm the noise of the day.'
            />


            {/* Accomplishments */}
            <section className="py-[150px] bg-cover bg-center bg-fixed text-white relative" style={{ backgroundImage: "url('https://pxdraft.com/wrap/hungry/assets/img/home-banner-2.jpg')" }}>
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
            <div>
                <ImageText
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
                <SliderCstm images={true} item={['https://media.istockphoto.com/id/867378776/photo/chef-is-working-in-an-italian-restaurant.jpg?s=612x612&w=0&k=20&c=a-MG3kO4wXiuc7jPcF2u31grt6y_hwwM11Ye4pgE2is=', 'https://media.istockphoto.com/id/530625117/photo/traditional-hungarian-xmas-rolls-bejgli.jpg?s=612x612&w=0&k=20&c=PQK8Jmd5k7vZN8sZKDPH0OQrkr6N2lyTbRT_fjuG9UY=',
                    'https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/487206015_1254290099810017_4456269061556823549_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RN8CFIQtc_EQ7kNvwEtogEy&_nc_oc=Adni03V7BqKe8HKKcgb63LjiExrv0jvZ2kYCelHdgfE0hxAeCqEStUATSrD6zJ5q9TpbUAA1wMPlUsvKcC9LiUxq&_nc_zt=23&_nc_ht=scontent.fixc4-2.fna&_nc_gid=XEUdn6F_VCOYtFLFzwwsig&oh=00_AfKNxWW503ClllwlIi-0ZQ8LV-cp7Ki_r0SRrZzMKcxkcw&oe=683270A9',
                    'https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/486639365_1253632353209125_8298364058678702170_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=68UhGyvo3BQQ7kNvwHPeNjt&_nc_oc=AdmI-gYCHXoDUerHz1VkW0_y1xom7NH2noQfvLlQlzEVlqnPilcwsUe4Y4DhBR0qYgZXeY1nzgr1Hdy2zaXA0QNk&_nc_zt=23&_nc_ht=scontent.fixc4-1.fna&_nc_gid=amTGSVgP5ODUq-m4bJxQMA&oh=00_AfLWuYjGCiSecduUpP6Y4S1hlyb3GvNbg44p32eJ-C5KZw&oe=6832771E',
                    'https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/486679754_1252974476608246_979976901725611562_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vdI6nGE4pDcQ7kNvwFpHwfc&_nc_oc=AdmKFucCYiNAWsjC0bh4a-B7-U_k1RTf1Vm1Ub6VLokCDvlcc4f6Rw1bZzHxPPPYBpHwyvwhD39x_D9ckoe6aMzB&_nc_zt=23&_nc_ht=scontent.fixc4-1.fna&_nc_gid=qJXWEdPxjaji9c4_Lvzc0Q&oh=00_AfK_2jII8DrxY2WG6okgK5wtWVysdrT0qMv4K62Nc5oM8g&oe=68327C8A'
                ]} />
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
                <SliderCstm item={review} />
            </section >

            {/* Call to Action Section */}
            {/* <DeliciousExperiences title='We create delicious experiences' bgImage='https://pxdraft.com/wrap/hungry/assets/img/home-banner-4.jpg' /> */}
        </div >
    )
}

export default About