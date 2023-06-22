import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Digital Marketer.", "SEO Expert.", "Social Media Maneger."],
        Loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <section className=' w-full pt-10 px-5 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black'>
            {/* hero left side */}
            <div className='w-1/2 flex flex-col gap-20 pt-20 pl-2'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='text-5xl font-bold text-white'>Hi, I'm
                        <br /> Freelancer<span className='text-red-600 capitalize'> shawon</span>
                    </h1>
                    <h2 className='text-3xl font-bold text-white'>
                        a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'
                        />
                    </h2>
                    <p>This is Moulod Hossen Shawon, a highly experienced digital marketer and SEO expert. I have been helping businesses increase their online visibility through SEO and other digital marketing techniques for several years. I have a deep understanding of the online landscape and am dedicated to helping businesses reach their potential through effective digital marketing and SEO strategies. With my experience, I can help businesses maximize their online visibility and reach their goals!</p>
                </div>
                <div className='flex justify-evenly'>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>
                            Find me in
                        </h2>
                        <div className='flex gap-4'>
                            <span className='w-8 h-8 bg-white bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded shadow-xl hover:bg-cyan-600 hover:translate-y-1 transition-all hover:text-red-600 cursor-pointer duration-300 animate-pulse'>
                                <Link to="https://m.facebook.com/moulodhossenshawon?eav=AfbHMN-yMdzSkPEoBVaPjT9l67zTgLn0VJjjrZPJkrKyris9zKQXbhPGQ2Ji_Xtr6DA&ref=content_filter&paipv=0"><FaFacebookF></FaFacebookF></Link>
                            </span>
                            <span className='w-8 h-8 bg-white bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded shadow-xl hover:bg-cyan-600 hover:translate-y-1 transition-all hover:text-red-600 cursor-pointer duration-300 animate-pulse'>
                                <Link to=""><FaTwitter></FaTwitter></Link>
                            </span>
                            <span className='w-8 h-8 bg-white bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded shadow-2xl hover:bg-cyan-600 hover:translate-y-1 transition-all hover:text-red-600 cursor-pointer duration-300 animate-pulse'>
                                <Link to="https://www.linkedin.com/in/moulodsyl/"><FaLinkedinIn></FaLinkedinIn></Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-2'>Here my CV</h2>

                        <button className="btn btn-outline btn-primary animate-pulse">download CV</button>
                    </div>
                </div>
            </div>
            {/* hero right side */}
            <div className='w-1/2 flex justify-center items-center relative'>
                <img className='w-[400px] h-[600] z-10 ' src="https://i.ibb.co/rdGQbYZ/Shawon-pic-removebg-preview.png" alt="Shawon-pic" />

                <div className='absolute bottom-0 w-[400px] h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center '>

                </div>

            </div>
        </section>
    );
};

export default Hero;