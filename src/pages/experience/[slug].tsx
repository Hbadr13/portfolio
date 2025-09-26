import React, { MutableRefObject, RefAttributes, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { workData } from '@/data/workData';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";
import Image from 'next/image';

const SwipeComponent = ({ title, items }: { title: string, items: any[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null)
    const [clientWidth, setclientWidth] = useState<number>(0)
    const [windowWidth, setwindowWidth] = useState<number>(0)

    useEffect(() => {
        const hendelRedize = () => {
            setwindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', hendelRedize)
    }, [])
    useEffect(() => {
        if (ref.current)
            setclientWidth(ref.current.clientWidth)
    }, [ref, windowWidth])
    const prevItem = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    };

    const nextItem = () => {
        setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="w-full    pt-10 mb-16 animate-fade-in-up relative overflow-hidden">
            <div
                className="w-full h-20  "
                style={{
                    backgroundImage: `
                    linear-gradient(to right, rgba(238, 240, 255, 1) 1.5px, transparent 1px),
                    linear-gradient(to bottom, rgba(233, 245, 254, 1) 1.5px, transparent 1px)
                    `,
                    backgroundSize: "40px 20px",
                    backgroundRepeat: "repeat",
                }}
            ></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
            <div className="flex-1 flex  w-full space-x-[4%]">
                <div className=" w-[8%] md:w-1/6 lg:w-1/5 flex rounded-r-[40px]  md:rounded-r-[80px] bg-gradient-to-r  from-0% via-40% to-100% from-white via-[#e9f5fe] to-[#e9f5fe]" />
                <div className="py-12 md:py-20 lg:py-24 w-[84%] m  md:w-4/6 lg:w-3/5 bg-gradient-to-t from-[#eef0ff] to-[#eef0ff] rounded-[40px]  md:rounded-[80px]  overflow-hidden  flex items-center justify-center relative">
                    <div className="flex justify-center absolute inset-x-0 z-20 top-10 ">
                        <div className="w-[110px]= relative">
                            <div className="absolute z-10 inset-y-0 w-[110px] transition-all duration-300" style={{ transform: `translateX(${currentIndex * 44}px)` }} >
                                <BsFillHexagonFill className='fill-[#e9f5fe] stroke-black stroke-[0.6px] w-[22px] h-[22px] -translate-y-[1px]' />
                            </div>
                            <div className=" relative z-0 flex justify-between space-x-6">
                                {Array.from({ length: items.length }).map((it, index) => (
                                    <BsFillHexagonFill key={index} className='w-5 h-5' />
                                ))}

                            </div>

                        </div>
                    </div>

                    <button
                        disabled={currentIndex == 0}
                        onClick={prevItem}
                        className={`${currentIndex == 0 ? 'opacity-30' : ''} absolute z-10 left-2  md:left-4 p-2 md:p-4 bg-white rounded-full shadow hover:bg-gray-100 duration-200 transition`}
                    >
                        <FaLongArrowAltLeft className='w-4 h-4 md:w-6 md:h-6' />
                    </button>
                    <div ref={ref} className=" relative z-0 flex items-center justify-start w-full ">
                        <div className="  flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100 / items.length}%)` }}>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ width: clientWidth }}
                                    className=" flex justify-center p-6 md:p-10 "
                                >
                                    <p className="text-[#26194b] text-lg md:text-2xl px-4 md:px-12 lg:px-20 text-center font-semibold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        disabled={!(currentIndex != items.length - 1)}
                        onClick={nextItem}
                        className={`${!(currentIndex != items.length - 1) ? 'opacity-50' : ''} absolute z-10 right-2 md:right-4 p-2 md:p-4 bg-white rounded-full shadow hover:bg-gray-100 duration-200 transition`}
                    >
                        <FaLongArrowAltRight className='w-4 h-4 md:w-6 md:h-6' />
                    </button>
                </div>
                <div className=" w-[8%] md:w-1/6 lg:w-1/5 flex rounded-l-[80px] bg-gradient-to-r from-0% via-60% to-100%  via-[#e9f5fe] from-[#e9f5fe] to-white" />
            </div>
        </div>
    );
};


const WorkPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const workDescription = workData.find((work) => work.slug === slug);

    if (!workDescription) {
        return <div>Work not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-t from-gray-100 to-white">

            <div className="relative mt-14 py-24 h-auto">
                <div style={{ backgroundImage: `url('/bg/4.png')` }} className="  absolute z-0 inset-0 opacity-70 rotate-180 ">
                </div>
                <div className="relative z-10">

                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4 animate-fade-in">
                            {workDescription.title}
                        </h1>
                        <p className="text-2xl text-gray-900 max-w-3xl mx-auto animate-fade-in">
                            Crafting innovative web solutions with modern technologies and a focus on performance.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto rounded-xl p-8 mb-6 animate-fade-in-up">
                        <p className="text-lg text-gray-700 text-center">{workDescription.description.intro}</p>
                    </div>

                    <div className="w-full justify-center flex">
                        <button className='px-10 rounded-xl bg-black text-white text-xl py-4' onClick={() => router.push('/contact')}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="w-full h-20 opacity-80"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 30px',
                }}
            ></div>
            <div className="p-2">
                <div className="  bg-gradient-to-b from-gray-300 to-gray-100 p-[1px] max-w-6xl mx-auto bg-white rounded-[50px] overflow-hidden shadow-lg  mb-16 animate-fade-in-up">
                    <div className="bg-white p-3 rounded-[50px] overflow-hidden">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-[0.7px] rounded-[40px] overflow-hidden">
                            <div className="bg-white rounded-[40px] p-3 md:p-4">
                                <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 mb-6 p-3">Technologies Used</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                    {workDescription.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className=" cursor-pointer flex flex-col items-center space-y-2 p-3 md:p-6 bg-gray-50 rounded-lg hover:border transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            <div className="text-5xl mb-2 hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                            <p className="text-lg font-semibold text-gray-700">{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto rounded-xl p-3 md:p-8 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 py-10 text-center">{workDescription.description.keyContributions.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {workDescription.description.keyContributions.items.map((item, index) => (
                        <div key={index} className="w-full space-y-5 group flex flex-col items-center">
                            <div className="p-2  bg-gray-200 group-hover:bg-gray-300 duration-200 rounded-md w-max">{item.icon}</div>
                            <div className="text-gray-900 font-semibold text-center">{item.label}</div>
                            <div className="text-gray-700 text-center">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            <SwipeComponent
                title={workDescription.description.collaborationAndResults.title}
                items={workDescription.description.collaborationAndResults.items}
            />
            <div className="">
                <div className="border-y h-10 w-full"></div>
                <div className="flex -translate-y-10 ">
                    <div className="flex w-10 ">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: `repeating-linear-gradient(315deg, rgba(0, 0, 0, 0.05) 0 1px, #0000 0 50%)`,
                                backgroundSize: '20px 20px', // Adjust this to control the spacing of the lines
                            }}
                        ></div>
                    </div>
                    <div className="w-full pt-10 md:pt-20">
                        <div className="w-full  bg-gradient-to-b from-lime-100 to-green-100 rounded-xl py-14 md:py-24 mb-16 animate-fade-in-up">
                            <div className="w-full max-w-5xl mx-auto px-2">
                                <div className="w-full flex justify-center">
                                    <Image className='w-52 h-52' src={'/images/tree.png'} width={600} height={600} alt='tree' />
                                </div>
                                <h2 className="px-4 text-3xl md:text-4xl font-bold text-gray-900 text-center py-2 md:py-5">{workDescription.description.softSkills.title}</h2>
                                <div className="  text-gray-600 text-center py-2 md:py-6 px-4 md:px-20 text-sm md:text-base">{workDescription.description.softSkills.description}</div>
                                <ul className="gap-4 md:gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {workDescription.description.softSkills.items.map((item, index) => (
                                        <li key={index} className="border-2  rounded-2xl p-2.5 md:p-5 space-y-2.5 md:space-y-5">
                                            <div className="text-gray-900 text-sm font-semibold">{item.label}</div>
                                            <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="border-y h-4 w-full"></div>



                    </div>
                    <div className="flex w-10">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: `repeating-linear-gradient(315deg, rgba(0, 0, 0, 0.05) 0 1px, #0000 0 50%)`,
                                backgroundSize: '20px 20px', // Adjust this to control the spacing of the lines
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkPage;