import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';

const Services = () => {
    return (
        <div className='w-10/12 mx-auto mt-52 bg-[#ffffef] rounded-[32px] py-10 pl-10 space-y-16 font-Inter' >
            {/* session - 1 */}
            <div className='grid grid-cols-2 w-11/12 mx-auto'>
                
                <div className='space-y-6' >
                    <button className=' text-[#020043] cursor-pointer py-2 px-6 border-[1.5px] border-black rounded-[32px] text-[16px]' >Service</button>
                    <h1 className='font-semibold text-[36px] text-[#020043]' >Empowering Health,
                         <br />Enriching Lives .</h1>
                    <p className='text-pretty text-[#4D4C7B] text-sm w-8/12' >We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <div className=' w-28 h-8 md:w-40 md:h-12 btn bg-[#FFC637] hover:bg-[#FFC637] rounded-[12px]  '>
                    <a className="font-medium ">Appointment</a>
                    <CgArrowTopRight className='font-extrabold md:text-xl' />
                    </div>
                </div>

                <div className='w-[524px] relative' >
                    <img className='rounded-[30px] ' src="https://i.ibb.co/WgN05Nz/Rectangle-27-2.png" alt="" />
                    <div className='bg-[#343268] rounded-[32px] p-6 space-y-4  w-9/12  absolute  opacity-85 bottom-10 left-8' >
                        <h1 className='text-lg text-[#FFFFF5] text-[26px] font-semibold' >Advanced Technology</h1>
                        <div className='flex items-end' >
                        <p className='text-[16px] text-[#d3d1d1]' >TOur surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
                        <CgArrowTopRight className=' cursor-pointer font-extrabold md:text-5xl bg-[#FFC637] text-white rounded-full ' />
                        </div>
                    </div>
                </div>
            </div>
            {/* session -2  */}
            <div className='grid grid-cols-2 w-11/12 mx-auto'>
            <div className='w-[524px] relative' >
                    <img className='rounded-[30px] ' src="https://i.ibb.co/G2BXpBR/Rectangle-27-1.png" alt="" />
                    <div className='bg-[#343268] rounded-[32px] p-6 space-y-4  w-9/12  absolute  opacity-85 bottom-10 left-8' >
                        <h1 className='text-lg text-[#FFFFF5] text-[26px] font-semibold' >Online Doctor Meet</h1>
                        <div className='flex items-end' >
                        <p className='text-[16px] text-[#d3d1d1]' >TOur surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
                        <CgArrowTopRight  className='cursor-pointer font-extrabold md:text-5xl bg-[#FFC637] text-white rounded-full ' />
                        </div>
                    </div>
                </div>
                <div className='w-[524px] relative' >
                    <img className='rounded-[30px] ' src="https://i.ibb.co/kXJZ7Kj/Rectangle-27.png" alt="" />
                    <div className='bg-[#343268] rounded-[32px] p-6 space-y-4  w-9/12  absolute  opacity-85 bottom-10 left-8' >
                        <h1 className='text-lg text-[#FFFFF5] text-[26px] font-semibold' >Consultancy your health</h1>
                        <div className='flex items-end' >
                        <p className='text-[16px] text-[#d3d1d1]' >TOur surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
                        <CgArrowTopRight className=' cursor-pointer font-extrabold md:text-5xl bg-[#FFC637] text-white rounded-full ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;