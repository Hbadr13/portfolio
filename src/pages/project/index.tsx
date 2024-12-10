import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import moment from 'moment'

const projectApi = [
    {
        id: 0,
        name: 'Deeptalk Chatbot',
        description: `🚀 DeepTalk is a cutting-edge full-stack app, merging Next.js, Tailwind CSS, NextAuth.js, Prisma, PostgreSQL, and Vercel's AI SDK. It provides secure, personalized experiences through an intelligent chatbot 🤖. DeepTalk epitomizes modern full-stack development, seamlessly integrating frontend and backend 🌐. Users enjoy a cohesive, feature-rich journey with effortless engagement 💡.`,
        time: '202402',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/deeptalk-chatbot',
        skils: ['Full Stack', 'Nextjs', 'API', 'Docker', 'TypeScript', 'TailwindCSS', `Vercel's AI SDK`, 'NextAuth.js', 'Prisma', 'PostgreSQL']
    },
    {
        id: 0,
        name: 'Ft_Transcendence',
        description: `🌐 Developed a dynamic web platform with my skilled team, using Nest.js for the backend and Next.js for the frontend. We focused on exceptional performance, security 🔒, and user experience. Implemented password hashing and SQL injection protection. The platform features intuitive navigation, OAuth login for connecting with friends worldwide 🌍, and interactive chat with private messaging 💬. Also included a modern twist on the classic Pong game 🕹️, blending nostalgia with innovative design. `,
        time: '202311',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/ft_transcendence',
        skils: ['Full Stack', 'Work with team', 'Nextjs', 'NestJs', 'PostgreSQL', 'Docker', 'TypeScript', 'TailwindCSS', 'Prisma']
    },
    {
        id: 0,
        name: 'Inception',
        description: `🛠️ Implemented a small-scale infrastructure within a virtual machine using Docker Compose. Created custom Dockerfiles for each service, adhering to performance guidelines with the latest stable versions of Alpine or Debian. Configured NGINX with TLSv1.2/TLSv1.3 🔒, WordPress with php-fpm, and MariaDB in dedicated containers. Set up volumes for WordPress database and files 📂, and established a Docker network for seamless inter-container communication 🌐.`,
        time: '202307',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/inception',
        skils: ['Docker', 'Docker Compose', 'Nginx', 'mariadb']
    },
    {
        id: 0,
        name: 'Python Modules',
        description: `🔧 This Python module features hands-on exercises with NumPy and Pandas, designed to strengthen your data manipulation and analysis skills. It includes practical tasks for working with arrays, data frames, and performing complex computations. Additionally, the module covers other essential Python skills to enhance your proficiency in data science and programming. 📈💻`,
        time: '202206',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/IA-python',
        skils: ['Python', 'Numpy', 'Pandas', 'Matplotlib']
    },
    {
        id: 0,
        name: 'Web server',
        description: `🌐 Developed a custom HTTP server in C++ using object-oriented programming principles, capable of handling HTTP requests 📨 and responses, allowing testing with real web browsers 🌍. The server also supports WebSocket communication for real-time interaction ⚡ between clients and the server.`,
        time: '202301',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/webserv',
        skils: ['C/C++', 'Work with team', 'Nginx', 'WebSocket', 'HTTP Req/Res']
    },
    {
        id: 0,
        name: 'Cub3d',
        description: `🎮 Developed a dynamic 3D maze exploration project inspired by Wolfenstein 3D 🧱, utilizing ray-casting techniques and applying mathematics to create efficient algorithms, enhancing skills in graphic design, event handling, and algorithmic problem-solving. 🧩`,
        time: '202212',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/cub3d',
        skils: ['C/C++', 'Work with team', 'Ray-Casting']
    },
    {
        id: 0,
        name: 'Minishell',
        description: `🛠️ Created a simple shell, deepening understanding of processes and file descriptors. This project provided hands-on experience with command-line interactions and the underlying mechanisms that shaped early computing interfaces. 💻`,
        time: '202208',
        inProgress: false,
        slug: 'https://github.com/Hbadr13/minishell',
        skils: ['C/C++', 'Work with team', 'Bash']
    },
]





import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface IWorkCardProps {
    item: typeof projectApi[0],
    index: number
}

const WorkCard = ({ item, index }: IWorkCardProps) => {
    const [visibleTechnologies, setVisibleTechnologies] = useState<Array<string>>([]);
    const re = useRef(false)
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true

    });

    useEffect(() => {
        if (!inView || re.current)
            return
        item.skils.forEach((tech, index) => {
            setTimeout(() => {
                setVisibleTechnologies((prev) => [...prev, tech]);
            }, 300 * index);

        })
        re.current = true
    }, [inView])

    return (
        <li ref={ref} key={index}
            className={`w-full flex    bg-pf-surface-4/60 hover:bg-pf-surface-4  rounded-xl p-4 transition-all  duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

            <div className="space-y-5">
                <div className="">
                    <div className="flex flex-col md:flex-row space-x-2 items-start md:items-center">
                        <div className="flex space-x-2 items-center group">
                            <div className="font-bold truncate">{item.name}</div>
                            <div className="w-1.5 h-1.5 rounded-full bg-pf-dim-grey" />
                            <Link className="flex items-center text-sm text-slate-400 hover:text-pf-brand-fill focus-visible:text-pf-brand-fill" href={item.slug} target="_blank" rel="noreferrer noopener">
                                <span>GitHub</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="ml-1.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">{moment(item.time, "YYYYMM").fromNow()}</div>
                    </div>
                </div>
                <div className="text-sm md:text-lg">{item.description}</div>
                <div dir='rtl' className="w-full flex  flex-wrap justify-start gap-1 md:gap-2 text-xs md:text-sm">
                    {visibleTechnologies.map((skil, index) => <div key={index} className={` SkilsItem px-2 py-0.5  text-gray-500 rounded-lg  border border-slate-300 bg-slate-200 border-1`}>
                        {skil}</div>)}
                </div>
            </div>
        </li >
    )
};




const index = () => {
    return (
        <div>

            <ul className='space-y-10 mt-10 md:mt-20'>
                {
                    projectApi.map((item, index) => <WorkCard key={index} item={item} index={index} />)
                }
            </ul>
        </div>
    )
}

export default index
