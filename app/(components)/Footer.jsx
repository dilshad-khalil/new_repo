import React from 'react'
import Link from 'next/link'

const Footer = ({ styles }) => {
  return (
    <div className={`bg-[#141414] text-white flex flex-col justify-center`}>
        <div className=' text-sm md:text-xl font-regular lg flex justify-center h-[20rem] gap-5 xl:gap-14 2xl:gap-20 pt-10 md:pt-20 px-6 sm:px-16 md:px-32 lg:px-48 xl:px-52 2xl:px-60'>
            <ul className='flex flex-col gap-y-4'>
                <li className=' text-xs md:text-md lg:text-lg text-[#939393] font-semibold'>Contacts</li>
                <li>
                    <a href="mailto:shyarafrin2@gmail.com">
                        Email me 📧
                    </a>
                </li>
                <li>
                    <a href="tel:07518202481">
                        Beep my phone 📞
                    </a>
                </li>
            </ul>
            <ul className='flex flex-col gap-y-4'>
                <li className=' text-xs md:text-md lg:text-lg text-[#939393] font-semibold'>Socials</li>
                <li>
                    <a href="https://www.instagram.com/shyar_afrini/" target='blank'>
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shiyar-abdalhanan-997750221" target='blank'>
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100077558087838&mibextid=ZbWKwL" target='blank'>
                        Facebook
                    </a>
                </li>
            </ul>
            <ul className='flex flex-col gap-y-4'>
                <li className=' text-xs md:text-md lg:text-lg text-[#939393] font-semibold'>About</li>   
                <li>
                    <Link href={'/About'}>
                        Entertainment-corner
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/Shyar-afrini" target='blank'>
                        Developer
                    </a>
                </li>
            </ul>
            <ul className='flex flex-col gap-y-4'>
                <li className=' text-xs md:text-md lg:text-lg text-[#939393] font-semibold'>FAQs</li>
                <li>
                    What is this site for ?
                </li>
                <li>
                    Who is the target audience ? 
                </li>
            </ul>
        </div>
        <div className='text-center pb-8'>
            Made with ❤️ by <a href="https://github.com/Shyar-afrini" target='blank' className='underline underline-offset-2'>Shyar</a>
        </div>
    </div>
  )
}

export default Footer