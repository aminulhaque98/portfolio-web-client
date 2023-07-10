import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const info = [
        { text: "Years experience", count: "05" },
        { text: "Completed portfolio", count: "15" },
        { text: "Companies Work", count: "03" },
    ]
    return (
        <section className="py-10 text-white border-b-[1px] border-b-black">

            <div className='text-center mt-8'>
                <h3 className='text-4xl font-semibold'>
                    About <span className='text-cyan-600'>Me</span>
                </h3>
                <p className='text-gray-400 my-3 text-lg'>My introduction</p>
            </div>
            <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                <div>
                    <div className='text-gray-300 my-3'>
                        <p className='text-justify leading-7'>
                            This is Moulod Hossen Shawon, a highly experienced digital marketer and SEO expert. I have been helping businesses increase their online visibility through SEO and other digital marketing techniques for several years. I have a deep understanding of the online landscape and am dedicated to helping businesses reach their potential through effective digital marketing and SEO strategies. With my experience, I can help businesses maximize their online visibility and reach their goals!
                        </p>
                        <div className="flex mt-10 items-center gap-7">
                            {
                                info.map(content => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}<span className='text-cyan-600'>+</span>{""}</h3>
                                        <span>{content.text}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <br />
                        <Link to="https://doc-0c-c0-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/p62mt6ho962j7g7upm505r166b05fljn/2kr59gqqobah9aj2jeclee6lg0agbgu5/1687465275000/3/111983390508013746913/APznzabjJsXCrwB3BVUAthwP8pBocZlTgeJa_PcV9YosbWoDEMNYsNwMfM8BjpIH7ktFnldNQ4z2NsN75fcIeiHDazKnKj1L40Kze3i4v8dtwmZNufwLJoX2XMh-MdSOstdfWt67g8Qf_5IJA3NCvod3ZE7N6Nr9-Rfre6cbaqAcKCF44cQz3WEtgfbZCTtB6v8lqP8sPYhS8VUOFTfW6oVpIGk6Po_PLDA4uvxJJRParSQjjFycgiigasoMpWSDqj9-25-NKbKehPJmsE2oo4lEILMn27aqvOlsSeN-c_gIRUWUmNtXwKS8z9n9Pq2reI3fE1BPXHuAtIdkWq9i7kCDGIf9Loa3dnGSCswb_SfczgizjdGa2KKz6r_8w1rzrhE3DQOQsmDRLDz-bStORxxy7FiTgnpnmw==?authuser=0&nonce=7rhcog1kdbe2m&user=111983390508013746913&hash=t8ij57tq7u5ehi2osepcf23mt1em58v6"> <button className="btn btn-primary btn-primary animate-pulse">download CV</button></Link>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutPics ">
                        <img className='w-full object-cover bg-cyan-600 rounded-xl' src="https://i.ibb.co/PzKw0Mx/shawon-ab.png" alt="shawon-about-pic" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;