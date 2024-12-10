import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SvgIcons from '../../utils/svgIcons'
import { useRouter } from 'next/router'
import { Contact, Contact2Icon, LinkedinIcon, LucideLinkedin } from 'lucide-react'

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
        type: 'text',
        slug: '/available',
    },
    {
        id: 1,
        name: 'Links',
        image: 'link',
        type: 'button',
        slug: '/links',
    },
    {
        id: 2,
        name: 'May 2001',
        image: 'birthDay',
        type: 'text',
        slug: '/birthDay',
    },
    {
        id: 3,
        name: 'Mar 2024',
        image: 'work',
        type: 'text',
        slug: '/',
    },

]
const Navbar = () => {
    const fullText = `Full-Stack Developer ✨ with extensive experience in developing sophisticated web applications and a deep background in AI. Skilled at integrating AI technologies to enhance functionality and drive innovation.`
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const typewriterEffect = setInterval(() => {
            if (currentIndex + 1 < fullText.length) {
                setDisplayedText((prev) => prev + fullText[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(typewriterEffect);
            }
        }, 10);

        return () => clearInterval(typewriterEffect);
    }, [fullText]);
    const ScrollToEnd = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Optional: Add smooth scrolling effect
        });
    }
    const route = useRouter()
    return (
        <main className='w-full bg-pf-g overflow-hidden'>

            <div className=" h-[120px] md:h-[250px] w-full relative bg-sky-700 rounded-[4px]">
                <div className="absolute h-[100px] w-[100px] left-[30px] -bottom-[50px] md:left-[60px]  rounded-full md:-bottom-[80px] md:w-[180px] md:h-[180px]  bg-white p-1">
                    <Image className='w-full h-full rounded-full' src={'/images/hbadr.jpeg'} height={2000} width={2000} alt='hbadr' />
                </div>
            </div>
            <div className="px-2 md:px-12">
                <div className="flex justify-end mt-4 w-full space-x-2">

                    <Link className='flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-2 py-0.5 md:px-6 md:py-2 bg-white text-pfbrand-stroke border border-pfbrand-stroke rounded-3xl  font-semibold' href={'/contact'}>
                        <div className="">
                            Contact
                        </div>
                        <Contact2Icon />
                    </Link>
                    <Link target='_blank' className='flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-2 py-0.5 md:px-6 md:py-2 bg-pfbrand-stroke rounded-3xl text-white font-semibold' href={'https://www.linkedin.com/in/hamza-badr-3b2726202/'}>
                        <div className="">
                            Follow
                        </div>
                        <LucideLinkedin />
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
                    <div className="text-pf-grey-text text-sm md:text-lg  min-h-24">
                        {/* {displayedText} */}
                    </div>
                    <ul className="flex items-center space-x-4">
                        {profileDetails.map((item, index) =>

                            item.type == 'button' ?
                                <button onClick={ScrollToEnd} key={index} className="  flex items-center space-x-0.5 md:space-x-1 truncate text-sm">
                                    <SvgIcons name={item.image} />
                                    <div className="text-pf-light-grey-text">{item.name}</div>
                                </button> :
                                <li key={index} className="flex items-center space-x-0.5 md:space-x-1 truncate text-sm">
                                    <SvgIcons name={item.image} />
                                    <div className="text-pf-light-grey-text">{item.name}</div>
                                </li>
                        )}
                    </ul>
                    <ul className="flex items-center space-x-4">
                        {navs.map((nav, index) =>
                            <li key={index}
                                className={`relative before:content-[''] before:w-0 before:hover:w-[80%] before:left-1/2 before:-translate-x-1/2 before:duration-700 before:self-center before:rounded-xl before:h-0.5 before:bg-pf-brand-fill before:absolute before:bottom-0  before:z-0 z-10 duration-100 text-pf-light-grey-text font-semibold rounded-md text-center py-2 w-1/4`}
                            >
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
