import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SvgIcons from '../../utils/svgIcons'
import { useRouter } from 'next/router'
const Navbar = () => {

    const navs = [
        {
            id: 0,
            name: 'Feed',
            slug: '/',
        },
        {
            id: 1,
            name: 'Work',
            slug: '/work',
        },
        {
            id: 2,
            name: 'Project',
            slug: '/project',
        },
        {
            id: 3,
            name: 'Education',
            slug: '/education',
        },
        {
            id: 3,
            name: 'About',
            slug: '/about',
        },

    ]
    const profileDetails = [
        {
            id: 0,
            name: 'Available',
            image: 'work',
            type: '',
            slug: '/available',
        },
        {
            id: 1,
            name: 'Links',
            image: 'link',
            type: '',
            slug: '/links',
        },
        {
            id: 2,
            name: 'May 2001',
            image: 'birthDay',
            type: '',
            slug: '/birthDay',
        },
        {
            id: 3,
            name: 'Joined Jan 2023',
            image: 'work',
            type: '',
            slug: '/',
        },

    ]

    const route = useRouter()
    return (
        <main className='w-full bg-pf-g overflow-hidden'>

            <div className=" h-[120px] md:h-[250px] w-full relative bg-sky-700 rounded-[4px]">
                <div className="absolute h-[100px] w-[100px] left-[30px] -bottom-[50px] md:left-[60px]  rounded-full md:-bottom-[80px] md:w-[180px] md:h-[180px]  bg-white p-1">
                    <Image className='w-full h-full rounded-full' src={'/images/hbadr.jpeg'} height={2000} width={2000} alt='hbadr' />
                </div>
            </div>
            <div className="px-2 md:px-12">
                <div className="flex justify-end mt-4 w-full">
                    <div className="w-10 h-2" />
                    <Link target='_blank' className='flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-2 py-0.5 md:px-6 md:py-2 bg-pfbrand-stroke rounded-3xl text-white font-semibold' href={'https://www.linkedin.com/in/hamza-badr-3b2726202/'}>
                        <div className="">
                            Follow
                        </div>
                        <div className="">
                            <svg
                                baseProfile="tiny"
                                viewBox="0 0 24 24"
                                fill="white"
                                height="25px"
                                width="25px"
                            >
                                <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z" />
                                <path d="M8.05 6.5 A1.55 1.5 0 0 1 6.5 8 A1.55 1.5 0 0 1 4.95 6.5 A1.55 1.5 0 0 1 8.05 6.5 z" />
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="mt-2 md:mt-6 space-y-4">
                    <div className="flex items-start space-x-2">
                        <div className="text-2xl md:text-4xl font-bold">Hamza Badr</div>
                        <div className="relative">
                            <div className="relative z-10">
                                <SvgIcons name={'verifie'} />
                            </div>
                            <div className="w-[15px] h-[15px] bg-pfbrand-stroke absolute z-20 top-0.5 left-0.5 rounded-full"></div>
                        </div>
                    </div>
                    <div className="text-pf-grey-text text-sm md:text-lg">
                        Full-Stack Developer ✨ with extensive experience in developing sophisticated web applications and a deep background in AI. Skilled at integrating AI technologies to enhance functionality and drive innovation.
                    </div>
                    <ul className="flex items-center space-x-4">
                        {profileDetails.map((item, index) =>
                            <li key={index} className="flex items-center space-x-0.5 md:space-x-1 truncate text-sm">
                                <SvgIcons name={item.image} />
                                <div className="text-pf-light-grey-text">{item.name}</div>
                            </li>
                        )}
                    </ul>
                    <ul className="flex items-center space-x-4">
                        {navs.map((nav, index) =>
                            <li key={index} className="text-pf-light-grey-text font-semibold  hover:bg-pf-bg-grey rounded-md  duration-200 text-center  py-2 w-1/4 ">
                                <Link
                                    href={nav.slug}
                                    className={`${route.asPath == nav.slug ? 'border-pf-brand-fill border-b-2' : ''}  p-2`}
                                >
                                    {nav.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </main >
    )
}

export default Navbar