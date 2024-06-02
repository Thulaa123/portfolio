import React from 'react'
import MagicButton from './ui/MagicButton'
import { IoMdMail } from 'react-icons/io'
import { socialMedia } from '@/data'
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10' id="contact">
            <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <img
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-50' 
                />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>Let&apos;s do something amazing !</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Just reach me will have discussion to get the idea a reality ✨</p>
                <a href='mailto:vinnath112@gmail.com'>
                    <MagicButton title='Send me a message' icon={<IoMdMail/>} position='left'/>
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © Thulana Vinnath</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    <a href="https://github.com/Thulaa123" target="_blank">
                        <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                            <SiGithub/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/thulana.vinnath.3" target="_blank">
                        <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                            <SiFacebook/>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/thulaa.code/" target="_blank">
                        <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                            <SiInstagram/>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer