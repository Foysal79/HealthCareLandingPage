import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';

const Blog = () => {
    return (
        <div id="Blog" className=' w-10/12 mx-auto mt-28  font-Inter' >
            <div className='grid grid-cols-2 space-x-10' >
                <div className='space-y-6' >
                    <button className=' cursor-pointer py-2 px-4 border-[1.5px] border-black rounded-3xl text-sm' >Who we are</button>
                    <h1 className='font-semibold text-[36px] text-[#020043]' >We Help To Get <br /> Solutions .</h1>
                    <p className='text-pretty text-[#4D4C7B] text-sm w-8/12' >We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <div className=' w-28 h-8 md:w-40 md:h-12 btn bg-[#FFC637] rounded-[12px]  '>
                    <a className="font-medium ">Learn more</a>
                    <CgArrowTopRight className='font-extrabold md:text-xl' />
                    </div>
                </div>
                <div className='relative' >
                    <img className='w-[568px] h-[415px]' src="https://i.ibb.co/gTSzYVv/Rectangle-24.png" alt="" />

                    <div className='bg-[#343268] rounded-[32px] p-8 space-y-6  w-8/12 absolute -left-36 -bottom-16' >
                        <h1 className='text-lg text-[#FFFFFF] text-[26px]' >Our mission is simple</h1>
                        <p className='text-[16px] text-[#d3d1d1]' >To provide high-quality healthcare services <br /> that are accessible, personalized, and <br /> patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;