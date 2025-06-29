import React from 'react'
import { Link } from 'react-router-dom'

const TheameButton = ({ title , to , target }) => {
    return (
        <Link to={to} target={target} className="px-6 py-2 w-max bg-orange-600 hover:bg-orange-700 rounded text-white font-semibold transition">
            {title}
        </Link>
    )
}

export default TheameButton