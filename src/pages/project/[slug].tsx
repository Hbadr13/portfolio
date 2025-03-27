import { projectDetailsData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiCheck, FiExternalLink } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const SofaProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = projectDetailsData.find((it) => it.slug == slug)

  if (!project)
    return <div className="pt-44">not found {slug} </div>
  return (
    <div className="pt-[72px] ">
      <header className="p-4" >
        <div className={` bg-[#2B1C50]   p-[6vw] lg:p-[10vw] rounded-[30px] text-white block md:flex   flex-row  space-x-0 md:space-x-10 lg:space-x-20   w-full  `}>
          <div className={` hidden h-0 md:h-auto   md:flex px-4 w-full md:w-1/2    justify-start  items-center`}>
            <div className=" rounded-[50px] =border-2 relative border-white overflow-hidden">
              <div className=" size-32  -top-5 -left-16 absolute z-10 rounded-full bg-gradient-to-t from-[#7a67ef]  via-[#ffeae1] to-[#efacd8] "></div>
              <div className=" size-[70%]  -top-5 -right-[65%]  absolute z-10 rounded-full bg-gradient-to-t from-[#7a67ef]  via-[#ffeae1] to-[#efacd8] "></div>
              <div className=" size-10 blur-md  left-4 top-1/2 absolute z-10 rounded-full bg-gradient-to-t from-[#7a67ef]  via-[#ffeae1] to-[#efacd8] "></div>
              <div className=" size-[15%]  bottom-2 right-2 blur-2xl  absolute z-10 rounded-full bg-gradient-to-t from-[#7a67ef]  via-[#ffeae1] to-[#efacd8] "></div>
              <div className=" w-full h-3  -bottom-10 blur-xl  absolute z-10 rounded-full bg-gradient-to-t from-[#7a67ef]  via-[#ffeae1] to-[#efacd8] "></div>
              <div className="relative z-10 spect-square  w-full max-w-[460px] my-12 mx-8">
                <Image className=' relative z-10' src={project.branding.image} alt={project.title} width={1500} height={1500} />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/2 flex space-y-5  md:space-y-10 flex-col justify-center " >
            <div className="space-y-3 ">
              <div className="flex items-center space-x-2">
                <Image className='w-9 h-9' src={project.branding.logo} width={200} height={200} alt={project.title} />
                <div className="text-6xl font-bold">{project.title}</div>
              </div>
            </div>
            <div className="font-semibold">{project.description.short}</div>
            <div className="pr-20">
              <div className="h-4 w-full border-y"></div>
            </div>
            <div className="">{project.description.full}</div>
            <div className="relative  py-2">
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                                                linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
                className="absolute z-0 inset-0    ">

              </div>
              <div className=" z-10 relative flex items-center space-x-2.5  md:space-x-5">
                <div className="bg-[#565ADD]/50 p-1 rounded-3xl">
                  <Link
                    className="flex items-center border border-[#565ADD] hover:border-indigo-900 space-x-2 bg-[#565ADD] hover:bg-[#565ADD]/70 text-white rounded-3xl font-semibold w-max px-2 md:px-3.5 py-1  md:py-2 active:opacity-60 duration-200"
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='text-sm md:text-base'>Live preview</div>
                    <FiExternalLink />
                  </Link>
                </div>
                <div className="bg-gray-200/50 p-1 rounded-3xl">

                  <Link href={project.links.github} className="flex border hover:border-gray-400 items-center space-x-2 text-gray-950 bg-white rounded-3xl font-semibold w-max  px-2 md:px-3.5 py-1  md:py-2 active:opacity-60 duration-200"  >
                    <div className="text-sm md:text-base">
                      GitHub
                    </div>
                    <SiGithub />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <section className="py-16 bg-gray-50 px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-12">
            Unlock the Power of Features
          </h2>
          <div className="columns-2xl space-y-5">
            {project.features.coreFunctionalities.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border w-full p-6 transform transition-all h-auto"
              >
                <div className="relative">

                  <div className="relative w-full ">
                    {feature.image ? <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-2xl"
                    /> :
                      <div className="w-full h-80 rounded-xl border"></div>
                    }
                  </div>

                  <div className=" absolute inset-0 flex flex-col justify-end mt-4 text-start bg-gradient-to-b from-transparent to-white">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mb-12">
        <div className="flex flex-wrap gap-2 mt-4">
          {project.description.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>


      <section className="mb-12 max-w-5xl w-full mx-auto">
        <h2 className=" text-4xl md:text-6xl font-bold text-gray-900 py-4 mb-6 w-full text-center">Top Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.highlights.map((feature, index) => (
            <div key={index} className=" p-1  flex items-center space-x-4">
              <div className="rounded-full p-2 bg-[#565ADD]/10">
                <FiCheck className="text-[#565ADD]" />
              </div>
              <h3 className=" text-gray-900">{feature.text}</h3>
            </div>
          ))}
        </div>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.techStack.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl text-orange-500 mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
              <p className="text-gray-600">{tech.category}</p>
            </div>
          ))}
        </div>
      </section>


      {project.slug == 'sofa' && <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-fade-in">License</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
          <p className="text-lg text-gray-600">
            This project is for educational and personal use and is not affiliated with Sofascore.
          </p>
        </div>
      </section>}
    </div>
  );
};

export default SofaProjectPage;