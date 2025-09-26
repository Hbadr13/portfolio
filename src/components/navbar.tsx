import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SvgIcons from '../../utils/svgIcons';
import { useRouter } from 'next/router';
import { Contact2Icon, LucideLinkedin } from 'lucide-react';

const navs = [
    { id: 0, name: 'Feed', slug: '/' },
    { id: 1, name: 'Work', slug: '/work' },
    { id: 2, name: 'Project', slug: '/project' },
    { id: 3, name: 'Education', slug: '/education' },
    { id: 4, name: 'About', slug: '/about' },
];

const profileDetails = [
    { id: 0, name: 'Available', image: 'work', type: 'text', slug: '/available' },
    { id: 1, name: 'Links', image: 'link', type: 'button', slug: '/links' },
    { id: 2, name: 'May 2001', image: 'birthDay', type: 'text', slug: '/birthDay' },
    // { id: 3, name: 'Mar 2024', image: 'work', type: 'text', slug: '/' },
];

const Navbar = () => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const fullText = `Full-Stack Developer & Software Engineer, recently graduated with a Bachelor's degree in Artificial Intelligence. Skilled in building modern, scalable web applications and passionate about integrating AI solutions to create smarter, more impactful digital experiences.`
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
    return (
        <main className={`w-full bg-pf-g overflow-hidden ${isHomePage ? '' : 'fixed top-0 left-0 right-0 z-50'}`}>
            {isHomePage ? (
                <div>
                    <div className="h-[120px] md:h-[200px] w-full relative bg-sky-700 rounded-[4px]">
                        <div className="absolute h-[100px] w-[100px] left-[30px] -bottom-[50px] md:left-[60px] rounded-full md:-bottom-[80px] md:w-[180px] md:h-[180px] bg-white p-1">
                            <Image className="w-full h-full rounded-full" src="/images/hbadr.jpeg" height={2000} width={2000} alt="hbadr" />
                        </div>
                    </div>
                    <div className="px-2 md:px-12">
                        <div className="flex justify-end mt-4 w-full space-x-2">
                            <Link
                                className="flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-2 py-0.5 md:px-6 md:py-2 bg-white text-pfbrand-stroke border border-pfbrand-stroke rounded-3xl font-semibold"
                                href="/contact"
                            >
                                <div>Contact</div>
                                <Contact2Icon />
                            </Link>
                            <Link
                                target="_blank"
                                className="flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-2 py-0.5 md:px-6 md:py-2 bg-pfbrand-stroke rounded-3xl text-white font-semibold"
                                href="https://www.linkedin.com/in/hamza-badr-3b2726202/"
                            >
                                <div>Follow</div>
                                <LucideLinkedin />
                            </Link>
                        </div>
                        <div className="mt-2 md:mt-6 space-y-4">
                            <div className="flex items-start space-x-2">
                                <div className="text-2xl md:text-4xl font-bold">Hamza Badr</div>
                                <div className="relative">
                                    <div className="relative z-10">
                                        <SvgIcons name="verifie" />
                                    </div>
                                    <div className="w-[15px] h-[15px] bg-pfbrand-stroke absolute z-20 top-0.5 left-0.5 rounded-full"></div>
                                </div>
                            </div>
                            <div className="text-pf-grey-text text-sm md:text-lg min-h-24">
                                {/* Displayed text or other content */}
                                {displayedText}
                            </div>
                            <ul className="flex items-center space-x-4">
                                {profileDetails.map((item, index) =>
                                    item.type === 'button' ? (
                                        <button
                                            key={index}
                                            className="flex items-center space-x-0.5 md:space-x-1 truncate text-sm"
                                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                        >
                                            <SvgIcons name={item.image} />
                                            <div className="text-pf-light-grey-text">{item.name}</div>
                                        </button>
                                    ) : (
                                        <li key={index} className="flex items-center space-x-0.5 md:space-x-1 truncate text-sm">
                                            <SvgIcons name={item.image} />
                                            <div className="text-pf-light-grey-text">{item.name}</div>
                                        </li>
                                    )
                                )}
                            </ul>
                            <ul className="flex items-center space-x-4">
                                {navs.map((nav, index) => (
                                    <li
                                        key={index}
                                        className={`relative before:content-[''] before:w-0 before:hover:w-[80%] before:left-1/2 before:-translate-x-1/2 before:duration-700 before:self-center before:rounded-xl before:h-0.5 before:bg-pf-brand-fill before:absolute before:bottom-0 before:z-0 z-10 duration-100 text-pf-light-grey-text font-semibold rounded-md text-center py-2 w-1/4`}
                                    >
                                        <Link
                                            href={nav.slug}
                                            className={`${router.asPath === nav.slug ? 'border-pf-brand-fill border-b-2' : ''} p-2`}
                                        >
                                            {nav.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
                    <Link href={'/'} className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-white p-1">
                            <Image className="w-full h-full rounded-full" src="/images/hbadr.jpeg" height={200} width={200} alt="hbadr" />
                        </div>
                        <div className="text-xl font-bold">Hamza Badr</div>
                    </Link>
                    <ul className="flex items-center space-x-4">
                        {navs.map((nav, index) => (
                            <li
                                key={index}
                                className={`relative before:content-[''] before:w-0 before:hover:w-[80%] before:left-1/2 before:-translate-x-1/2 before:duration-700 before:self-center before:rounded-xl before:h-0.5 before:bg-pf-brand-fill before:absolute before:bottom-0 before:z-0 z-10 duration-100 text-pf-light-grey-text font-semibold rounded-md text-center py-2 w-1/4`}
                            >
                                <Link
                                    href={nav.slug}
                                    className={`${router.asPath === nav.slug ? 'border-pf-brand-fill border-b-2' : ''} p-2`}
                                >
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <Link
                            className="flex items-center space-x-1 px-4 py-2 bg-white text-pfbrand-stroke border border-pfbrand-stroke rounded-3xl font-semibold hover:scale-105 duration-200"
                            href="/contact"
                        >
                            <div>Contact</div>
                            <Contact2Icon />
                        </Link>
                        <Link
                            target="_blank"
                            className="flex items-center space-x-1 px-4 py-2 bg-pfbrand-stroke rounded-3xl text-white font-semibold hover:scale-105 duration-200"
                            href="https://www.linkedin.com/in/hamza-badr-3b2726202/"
                        >
                            <div>Follow</div>
                            <LucideLinkedin />
                        </Link>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Navbar;