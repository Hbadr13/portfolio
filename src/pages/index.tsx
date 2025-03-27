import Image from 'next/image'
import React, { useState } from 'react'

import SvgIcons from '../../utils/svgIcons'
import { useInView } from 'react-intersection-observer'

const user = {
  id: 1,
  name: 'hamza badr',
  shortName: 'hbadr',
  image: '/images/hbadr.jpeg'
}

const feeds = [
  {
    id: 0,
    like: 16,
    time: 'Jan 2024',
    name: 'Hello World!',
    description: `I'm thrilled to announce the completion of the 2-year common core curriculum at 1337 coding school. Throughout this time, I worked on projects in Unix programming, graphics, DevOps, and web development, which sharpened both my technical and soft skills like collaboration, resilience, and rigor`,
    url: '/images/common-core.jpeg',
    type: 'image',
    status: {
      name: `Feeling rich`,
      emoji: '🤖'
    },
  },
  {
    id: 0,
    like: 31,
    time: 'Nov 2021',
    name: 'Hello World!',
    description: `I've embarked on an exciting learning journey at 1337, a unique coding school that follows the innovative 42 Network model. The school's emphasis on peer-to-peer learning and project-based education offers a dynamic environment where collaboration and problem-solving are key. This hands-on approach pushes students to explore, innovate, and master coding skills without traditional lectures, fostering a deep understanding of software development.`,
    url: '/images/cluster.jpg',
    type: 'image',
    status: {
      name: `Feeling rich`,
      emoji: '🤖'
    },
  },
  {
    id: 0,
    like: 21,
    time: 'Sep 2019',
    name: 'Hello World!',
    description: `I started my academic journey at Faculté Polydisciplinaire Khouribga in the field of 'Sciences Mathématiques Informatique et Applications.' During this time, I gained a solid foundation in key subjects such as algebra, analysis, and differential calculus, which sharpened my analytical thinking and problem-solving skills.`,
    url: '/images/fpk-building.png',
    type: 'image',

  },
]
const Index = () => {


  return (
    <div className='mt-10 md:mt-20'>
      <div className="w-full max-w-5xl mx-auto">
        <ul className='space-y-10 md:space-y-20'>
          {
            feeds.map((item, index) => <FeedsItemCard item={item} key={index} />
            )
          }
        </ul>
      </div>
    </div >
  )
}

export default Index


const FeedsItemCard = ({ item }: { item: typeof feeds[0] }) => {
  const [content, setContent] = useState('')
  const handleClickStatus = (_content: string) => {
    setContent(_content)
    setTimeout(() => {
      setContent('')
    }, 1700);
  }
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    fallbackInView: true
    // rootMargin: '100px'

  });

  return (
    <li ref={ref} className={` duration-700 ${inView ? 'opacity-100 scale-[101%]' : 'opacity-90'} w-full  flex  bg-pf-project-card-background hover:bg-pf-surface-2 rounded-xl p-2 md:p-4 space-x-2 md:space-x-4`}>
      <Image className=' w-12 h-12 rounded-full' src={user.image} height={2000} width={2000} alt={user.name} />
      <div className="space-y-3 md:space-y-5">
        <div className=" overflow-hidden">
          <div className="flex items-start space-x-3">
            <div className="flex space-x-2 items-center">
              <div className="font-bold">{user.shortName}  ✨</div>
              <div className="w-1.5 h-1.5 rounded-full bg-pf-dim-grey" />
              <div className="text-xs">{item.time}</div>
            </div>
          </div>
          {
            item.status &&
            <button onClick={() => handleClickStatus(item.status.emoji)}
              className={` duration-1000 ${inView ? 'translate-x-0 opacity-100 w-auto' : 'translate-y-32 opacity-65 w-0'} bg-pf-surface-4 rounded-full px-2 py-1 space-x-1 w-max`}>
              <span className={`${content != '' ? 'animate-emojiMoving' : ''}`}>
                {item.status.emoji}
              </span>
              <span className='font-semibold'>
                {item.status.name}
              </span>
            </button>
          }
        </div>
        <div className="">{item.description}</div>
        <div className="h[200px]">
          <Image className=' rounded-xl scale-90 shadow-inner w-fullh-full object-contain' src={item.url} height={4000} width={4000} alt={user.name} />
        </div>
        <div className="flex justify-end">
          <div className="flex space-x-1 items-center">
            <SvgIcons name='favorite' />
            <div className="text-pf-callout-bar-accent">{item.like}</div>
          </div>
        </div>
      </div>
    </li>
  )
}