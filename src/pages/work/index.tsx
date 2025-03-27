import Link from 'next/link'
import React from 'react'
import SvgIcons from '../../../utils/svgIcons'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export const workApi = [
    {
        id: 0,
        name: 'Full stack developer',
        company: {
            name: 'ALKora',
            image: '/images/alkora-logo.png',
        },
        image: '/images/workBack2.png',
        desrciption: 'Built high-quality web applications, focusing on clean code, efficient design, optimizing user experience and backend functionality',
        startTime: 'March 2024',
        endTime: 'October 2024',
        country: 'Morroco',
        city: 'Agadir',
        type: 'Internship',
        location: 'remote',
        skils: [
            'NextJs', 'Tailwind', 'CSS', 'TypeScript'
        ],
        private: false,
        slug: '/work/job/aLKora-full-stack'
    },
    {
        id: 0,
        name: 'Full Stack Mobile Development',
        company: {
            name: 'Moojbuzz',
            image: '/images/moojbuz.svg',
        },
        image: '/images/workBack1.png',
        desrciption: 'Focused on end-to-end mobile development, creating frontend interfaces and backend systems for responsive, scalable apps.',
        startTime: 'March 2024',
        endTime: 'December 2024',
        country: 'French',
        city: 'French',
        type: 'StartUp',
        location: 'remote',
        skils: [
            'React Native', 'NestJs', 'Dockder', 'Git', 'Tailwind', 'CSS', 'TypeScript'
        ],
        private: true,
        slug: '/work/job/moojbuzz-mobile-developer',
    },
]

export const AnimatedText = ({ text }: { text: string }) => {
    return (
        <div className="flex">
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className="letter"
                    style={{ animationDelay: `${index * 0.03}s` }} // Delay for each letter
                >
                    {letter == ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </div>
    );
};

const index = () => {
    return (
        <div className="">
            <div className=" overflow-hidden relative w-full pb-20 pt-28 md:pb-32 md:pt-36 bg-[#d5ecfd]">
                <div className=" relative z-10 w-full mx-auto max-w-6xl space-y-8 md:space-y-14">
                    <div className=" text-4xl md:text-6xl text-center font-semibold">Career, Experience & Technical Contributions</div>
                    <div className="w-full flex justify-center">
                        <div className="bg-indigo-200 rounded-[70px] p-1.5 ">
                            <div className="bg-indigo-600 rounded-[70px] text-white font-semibold py-1.5 px-3">Our Work</div>
                        </div>
                    </div>
                    <div className="text-lg font-medium text-center">
                        Designing and Developing Scalable, High-Performance Web & Mobile Applications—Enhancing User Experience, Optimizing Backend Systems, and Driving Innovation Through Cutting-Edge Technologies
                    </div>
                </div>
                <Image className='absolute w-full object-cover opacity-50 top-0 z-0' src={'/bg/2.png'} fill alt='bg' />
            </div>
            <div className='mt-24 md:mt-24  w-full max-w-5xl mx-auto px-2'>
                <ul className='space-y-10 md:space-y-10 '>
                    {
                        workApi.map((item, index) => {
                            const { ref, inView } = useInView({
                                threshold: 0.8,
                                triggerOnce: true,
                            });
                            return (
                                <li ref={ref} key={index} className="rounded-md md:rounded-3xl overflow-hidden  p-4 md:p-0 ml-0 md:pl-12 cursor-pointer flex flex-col justify-end space-y-4 bg-pf-project-card-background w-full    hover:scale-[101.2%] hover:shadow-inner duration-300">
                                    <h1 className=' hidden md:block pt-4 translate-y-9 text-2xl md:text-3xl truncate font-bold  text-pf-black '>
                                        {

                                            inView && <AnimatedText text={item.name} />
                                        }

                                    </h1>
                                    <h1 className=' md:hidden block  text-center text-2xl md:text-3xl truncate font-bold  text-pf-black '>
                                        {item.name}
                                    </h1>
                                    <div className="w-full  flex  ">
                                        <div className="w-full md:w-[55%] py-3  flex flex-col justify-center space-y-6 md:space-y-8 group overflow-hidden">
                                            <div className="flex flex-col md:flex-row items-center  space-y-1.5 md:space-y-0 space-x-0 md:space-x-2 text-pf-grey-text ">
                                                <Image className='w-9 h-9 rounded-md' src={item.company.image} width={1000} height={1000} alt={item.company.name} />
                                                <div className="uppercase text-sm font-bold text-gray-800">{item.company.name}</div>
                                                <div className=" hidden md:block w-1.5 h-1.5 bg-pf-callout-bar-accent rounded-full"></div>
                                                <div className="flex items-center space-x-2">

                                                    <div className=" text-xs md:text-sm space-x-1 group-hover:md:hidden ">
                                                        <span className="">{item.startTime}</span>
                                                        <span className="">-</span>
                                                        <span className="">{item.endTime}</span>
                                                    </div>
                                                    <div className="text-sm space-x-1 hidden md:block group-hover:md:block ">
                                                        <span className="capitalize">{item.type}</span>
                                                    </div>
                                                </div>
                                                <span className="capitalize text-sm block md:hidden">{item.type}</span>

                                            </div>
                                            <div className="text-lg   first-letter:capitalize">{item.desrciption}</div>
                                            <Link href={item.slug} className={` truncate duration-1000 ${inView ? 'translate-x-2 ' : '-translate-x-28 opacity-0'} group/link rounded-xl   w-max  p-3 md:p-5 font-semibold text-lg text-pf-dim-grey bg-white flex items-center space-x-2`}>
                                                <div>Explore the Project</div>
                                                <div className="group-hover/link:translate-x-1 duration-200">
                                                    <SvgIcons name='arrawV3' />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className=" hidden w-0 md:w-[45%] md:flex items-end">
                                            <Image alt='frame'
                                                className={` duration-1000 ${inView ? 'translate-x-1 translate-y-2 opacity-100' : 'translate-x-28 translate-y-6 opacity-0'}   object-contain drop-shadow-[-1px_-1px_10px_rgba(112,112,114,0.3)]`}
                                                width={3000} height={3000} objectFit='cover' src={item.image} />
                                        </div>
                                    </div>
                                </li>)
                        }
                        )
                    }
                </ul>

            </div>
            <div className="h-14 md:h-28"></div>
        </div>
    )
}

export default index