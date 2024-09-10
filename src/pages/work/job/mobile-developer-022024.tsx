import React from 'react'
import { workApi } from '..'
import { useParams } from 'next/navigation'
const workDescription = {
    title: "Full-Stack Mobile Developer at Moojbuzz",
    description: {
        intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
        keyContributions: {
            title: "Key Contributions",
            items: [
                "React Native: Led the mobile application development, delivering a seamless and intuitive experience across iOS and Android platforms. Focused on building fast, responsive, and user-friendly interfaces.",
                "NestJS: Engineered a scalable and secure backend infrastructure using NestJS, which provided efficient data management, API integration, and robust user authentication.",
                "Tailwind CSS: Designed stylish and cohesive interfaces with Tailwind CSS, ensuring a visually engaging and consistent user experience.",
                "Prisma & PostgreSQL: Utilized Prisma as an ORM for efficient data handling, paired with PostgreSQL for secure and scalable data storage, enabling the application to grow smoothly with increasing user demands.",
                "Firebase: Implemented Firebase for real-time data interactions and secure user authentication, ensuring smooth performance and safeguarding sensitive user data.",
                "Docker: Employed Docker for containerization, ensuring consistent development and production environments across all stages of the project.",
                "Git: Managed version control using Git, ensuring smooth collaboration across teams and maintaining project integrity through well-organized and trackable changes."
            ]
        },
        collaborationAndResults: {
            title: "Collaboration and Results",
            items: [
                "Worked alongside cross-functional teams to ensure smooth frontend and backend integration, resulting in real-time synchronization and an optimized user experience.",
                " Leveraged Docker to streamline the development and deployment process, improving the reliability and efficiency of the development workflow.",
                " Delivered scalable, secure, and high-performance solutions, meeting the growing demands of the mobile platform while maintaining a seamless user experience."
            ]
        },
        softSkills: {
            title: "Soft Skills Developed",
            items: [
                "Leadership in mobile development: Directed mobile development efforts to ensure the solutions were both user-friendly and technically robust.",
                "Effective time and resource management: Collaborated efficiently across teams, ensuring deadlines were met and projects stayed on track.",
                "Adaptability and problem-solving: Tackled challenges with innovative solutions, adapting quickly to new technologies and project needs, ensuring successful project delivery."
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