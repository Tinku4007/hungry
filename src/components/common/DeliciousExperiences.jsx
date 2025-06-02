import React from 'react'
import { Link } from 'react-router-dom'

const DeliciousExperiences = ({title , bgImage , to}) => {
    return (
        <section
            className="relative bg-cover bg-center py-[100px] md:py-[200px] flex items-center justify-center text-white text-center px-6"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${bgImage}')`,  backgroundAttachment:"fixed", }}
        >
            <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-8">{title}</h2>
                    <Link to={to} className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">Book a Table Now</Link>
                </div>
        </section>
    )
}

export default DeliciousExperiences