import React from 'react'
import SvgIcons from '../../utils/svgIcons'
import Link from 'next/link'

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
        <div className='w-full flex flex-col  items-center    bg-pf-surface-3 relative mt-20'>
            <div className="w-full h-10 md:h-16 rounded-b-full bg-pf-white-v0 mb-10  mt:pb-20"></div>
            <div className="text-center">Copyright © 2021 Hamza Badr. All rights reserved.</div>
            <div className="flex space-x-5 items-center mt-6">
                {
                    medias.map((item, index) =>
                        <Link href={item.slug} target='_blank' key={index} className='w-12 h-12 duration-200  hover:bg-pf-surface-4 rounded-md flex justify-center items-center'>
                            <SvgIcons name={item.image} />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Footer