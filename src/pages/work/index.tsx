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
        endTime: 'Present',
        country: 'Morroco',
        city: 'Agadir',
        type: 'Internship',
        location: 'remote',
        skils: [
            'NextJs', 'Tailwind', 'CSS', 'TypeScript'
        ],
        private: false,
        slug: '/work/job/full-stack-042024'
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
        endTime: 'Present',
        country: 'Morroco',
        city: 'Agadir',
        type: 'StartUp',
        location: 'remote',
        skils: [
            'NextJs', 'Tailwind', 'CSS', 'TypeScript'
        ],
        private: true,
        slug: '/work/job/mobile-developer-022024',
    },
]

const AnimatedText = ({ text }: { text: string }) => {
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
        <div className='mt-10 md:mt-20'>
            <ul className='space-y-10 md:space-y-10 '>
                {
                    workApi.map((item, index) => {
                        const { ref, inView } = useInView({
                            threshold: 0.8,
                            triggerOnce: true,

                        });
                        return (
                            <li ref={ref} key={index} className="rounded-xl overflow-hidden  p-4 md:p-0 ml-0 md:pl-12 cursor-pointer flex flex-col justify-end space-y-4 bg-pf-project-card-background w-full h-[300px] md:h-[380px]   hover:scale-[101.2%] hover:shadow-inner duration-300">
                                <h1 className='text-3xl truncate font-bold  text-pf-black '>
                                    <AnimatedText text={item.name} />
                                    {/* {item.name} */}
                                </h1>
                                <div className="w-full  flex  ">
                                    <div className="w-full md:w-[55%] py-3  flex flex-col justify-center space-y-5 group overflow-hidden">
                                        <div className="flex items-center space-x-2 text-pf-grey-text ">
                                            <Image className='w-9 h-9 rounded-md' src={item.company.image} width={1000} height={1000} alt={item.company.name} />
                                            <div className="uppercase text-sm font-bold text-gray-800">{item.company.name}</div>
                                            <div className="w-1.5 h-1.5 bg-pf-callout-bar-accent rounded-full"></div>
                                            <div className="text-sm space-x-1 block group-hover:hidden ">
                                                <span className="">{item.startTime}</span>
                                                <span className="">-</span>
                                                <span className="">{item.endTime}</span>
                                            </div>
                                            <div className="text-sm space-x-1 hidden group-hover:block ">
                                                <span className="capitalize">{item.type}</span>
                                            </div>
                                        </div>
                                        <div className="text-lg   first-letter:capitalize">{item.desrciption}</div>
                                        <Link href={item.slug} className={` truncate duration-1000 ${inView ? 'translate-x-2 ' : '-translate-x-28 opacity-0'} group/link rounded-xl   w-max  p-5 font-semibold text-lg text-pf-dim-grey bg-white flex items-center space-x-2`}>
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
    )
}

export default index