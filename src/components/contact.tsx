import React from 'react'
import Image from 'next/image'
const Contact = () => {
    const listOfservice = [
        'full stack', 'prisma', 'fontend', 'data science',
        'full stack', 'prisma', 'fontend', 'data science'
    ]
    return (
        <main className='w-full'>

            <div className="w-full flex-col items-center   relative  flex  justify-center pb-20">
                <div className=" opacity-55 absolute  -top-12 w-full h-full z-0 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" w-full" height="200" viewBox="0 0 1440 688" fill="none">
                        <g filter="url(#filter0_f_1_292)">
                            <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint0_radial_1_292)" />
                            <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint1_linear_1_292)" fillOpacity="0.4" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1_292" x="-153" y="0" width="1730" height="688" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_292" />
                            </filter>
                            <radialGradient id="paint0_radial_1_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(616 322.625) rotate(70.6997) scale(290.452 941.811)">
                                <stop stopColor="#621ABE" />
                                <stop offset="1" stopColor="#24214B" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint1_linear_1_292" x1="899.5" y1="398.795" x2="410.252" y2="378.496" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF9C54" />
                                <stop offset="0.459917" stopColor="white" stopOpacity="0.540083" />
                                <stop offset="1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h1 className="mb-2 text-[60px] flex flex-col text-balance font-bold justify-center items-center bg-gradient-to-r from-[#cda7ff] via-[#f2af7f] to-[#6961dd]   text-transparent bg-clip-text">
                    CONTACT
                </h1>
                <div className="mt-10 w-1/2 Contact h-[400px]  rounded-xl z-30  flex  justify-around items-center ">
                    <div className="flex flex-col items-center p-10 space-y-4">
                        <Image src='/nextjs.svg' width={40} height={40} alt='js'></Image>
                        <div className=" text-white  text-3xl">
                            PHONE
                        </div>
                        <div className=" text-white text-xl">+212708029985</div>
                    </div>
                    <div className="flex flex-col items-center p-10 space-y-4">
                        <Image src='/nextjs.svg' width={40} height={40} alt='js'></Image>
                        <div className=" text-white  text-3xl">
                            EMAIL
                        </div>
                        <div className=" text-white text-xl">hamzabadrbus@gmail.com</div>
                    </div>
                    {/* <div className="flex w-1/2 justify-around pl-4">
                    </div> */}

                </div>
            </div>

        </main>
    )
}

export default Contact