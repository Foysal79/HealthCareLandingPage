import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-10/12 mx-auto my-36 font-Inter space-y-6' >
            <button className=' text-[#020043] py-2 px-6 border-[1.5px] border-black rounded-[32px] text-[16px] cursor-pointer' >Testimonial</button>
            <h1 className=' font-semibold text-[36px] text-[#020043]' >What they say about us</h1>
            <div className='grid grid-cols-3 gap-10' >
                <div className=' space-y-3 bg-[#ffffef] px-6 py-8 rounded-[16px] w-[371px]' >
                    <h1 className='font-semibold text-[19px] text-[#020043]' >Expertise and Compassion Combined</h1>
                    <p className='text-[#4D4C7B] text-xs ' >I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className='flex gap-4' >
                           <img className='w-10 rounded-[90px]' src="https://i.ibb.co/RhD1JmP/468e67ad27d796428df80703412aebd7.jpg" alt="" />
                           <div className='space-y-1' >
                            <div className='flex' >
                                <h1 className='font-semibold text-[12px] text-[#020043]' >Sarah D , </h1>
                                <p className='text-[#4D4C7B] font-medium text-xs' > IT Professional</p>
                            </div>
                            <div className='flex' >
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                            </div>
                           </div>
                    </div>
                </div>
                <div className=' space-y-3 bg-[#ffffef] px-6 py-8 rounded-[16px] w-[371px]' >
                    <h1 className='font-semibold text-[19px] text-[#020043]' >Life-Saving Care, Life-Changing Experience</h1>
                    <p className='text-[#4D4C7B] text-xs ' >My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    <div className='flex gap-4' >
                           <img className='w-10 rounded-full' src="https://i.ibb.co/d2sCcX7/f2cf44bfa3af771f6396363d4ae67aab.jpg" alt="" />
                           <div className='space-y-1' >
                            <div className='flex' >
                                <h1 className='font-semibold text-[12px] text-[#020043]' >Michael R,  </h1>
                                <p className='text-[#4D4C7B] font-medium text-xs' > Business Executive</p>
                            </div>
                            <div className='flex' >
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 
                            </div>
                           </div>
                    </div>
                </div>
                <div className=' space-y-3 bg-[#ffffef] px-6 py-8 rounded-[16px] w-[371px]' >
                    <h1 className='font-semibold text-[19px] text-[#020043]' >A Partner in Health and <br />
                    Wellness</h1>
                    <p className='text-[#4D4C7B] text-xs ' >As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                    <div className='flex gap-4' >
                           <img className='w-10 rounded-full' src="https://i.ibb.co/L5dvPFg/d08cbe61699dcdccad10d7e4dd0904b0.jpg" alt="" />
                           <div className='space-y-1' >
                            <div className='flex' >
                                <h1 className='font-semibold text-[12px] text-[#020043]' >David S,  </h1>
                                <p className='text-[#4D4C7B] font-medium text-xs' > Lawyer</p>
                            </div>
                            <div className='flex' >
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                                 <img className='w-5' src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
                            </div>
                           </div>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default Testimonial;