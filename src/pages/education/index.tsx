import Link from 'next/link'
import React from 'react'
import SvgIcons from '../../../utils/svgIcons'
import Image from 'next/image'
import { AnimatedText } from '../work'
import { useInView } from 'react-intersection-observer'

const educationApi = [
    {
        id: 0,
        school: {
            name: '1337 Coding School',
            image: '/images/1337_future_is_loading_logo.jpeg',
            country: 'Morroco',
            city: 'khouribga',
        },
        branch: 'Software engineer',
        description: `1337 is the first institution to provide free IT training in Morocco. Its educational approach is based on peer learning, a participatory method that allows students to unleash their creativity through project-based learning, preparing the future coders of tomorrow.
        1337 is the coding school par excellence, offering a full immersion in a universe where the future is already present.`,
        startTime: 'Nov 2021',
        endTime: 'Present',
        slug: 'https://1337.ma/'
    },
    {
        id: 1,
        school: {
            name: 'Faculté Polydisciplinaire de Khouribga',
            image: '/images/FP-Khouribga.jpeg',
            country: 'Morroco',
            city: 'khouribga',
        },
        branch: 'Sciences mathématiques informatique et applications',
        description: `The Faculté Polydisciplinaire de Khouribga (FPK), established in 2004 as part of Morocco's decentralization and regionalization policies, is a multidisciplinary university under Sultan Moulay Slimane University. FPK offers a variety of initial and continuing education programs across fundamental and professional disciplines to meet the needs of the region it serves.`,
        startTime: 'Sept 2019',
        endTime: 'July 2024',
        slug: 'http://www.fpk.ac.ma/'
    },
    {
        id: 2,
        school: {
            name: 'Lycee ibn tofail Oued Zem',
            image: '',
            country: 'Morroco',
            city: 'oued zem',
        },
        branch: 'Baccalaureate of physics sciences',
        description: `The program of the physical sciences branch includes the following main subjects: Physics and Chemistry, Mathematics, Life and Earth Sciences, and others.`,
        startTime: '2019',
        endTime: '',
        slug: '#'
    },
]

const index = () => {

    return (
        <div className=' mt-40 w-full max-w-5xl mx-auto'>
            <ul className='space-y-10 '>
                {
                    educationApi.map((item, index) => {
                        const { ref, inView } = useInView({
                            threshold: 0,
                            triggerOnce: true,
                        });
                        return (
                            <li ref={ref} key={index} className="w-full flex   hover:bg-pf-surface-2 rounded-xl px-0 md:p-4 space-x-1.5  md:space-x-4">
                                <div className={` duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                    {
                                        item.school.image ?
                                            <Image className=' mt-1 w-8 h-8 md:w-12 md:h-12 object-center object-cover rounded-md' src={item.school.image} height={2000} width={2000} alt={item.school.name} />
                                            : <div className='mt-1 w-8 h-8 md:w-12 md:h-12 rounded-md bg-pfbrand-stroke flex justify-center items-center text-white font-semibold'>{item.school.name[0]}</div>
                                    }
                                </div>
                                <div className="space-y-5 w-[calc(100%-50px)]">
                                    <div className="">
                                        <div className="flex flex-col md:flex-row space-x-2 items-start md:items-center group">
                                            <Link target='_blank' href={item.slug}
                                                className=" relative text-xl truncate font-bold before:content-[''] before:w-[0%] before:hover:w-full before:h-1 before:z-0 before:absolute before:bg-transparent  before:hover:bg-pf-brand-fill/50 before:duration-700 before:rounded-full  z-10 before:bottom-0"
                                            >
                                                {inView && <AnimatedText text={item.school.name} />}
                                            </Link>
                                            <div className="opacity-0 group-hover:opacity-100 duration-200 hidden md:block">
                                                <SvgIcons name='link' />
                                            </div>
                                            <div className="hidden md:block w-0 h-0 md:w-1.5 md:h-1.5 rounded-full bg-pf-dim-grey" />
                                            <div className="text-xs flex space-x-1 items-center truncate ">
                                                <div className="">{item.startTime}</div>
                                                {item.endTime && <span className="">-</span>}
                                                <span className="">{item.endTime}</span>
                                            </div>
                                        </div>
                                        <div className="text-pf-light-grey-text">{item.branch}</div>
                                    </div>
                                    <div className="text-sm  md:text-lg">{item.description}</div>
                                </div>
                            </li>

                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default index 