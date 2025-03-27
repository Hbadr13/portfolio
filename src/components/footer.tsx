import React from 'react'
import SvgIcons from '../../utils/svgIcons'
import Link from 'next/link'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
    const medias = [
        {
            image: 'linkedin',
            slug: 'https://www.linkedin.com/in/hamza-badr-3b2726202/',
        },
        {
            image: 'twitter',
            slug: '#',
        },
        {
            image: 'facebook',
            slug: 'https://web.facebook.com/hamza.badr.9887',
        },
        {
            image: 'github',
            slug: 'https://github.com/Hbadr13',
        },
    ]
    return (
        <div className=' '>
            <div className="mt-20 max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 to-blue-400 rounded-[80px] shadow-lg py-16 px-8 text-center animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white mb-4">Let’s Build Something Amazing Together!</h2>
                <p className="text-lg text-gray-200 mb-6">I’m always open to new opportunities and collaborations. Feel free to reach out!</p>
                <div className="w-full flex justify-center">
                    <div className="p-1 bg-indigo-200 rounded-[32px] w-max">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-[30px] font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col  items-center py-6 space-y-10">
                <div className="flex space-x-5 items-center mt-6">
                    {
                        medias.map((item, index) =>
                            <Link href={item.slug} target='_blank' key={index} className='w-12 h-12 duration-200  hover:bg-pf-surface-4 rounded-md flex justify-center items-center'>
                                <SvgIcons name={item.image} />
                            </Link>
                        )
                    }
                </div>
                <div className="flex justify-center items-center mx-auto w-full space-x-4">
                    <SiGmail className='text-gray-600 w-7 h-7' />
                    <div className="text-lg ">hamzabadrbus@gmail.com</div>
                </div>
                <div className="text-center pb-10 mt-2">Copyright © 2024 Hamza Badr. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer