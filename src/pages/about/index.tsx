import React from 'react'

const index = () => {

    const about = `                
    I am  software engineer with a robust background in web development and software engineering. With 2 years of full-stack development experience using Next.js, Nest.js, and React.js, and an additional year specializing in mobile development with React Native, I bring a comprehensive skill set to any project. My strong problem-solving abilities and commitment to quality are matched by my foundational knowledge in data science, including data analysis, and statistical modelling.

    My technical journey began at 1337 coding school, Morocco's pioneering institution in  IT . 1337 employs a unique educational model centered around peer learning and project-based methodologies, providing an immersive experience that nurtures creativity and prepares students for the forefront of technology.

    I am passionate about leveraging my technical expertise to contribute to innovative projects at the intersection of software development and data science. My goal is to enhance team capabilities and drive impactful results through dedicated and forward-thinking solutions.
            `

    return (
        <div className='mt-10 md:mt-20 px-2 md:px-5'>
            <div className="text-4xl font-bold">مرحبًا  👋</div>
            <div className="whitespace-pre-wrap">
                {about}
            </div>
        </div>
    )
}

export default index