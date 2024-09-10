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
            image: '/images/alkora-logo.png',
        },
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
        slug: 'https://www.alkora.app/'
    },
    {
        id: 0,
        name: 'Full Stack Mobile Development',
        company: {
            name: 'Moojbuzz',
            image: '/images/moojbuz.svg',
        },
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
        slug: '#'
    },
]

const index = () => {
    return (
        <div className='mt-10 md:mt-20'>
            <ul className='space-y-10 md:space-y-10 '>
                {
                    workApi.map((item, index) =>
                        <li key={index} className="rounded-xl  p-4 md:p-0 ml-0 md:pl-12 cursor-pointer flex flex-col justify-end space-y-4 bg-pf-project-card-background w-full h-[300px] md:h-[380px]   hover:scale-[101.2%] hover:shadow-inner duration-300">
                            <h1 className='text-3xl truncate font-bold  text-pf-black '>{item.name}</h1>
                            <div className="w-full  flex  ">
                                <div className="w-full md:w-[55%] py-3  flex flex-col justify-center space-y-5 group">
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
                                    {

                                        !item.private ? <Link target='_blank' href={item.slug} className='group/link rounded-xl   w-max  p-5 font-semibold text-lg text-pf-dim-grey bg-white flex items-center space-x-2'>
                                            <div>Explore the Project</div>
                                            <div className="group-hover/link:translate-x-1 duration-200">
                                                <SvgIcons name='arrawV3' />
                                            </div>
                                        </Link> :
                                            <div className="cursor-not-allowed  w-max rounded-xl p-5 font-semibold text-lg text-pf-dim-grey bg-white opacity-0 duration-200 group-hover:opacity-100  group-hover:translate-y-3 ">
                                                {`Can't share the latest yet 🤭`}
                                            </div>
                                    }
                                </div>
                                <div className=" hidden w-0 md:w-[45%] md:flex items-end">
                                    <Image alt='frame' className=' w  object-contain ' width={3000} height={3000} objectFit='cover' src='/images/61019f9f743b67201879170a_Project List Image Frame - SJ-p-500.png' />
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>


        </div>
    )
}

export default index