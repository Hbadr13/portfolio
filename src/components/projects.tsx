import React from 'react'
import Image from 'next/image'
const ProjectCard = ({ title, link }: { title: string, link: string }) => {
    return (
        <div className='w-full h-[400px]  rounded-2xl overflow-hidden bg-[#1f1d1b] '>
            <div className="w-full h-[80%]"></div>
            <div className="w-full h-[20%] p-4 relative bg-[#2A2A2A] text-[#FFFFFF] font-bold tracking-wider">
                <div className="text-sm opacity-60">
                    CLICK HERE TO VISIT
                </div>
                <div className=" text-2xl">
                    {title}
                </div>
                <div className=" absolute  top-3 right-3">
                    <Image src='/view.svg' width={20} height={20} alt='view'></Image>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <main className='w-full    mt-14 flex flex-col items-center '>
            <div className="uppercase font-bold  tracking-widest	 w-full flex text-[30px] text-[#FF8660]  items-center justify-center">
                Projects
            </div>
            <div className="w-full max-w-[1000px]  grid grid-cols-2 gap-4  rounded-2xl mt-4">
                <ProjectCard title='HTML TUTORIAL' link='/' />
                <ProjectCard title='HTML TUTORIAL' link='/' />
                <ProjectCard title='HTML TUTORIAL' link='/' />
                <ProjectCard title='HTML TUTORIAL' link='/' />
            </div>
        </main>
    )
}

export default Projects

