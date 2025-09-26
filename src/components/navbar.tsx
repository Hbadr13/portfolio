import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SvgIcons from '../../utils/svgIcons';
import { useRouter } from 'next/router';
import { Contact2Icon, LucideLinkedin, Menu, X } from 'lucide-react';

const navs = [
    { id: 0, name: 'Feed', slug: '/' },
    { id: 1, name: 'Experience', slug: '/experience' },
    { id: 2, name: 'Projects', slug: '/projects' },
    { id: 3, name: 'Education', slug: '/education' },
    { id: 4, name: 'About', slug: '/about' },
];

const profileDetails = [
    { id: 0, name: 'Available', image: 'work', type: 'text', slug: '/available' },
    { id: 1, name: 'Links', image: 'link', type: 'button', slug: '/links' },
    { id: 2, name: 'May 2001', image: 'birthDay', type: 'text', slug: '/birthDay' },
];

const Navbar = () => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const [displayedText, setDisplayedText] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const fullText = `I am a Full-Stack Developer and Software Engineer with a Bachelor's degree in Artificial Intelligence. I build scalable and modern web applications, and I am passionate about applying AI to create smarter, more impactful digital solutions.`;

    useEffect(() => {
        let currentIndex = 0;

        const typewriterEffect = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typewriterEffect);
            }
        }, 10);

        return () => clearInterval(typewriterEffect);
    }, [fullText]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
        <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-2 lg:space-x-4'}`}>
            {/* <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-2 lg:space-x-4'}`}> */}
            {navs.map((nav) => (
                <li
                    key={nav.id}
                    className={`relative before:content-[''] before:w-0 before:hover:w-[80%] before:left-1/2 before:-translate-x-1/2 before:duration-700 before:self-center before:rounded-xl before:h-0.5 before:bg-pf-brand-fill before:absolute before:bottom-0 before:z-0 z-10 duration-100 text-pf-light-grey-text font-semibold rounded-md text-center ${isMobile ? 'py-2 w-full' : 'py-2 w-auto px-2'
                        }`}
                >
                    <Link
                        href={nav.slug}
                        className={`${router.asPath === nav.slug ? 'border-pf-brand-fill border-b-2' : ''} p-2 block`}
                        onClick={() => isMobile && setIsMobileMenuOpen(false)}
                    >
                        {nav.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    const ActionButtons = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={`${isMobile ? 'flex flex-col space-y-4 mt-4' : 'flex items-center space-x-2 lg:space-x-4'}`}>
            <Link
                className="flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-3 py-2 lg:px-6 lg:py-2 bg-white text-pfbrand-stroke border border-pfbrand-stroke rounded-3xl font-semibold text-sm lg:text-base"
                href="/contact"
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
                <div>Contact</div>
                <Contact2Icon className="w-4 h-4 lg:w-5 lg:h-5" />
            </Link>
            <Link
                target="_blank"
                className="flex justify-between items-center hover:scale-105 duration-200 space-x-1 px-3 py-2 lg:px-6 lg:py-2 bg-pfbrand-stroke rounded-3xl text-white font-semibold text-sm lg:text-base"
                href="https://www.linkedin.com/in/hamza-badr-3b2726202/"
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
                <div>Follow</div>
                <LucideLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
            </Link>
        </div>
    );

    if (isHomePage) {
        return (
            <main className="w-full bg-pf-g overflow-hidden">
                {/* Header Section */}
                <div className="h-[100px] sm:h-[120px] md:h-[160px] lg:h-[200px] w-full relative bg-sky-700 rounded-[4px]">
                    <div className="absolute h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] left-[20px] sm:left-[30px] -bottom-[40px] sm:-bottom-[50px] md:left-[40px] lg:left-[60px] rounded-full lg:-bottom-[80px] lg:w-[180px] lg:h-[180px] bg-white p-1">
                        <Image
                            className="w-full h-full rounded-full"
                            src="/images/hbadr.jpeg"
                            height={2000}
                            width={2000}
                            alt="Hamza Badr"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Action Buttons - Top */}
                    <div className="flex justify-end mt-4 lg:mt-6 w-full space-x-2">
                        <ActionButtons />
                    </div>

                    {/* Profile Info */}
                    <div className="mt-2 md:mt-4 lg:mt-6 space-y-3 lg:space-y-4">
                        {/* Name and Verification */}
                        <div className="flex items-start space-x-2">
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Hamza Badr</div>
                            <div className="relative">
                                <div className="relative z-10">
                                    <SvgIcons name="verifie" />
                                </div>
                                <div className="w-3 h-3 sm:w-[15px] sm:h-[15px] bg-pfbrand-stroke absolute z-20 top-0.5 left-0.5 rounded-full"></div>
                            </div>
                        </div>

                        {/* Bio Text */}
                        <div className="text-pf-grey-text text-xs sm:text-sm md:text-base lg:text-lg min-h-[60px] sm:min-h-20 md:min-h-24 leading-relaxed">
                            {displayedText}
                        </div>

                        {/* Profile Details */}
                        <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
                            {profileDetails.map((item) =>
                                item.type === 'button' ? (
                                    <button
                                        key={item.id}
                                        className="flex items-center space-x-1 sm:space-x-1.5 truncate text-xs sm:text-sm"
                                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                    >
                                        <SvgIcons name={item.image} />
                                        <div className="text-pf-light-grey-text">{item.name}</div>
                                    </button>
                                ) : (
                                    <li key={item.id} className="flex items-center space-x-1 sm:space-x-1.5 truncate text-xs sm:text-sm">
                                        <SvgIcons name={item.image} />
                                        <div className="text-pf-light-grey-text">{item.name}</div>
                                    </li>
                                )
                            )}
                        </ul>

                        {/* Navigation */}

                        <div className="pt-2 w-full overflow-x-scroll md:overflow-x-hidden">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo and Name */}
                <Link href={'/'} className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full bg-white p-1">
                        <Image
                            className="w-full h-full rounded-full"
                            src="/images/hbadr.jpeg"
                            height={200}
                            width={200}
                            alt="Hamza Badr"
                        />
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">Hamza Badr</div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-4">
                    <NavLinks />
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex items-center space-x-4">
                    <ActionButtons />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-6">
                    <div className="flex flex-col space-y-6">
                        <NavLinks isMobile={true} />
                        <ActionButtons isMobile={true} />
                    </div>
                </div>
            )}
        </main>
    );
};

export default Navbar;