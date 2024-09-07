import Link from 'next/link'
import React from 'react'
import SvgIcons from '../../../utils/svgIcons'
import Image from 'next/image'

const workApi = [
    {
        id: 0,
        name: 'Full stack developer',
        company: {
            name: 'ALKora',
            logo: 'alKora',
        },
        image: '',
        desrciption: 'creat a beatiful daynamic website with new Technologie',
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
        slug: 'https://www.alkora.app/'
    },
    {
        id: 0,
        name: 'Mobile developer',
        company: {
            name: 'Moojbuzz',
            logo: 'alKora',
        },
        image: '',
        desrciption: 'creat a beatiful daynamic application with new Technologie',
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
        slug: '#'
    },
]

const index = () => {
    return (
        <div>

            <ul className='space-y-10 mt-20'>
                {
                    workApi.map((item, index) =>
                        <li key={index} className="rounded-xl cursor-pointer  bg-pf-project-card-background w-full h-[380px] flex  hover:scale-[101.2%] hover:shadow-inner duration-300">
                            <div className="w-1/2 py-6 pl-12  flex flex-col justify-center space-y-5 group">
                                <h1 className='text-3xl truncate font-bold  text-pf-black '>{item.name}</h1>
                                <div className="flex items-center space-x-2 text-pf-grey-text ">
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
                                {

                                    !item.private ? <Link target='_blank' href={item.slug} className='group/link rounded-xl   w-max  p-5 font-semibold text-lg text-pf-dim-grey bg-white flex items-center space-x-2'>
                                        <div>Explore the Project</div>
                                        <div className="group-hover/link:translate-x-1 duration-200">
                                            <SvgIcons name='arrawV3' />
                                        </div>
                                    </Link> :
                                        <div className="cursor-not-allowed  p-5 font-semibold text-lg text-pf-dim-grey bg-white opacity-0 duration-200 group-hover:opacity-100  group-hover:translate-y-3 ">
                                            Can't share the latest yet 🤭
                                        </div>
                                }
                            </div>
                            <div className="w-1/2 flex items-end">
                                <Image alt='frame' className=' w  object-contain ' width={3000} height={3000} objectFit='cover' src='/images/61019f9f743b67201879170a_Project List Image Frame - SJ-p-500.png' />
                            </div>
                        </li>
                    )
                }
            </ul>


        </div>
    )
}

export default index