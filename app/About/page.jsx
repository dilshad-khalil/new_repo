import React from 'react'
import Image from 'next/image'
import aboutImage from '../../public/image_about.png'

const page = () => {
  return (
    <div className='flex justify-center w-screen h-[100vh] bg-[#141414] absolute'>
        <div className='bg-gradient-to-b from-[#09090980] to-[#090909] w-full z-0 h-[100vh] absolute'></div>
        <Image className=' object-cover w-auto h-full' src={aboutImage} alt='backdrop' />
        <div className='absolute text-white text-sm top-[5%] md:top-[15%] py-10 md:py-0 px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-40 leading-8 md:leading-6'>
          <h1 className='text-2xl'>
            Welcome to Entertainment Corner!
          </h1>
          <h2 className='text-lg py-4'>
            About Us
          </h2>
            
          Hello there! I&apos;m Shyar, the developer behind Entertainment Corner. This site is a labor of love, created as a front-end project to expand and apply my knowledge in web development. Here, I aim to provide a delightful and engaging platform for all entertainment enthusiasts.
            
          <h2 className='text-lg py-4'>
            Our Purpose
          </h2>
            
          Entertainment Corner was born with the goal of offering a diverse range of captivating content to keep you entertained and informed. Whether you&apos;re a movie buff, a TV show addict, this site has something exciting for everyone!
            
          <h2 className='text-lg py-4'>
            Discover and Explore
          </h2>
            
          At Entertainment Corner, we take pride in curating a collection of the latest and greatest in the world of entertainment. Discover a vast array of movies, TV shows, all in one convenient place. Our user-friendly interface makes navigation a breeze, allowing you to explore and find the entertainment that suits your taste.
            
          <h2 className='text-lg py-4'>
            Stay Up-to-Date
          </h2>
            
          As a site built with passion and dedication, we&apos;re committed to providing you with the most up-to-date information on new releases, upcoming events, and the latest trends in the entertainment industry.
            
          <h2 className='text-lg py-4'>
            Join the Journey
          </h2>
            
          Come along and join us on this exciting journey through the vast landscape of entertainment. Whether you&apos;re seeking a place to unwind after a long day or looking to expand your knowledge about your favorite movies, TV shows, Entertainment Corner is your go-to destination.
            
          Thank you for being a part of our community, and we hope you have a fantastic time exploring the fascinating world of entertainment here at Entertainment Corner!
            
          Sincerely,
            
          Shyar - Developer of Entertainment Corner
        </div>
    </div>
  )
}

export default page
