import React from 'react'

const TheameButton = ({ title }) => {
    return (
        <button className="px-6 py-2 w-max bg-orange-600 hover:bg-orange-700 rounded text-white font-semibold transition">
            {title}

        </button>
    )
}

export default TheameButton