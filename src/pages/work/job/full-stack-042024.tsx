import React from 'react'
import { workApi } from '..'
import { useParams } from 'next/navigation'
const workDescription = {
    title: "Full-Stack Developer Internship at AlKora",
    description: {
        intro: "During my internship at AlKora, I had the incredible opportunity to contribute to the development of innovative web solutions as a full-stack developer. Using cutting-edge technologies like Next.js, TypeScript, Tailwind CSS, Docker, and Git, I worked on crafting responsive and scalable web applications that aligned with modern design principles and high-performance standards.",
        keyContributions: {
            title: "Key Contributions",
            items: [
                "Spearheaded full-stack development efforts with Next.js and TypeScript, creating web applications that are not only fast and responsive but also built with a strong emphasis on scalability and maintainability.",
                "Utilized Tailwind CSS to design elegant and user-friendly interfaces, ensuring a seamless and visually appealing experience across all platforms.",
                "Focused on optimizing performance and delivering high-quality user experiences by writing clean, efficient, and maintainable code.",
                "Integrated robust APIs, contributing to the development of dynamic, data-driven applications.",
                "Containerized applications with Docker, ensuring consistent environments across development, testing, and production stages.",
                "Employed Git for version control, collaborating smoothly with the team, tracking changes, and maintaining project integrity."
            ]
        },
        collaborationAndResults: {
            title: "Collaboration and Leadership",
            items: [
                "My time at AlKora was marked by collaboration with design and backend teams to ensure smooth integration of features and optimal functionality.",
                "By fostering clear communication and aligning on project goals, we were able to deliver polished and well-executed applications.",
                " I also played a key role in managing tasks and deadlines, leading team efforts and ensuring we stayed on track to meet project milestones."
            ]
        },
        softSkills: {
            title: "Soft Skills",
            items: [
                "Time management and leadership: Guided team collaboration, keeping projects on schedule and adapting to new challenges swiftly.",
                "Team-oriented approach: Worked with cross-functional teams, ensuring smooth collaboration and clear communication throughout the development cycle.",
                "Problem-solving mindset: Tackled complex challenges with a results-driven approach, ensuring that any issues encountered were addressed promptly and effectively."
            ]
        }
    }
}
const Index = () => {

    return (
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold py-2'>
                {workDescription.title}
            </h1>
            <div className="">
                {workDescription.description.intro}
            </div>
            <h2 className='text-xl font-semibold'>
                Key Contributions
            </h2>
            <div className="">
                <ul className=' space-y-2'>
                    {workDescription.description.keyContributions.items.map((item, index) =>
                        <div key={index} className="flex space-x-2 items-center ">
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className=" w-full">
                                {item}
                            </div>
                        </div>
                    )}
                </ul>
            </div>
            <h2 className='text-xl font-semibold'>
                Collaboration and Results
            </h2>
            <div className="">
                <ul className=' space-y-2'>
                    {workDescription.description.collaborationAndResults.items.map((item, index) =>
                        <div key={index} className="flex space-x-2 items-center ">
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className=" w-full">
                                {item}
                            </div>
                        </div>
                    )}
                </ul>
            </div>
            <h2 className='text-xl font-semibold'>
                Soft Skills Developed
            </h2>
            <div className="">
                <ul className=' space-y-2'>
                    {workDescription.description.softSkills.items.map((item, index) =>
                        <div key={index} className="flex space-x-2 items-center ">
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className=" w-full">
                                {item}
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Index