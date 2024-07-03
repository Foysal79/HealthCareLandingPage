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
                <li> <a href="#">Home</a> </li>
                <li> <a href="#"> About us </a> </li>
                <li> <a href="#"> Success Page </a> </li>
                <li> <a href="#">Terms And Conditions </a> </li>
            </div>
            <div className='list-none space-y-4'>
                <li> <a href="#"> Services</a> </li>
                <li> <a href="#"> Scheduling </a> </li>
                <li> <a href="#"> Contact Us </a> </li>
                <li> <a href="#"> Patient Portal </a> </li>
            </div>
            <div className='space-y-16' >
                <div className='space-y-4'>
                    <p className='opacity-80' >Follow Us</p>
                    <div className='flex gap-4' >
                        <a href="#">  <FaFacebook className='text-2xl' /> </a>
                        <a href="#"> <FaInstagram className='text-2xl' /></a>
                        <a href="#"> <FaLinkedin className='text-2xl' /></a>
                        <a href="#"> <FaYoutubeSquare  className='text-2xl' /></a>
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