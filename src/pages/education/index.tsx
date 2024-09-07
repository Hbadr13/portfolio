import Link from 'next/link'
import React from 'react'
import SvgIcons from '../../../utils/svgIcons'
import Image from 'next/image'

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
        startTime: 'November 2021',
        endTime: 'Present',
        slug: 'https://1337.ma/'
    },
    {
        id: 1,
        school: {
            name: 'Faculté Polydisciplinaire de Khouribga',
            image: '/images/FP-Khouribga.jpg',
            country: 'Morroco',
            city: 'khouribga',
        },
        branch: 'Sciences mathématiques informatique et applications',
        description: `The Faculté Polydisciplinaire de Khouribga (FPK), established in 2004 as part of Morocco's decentralization and regionalization policies, is a multidisciplinary university under Sultan Moulay Slimane University. FPK offers a variety of initial and continuing education programs across fundamental and professional disciplines to meet the needs of the region it serves.`,
        startTime: 'September 2019',
        endTime: 'July 2024',
        slug: 'http://www.fpk.ac.ma/'
    },
]

const index = () => {
    return (
        <div>
            <ul className='space-y-10 mt-20'>
                {
                    educationApi.map((item, index) =>
                        <li key={index} className="w-full flex   hover:bg-pf-surface-2 rounded-xl p-4 space-x-4">
                            <Image className=' w-12 h-12 rounded-md' src={item.school.image} height={2000} width={2000} alt={item.school.name} />
                            <div className="space-y-5">
                                <div className="">
                                    <div className="flex space-x-2 items-center group">
                                        <Link target='_blank' href={item.slug} className="font-bold hover:underline-offset-4 decoration-pf-callout-bar-accent hover:underline  duration-300">{item.school.name}</Link>
                                        <div className="opacity-0 group-hover:opacity-100 duration-200">
                                            <SvgIcons name='link' />
                                        </div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-pf-dim-grey" />
                                        <div className="text-xs flex space-x-1 items-center">
                                            <div className="">{item.startTime}</div>
                                            <span className="">-</span>
                                            <span className="">{item.endTime}</span>
                                        </div>
                                    </div>
                                    <div className="text-pf-light-grey-text">{item.branch}</div>
                                </div>
                                <div className="">{item.description}</div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default index 