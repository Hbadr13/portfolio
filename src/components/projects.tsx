import React, { useState } from 'react'
import Image from 'next/image'
const ProjectCard = ({ setshowdetails, title, link }: { setshowdetails: (showdetails: number) => void, title: string, link: string }) => {
    return (
        <div className=' cursor-pointer w-full h-[400px]  rounded-2xl overflow-hidden bg-[#1f1d1b] '>
            <div onClick={() => setshowdetails(1)} className="w-full h-[80%] relative">
                <div className=" absolute w-full h-full bg-slate-400">
                    <Image src={'/trans/image1.png'} fill objectFit='cover' alt='image1' />

                </div>
            </div>
            <div className="w-full h-[22%] p-4 relative block bg-[#2A2A2A] text-[#FFFFFF] font-bold tracking-wider">
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
    const [showdetails, setshowdetails] = useState(-1)
    const project = [
        {
            id: 0, name: '', link: '', image: []
        }
    ]
    return (
        <main className='w-full    mt-24 flex flex-col items-center  '>
            <div className="uppercase font-bold  tracking-widest	 w-full flex text-[30px] text-[#FF8660]  items-center justify-center">
                Projects
            </div>
            <div className="w-full max-w-[1000px]  grid grid-cols-2 gap-4  rounded-2xl mt-4">
                <ProjectCard setshowdetails={setshowdetails} title='HTML TUTORIAL' link='/' />
                {/* <ProjectCard title='HTML TUTORIAL' link='/' /> */}
                {/* <ProjectCard title='HTML TUTORIAL' link='/' /> */}
                {/* <ProjectCard title='HTML TUTORIAL' link='/' /> */}
            </div>
            {
                showdetails != -1 && (

                    <div className=" absolute w-[90%] h-full  p-10 ">
                        <div className="  flex h-full w-full rounded-2xl bg-white">
                            <div className="w-full flex justify-end h-10">
                                <button onClick={() => setshowdetails(-1)} className='p-4 bg-slate-400 m-2 rounded-md flex justify-center items-center'>
                                    <div className="">X</div>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </main>
    )
}

export default Projects

