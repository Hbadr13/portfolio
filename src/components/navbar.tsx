import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <main className='w-full h-14 flex p-4'>
            <div className="w-1/3 h-full   flex items-center  space-x-5">
                <Image src={'/Subtract.svg'} width={35} height={35} alt='linkdin' />
                <Image src={'/Subtract.svg'} width={35} height={35} alt='linkdin' />
                <Image src={'/Subtract.svg'} width={35} height={35} alt='linkdin' />
                <Image src={'/Subtract.svg'} width={35} height={35} alt='linkdin' />
            </div>
            <div className="w-1/3 h-full "></div>
            <div className="w-1/3 h-full   flex items-center  space-x-6  justify-end  text-[20px]" style={{
                color: `#F5F5F5`,
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <div className=" opacity-50">Work</div>
                <div className="opacity-50">Experiences</div>
                <div className="opacity-50">Service</div>
                <div className="">About</div>
            </div>
        </main >
    )
}

export default Navbar