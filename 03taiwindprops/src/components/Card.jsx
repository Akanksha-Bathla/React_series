import React from 'react'

function Card({image, title, description}) {
    // Default values for props
    image = image || "https://images.pexels.com/photos/32158061/pexels-photo-32158061/free-photo-of-elegant-woman-in-pink-dress-in-grassy-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
    title = title || "Noteworthy technology acquisitions 2021";
    description = description || "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";

    return (
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
        </a>
    )
}

export default Card