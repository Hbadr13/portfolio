'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import SvgIcons from '../../../utils/svgIcons'

const user = {
    id: 1,
    name: 'hamza badr',
    shortName: 'hbadr',
    image: '/images/hbadr.jpeg'
}

const Index = () => {
    const [content, setContent] = useState('')

    const feeds = [
        {
            id: 0,
            like: 21,
            time: '20 Jan 2023',
            name: 'Hello World!',
            description: `This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with RSS by hitting the "Follow" button up above. Or if you're only interested in stuff I wrote about, check out /writing.`,
            url: '/images/screenshot3.png',
            type: 'image',
            status: {
                name: `Feelin rich`,
                emoji: '🤖'
            },
        },
        {
            id: 0,
            like: 21,
            time: '20 Jan 2023',
            name: 'Hello World!',
            description: `This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with RSS by hitting the "Follow" button up above. Or if you're only interested in stuff I wrote about, check out /writing.`,
            url: '/images/screenshot3.png',
            type: 'image',

        },
    ]
    const handleClickStatus = (_content: string) => {
        setContent(_content)
        setTimeout(() => {
            setContent('')
        }, 1700);
    }
    return (
        <div className='mt-20'>
            {/* {
                content && <div className="fixed  inset-0 z-50 ">
                    <div className="text-9xl  relative ">🤖</div>
                </div>
            } */}
            <div className="">
                <ul className='space-y-20'>
                    {
                        feeds.map((item, index) =>
                            <li key={index} className="w-full flex  hover:bg-pf-surface-2 rounded-xl p-4 space-x-4">
                                <Image className=' w-12 h-12 rounded-full' src={user.image} height={2000} width={2000} alt={user.name} />
                                <div className="space-y-5">
                                    <div className="">
                                        <div className="flex items-start space-x-3">
                                            <div className="flex space-x-2 items-center">
                                                <div className="font-bold">{user.shortName} ✨</div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-pf-dim-grey" />
                                                <div className="text-xs">{item.time}</div>
                                            </div>
                                        </div>
                                        {
                                            item.status && <button onClick={() => handleClickStatus(item.status.emoji)} className="bg-pf-surface-4 rounded-full px-2 py-1 space-x-1 w-max">
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
                </ul>
            </div>
        </div >
    )
}

export default Index