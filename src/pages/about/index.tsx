import { Cloud } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


import { FaReact, FaNodeJs, FaDocker, FaDatabase, FaPython, FaCogs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiPostgresql, SiNginx, SiVercel, SiVite, SiJavascript, SiHtml5, SiNestjs, SiPocket, SiNativescript, SiExpo, SiFirebase, SiSpringboot, SiSupabase, SiNumpy, SiPandas, SiPlotly, SiScikitlearn, SiTensorflow, SiPytorch, SiSpacy, SiHuggingface } from 'react-icons/si';

const TechStack = () => {

    const stacks = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', icon: <FaReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'TailwindCSS', icon: <SiTailwindcss /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'HTML/CSS', icon: <SiHtml5 /> },
                { name: 'NextAuth.js', icon: <FaCogs /> },
            ],
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Nest.js', icon: <SiNestjs /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Spring boot', icon: <SiSpringboot /> },
                { name: 'MongoDB', icon: <FaDatabase /> },
                { name: 'supabase', icon: <SiSupabase /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'GSP', icon: <Cloud /> },
                { name: 'Prisma', icon: <SiPrisma /> },
            ],
        },
        {
            title: 'Mobile Development',
            skills: [
                { name: 'ReactNative.js', icon: <SiNativescript /> },
                { name: 'Expo', icon: <SiExpo /> },
                { name: 'TailwindCSS', icon: <SiTailwindcss /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'HTML/CSS', icon: <SiHtml5 /> },
            ],
        },
        {
            title: 'Artificial Intelligence & NLP',
            skills: [
                { name: 'Python', icon: <FaPython /> },
                { name: 'NumPy', icon: <SiNumpy /> },
                { name: 'Pandas', icon: <SiPandas /> },
                { name: 'Matplotlib', icon: <SiPlotly /> },
                { name: 'Scikit-learn', icon: <SiScikitlearn /> },
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'PyTorch', icon: <SiPytorch /> },
                { name: 'NLTK', icon: <SiNumpy /> },
                { name: 'spaCy', icon: <SiSpacy /> },
            ],
        },

        {
            title: 'C/C++ Development',
            skills: [
                { name: 'C/C++', icon: <FaCogs /> },
                { name: 'OOP', icon: <FaCogs /> },
                { name: 'WebSocket', icon: <FaCogs /> },
                { name: 'HTTP Req/Res', icon: <FaCogs /> },
            ],
        }
    ];


    return (
        <div className="py-16 px-4 md:px-12 bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-12">My Tech Stack & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {stacks.map((stack, index) => (
                        <div key={index} className="bg-white border shadow-xl rounded-lg p-8 transition-all duration-300 ease-in-out hover:scale-[101%] hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100/45 hover:to-fuchsia-100/60">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{stack.title}</h3>
                            <ul className="space-y-4">
                                {stack.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center text-lg text-gray-700 hover:text-blue-700 transition-all duration-200">
                                        <span className="mr-4 text-2xl text-blue-500">{skill.icon}</span>
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};







const index = () => {
    const about = `
    I am Hamza Badr, a full-stack developer with extensive experience building scalable and high-performance web applications. Over the past few years, I have honed my skills in both frontend and backend development, primarily using Next.js, React.js, Nest.js, Spring Boot, and Node.js. With a strong understanding of modern web development practices and technologies, I am capable of delivering solutions that enhance user experience and optimize performance.

My expertise includes designing and building RESTful APIs, working with databases (PostgreSQL, MongoDB, Supabase), integrating third-party services, implementing secure authentication (JWT, Keycloak), and creating responsive, user-friendly interfaces with modern frameworks like Tailwind CSS and TypeScript. I also have experience with DevOps tools such as Docker, GitLab CI/CD, and deploying on cloud platforms (GCP, VPS).

I take pride in delivering clean, maintainable, and well-documented code. Having worked on various complex projects, I’m adept at solving challenging problems, collaborating with multidisciplinary teams, and managing project timelines.

I graduated with a Bachelor${`'`}s degree in Artificial Intelligence, which has strengthened my expertise in AI & NLP, including conversational agents, chatbots, and intelligent automation. I’m passionate about leveraging my technical skills to bring ideas to life and drive innovation in software development.
    `;

    return (
        <div className="">
            <div
                className="w-full"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            >
                <div
                    style={{
                        backgroundImage: `url('/bg/1.png')`, // Your background image path
                        backgroundSize: 'cover', // Make sure the image covers the area
                        backgroundPosition: 'center',
                        opacity: 0.35, // Set the opacity here
                    }}
                    className="w-full h-full absolute top-0 left-0 z-0"
                ></div>

                <div className="relative pb-10 pt-32 md:pt-40 px-2 md:px-5 w-full   z-10">
                    <div className="text-center w-full max-w-5xl mx-auto">
                        <div className=" text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Hi, I{`'`}m Hamza Badr, a Full-Stack Developer Focused on Building Scalable Web Applications with Next.js, React.js, and Nest.js.                        </div>
                        <p className="text-xl text-gray-600 mb-8">
                            I combine my expertise in both frontend and backend development to create seamless, high-performance user experiences and impactful software solutions.
                        </p>
                        <div className="text-center py-8 md:py-12">
                            <Link href="/contact" className="px-6 py-3 text-white bg-gray-800 hover:bg-blue-900 rounded-md transition duration-300">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    <div className="w-full max-w-6xl mx-auto">

                        <div className="text-4xl font-bold py-4">مرحبًا  👋</div>
                        <div className=" bg-white p-4 md:p-10 text-lg rounded-2xl border whitespace-pre-wrap text-gray-900">{about}</div>
                    </div>
                </div>
                <TechStack />
            </div>
        </div>
    );
};

export default index;


