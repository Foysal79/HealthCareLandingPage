import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-[rgb(2,0,67)] '>
           <div className='w-10/12 mx-auto space-y-10 py-28 '>
           <img src="https://i.ibb.co/tsFmr1W/logo-light.png" alt="" />
           <div className=' md:flex space-y-10 md:space-y-0 space-x-24'>

           <div className='space-y-10 text-white flex-auto '>
                <p>123 Main Street Anytown, USA <br /> Postal Code: 12345</p>
                <p>Support: support@oyolloo.com <br />(Available : 10:00am to 07:00pm)</p>
            </div>

            <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ' >
            
            <div className='list-none space-y-4'>
                <li>Home</li>
                <li>About us</li>
                <li>Success Page</li>
                <li>Terms And Conditions</li>
            </div>
            <div className='list-none space-y-4'>
                <li>Services</li>
                <li>Scheduling</li>
                <li>Contact Us</li>
                <li>Patient Portal</li>
            </div>
            <div className='space-y-16' >
                <div className='space-y-4'>
                    <p className='opacity-80' >Follow Us</p>
                    <div className='flex gap-4' >
                    <FaFacebook className='text-2xl' />
                    <FaInstagram className='text-2xl' />
                    <FaLinkedin className='text-2xl' />
                    <FaYoutubeSquare  className='text-2xl' />

                    </div>
                </div>
                <div>
                    <p className='opacity-80' >@docplus 2024</p>
                </div>
            </div>
           </div>

           </div>
           
           
           

           </div>
        </div>
    );
};

export default Footer;