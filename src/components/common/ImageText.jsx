import React from 'react';

const ImageText = ({
    aos,         // animation type
    offset,               // offset
    easing,
    duration,
    animation, imageWrapper, image, para, heading, secondPara, reverse = false, third }) => {
    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto px-4 md:px-10 my-16 grid md:grid-cols-2 gap-10">
                    {/* Image */}
                    <div data-aos={aos}
                        data-aos-offset={offset}
                        data-aos-duration={duration}
                        data-aos-easing={easing} className={`flex flex-col ${imageWrapper} space-y-6 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                        <img src={image} alt="Food" className="rounded-lg h-full shadow-lg object-cover w-full" />
                    </div>

                    {/* Text */}
                    <div className={`flex flex-col justify-center space-y-6 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                        <h3 className="text-3xl text-orange-600 font-serif font-semibold">{heading}</h3>
                        <p className="text-gray-600 leading-relaxed">{para}</p>
                        {secondPara && (
                            <p className="text-gray-600 leading-relaxed">{secondPara}</p>
                        )}
                        {
                            third && (
                                <p className='text-gray-600 leading-relaxed'>{third}</p>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImageText;
