import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';

const OfferSessionBanner = () => {
    return (
        <div className='font-Inter w-10/12 mx-auto my-28' >

            <div className=" relative "  >
           <div className="mb-16" >
           <img  className="w-full rounded-[32px] " src="https://i.ibb.co/dbSpk4k/Rectangle-32.png" alt="" />
           <div className="w-full rounded-[32px] absolute inset-0 bg-gradient-to-r from-[#01031b] via-[#07037de4] to-[#0f0cbc39] opacity-95">
            <div className='flex p-16 justify-center ' >
                <div className='flex-1  pl-10 pt-12 space-y-8' >
                    <h1 className='text-[40px] font-semibold text-white ' >Get Your <br /> First Appointment <br /> at 50% Off!</h1>
                    <div className='space-x-7' >

                    <div className=' w-28 h-8 md:w-40 md:h-12 btn bg-[#FFC637] hover:bg-[#FFC637] rounded-[12px]  '>
                    <a className="font-medium ">Appointment</a>
                    <CgArrowTopRight className='font-extrabold md:text-xl' />
                    </div>

                    <div className=' text-white w-28 h-8 md:w-40 md:h-12 btn 
                    bg-transparent hover:bg-transparent rounded-[12px]  '>
                    <a className="font-medium ">Learn More</a>
                    <CgArrowTopRight className='font-extrabold md:text-xl' />
                    </div>

                    </div>
                </div>
                <div className='' >
                    <img src="https://i.ibb.co/tsFmr1W/logo-light.png" alt="" />
                </div>
            </div>
           </div>

            
           </div>
           </div> 
        </div>
        
    );
};

export default OfferSessionBanner;