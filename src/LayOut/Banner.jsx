
const Banner = () => {
    return (
        <div className="w-10/12 mx-auto my-8 font-Inter" >
            {/* banner session part */}
        <div className=" relative "  >
           <div className="mb-16" >
           <img  className="w-full " src="https://i.ibb.co/HTftTvc/Rectangle-5.png" alt="" />
           <div className=" w-full rounded-[55px] absolute inset-0 bg-gradient-to-b from-transparent via-[#015e4d96] to-[#04024a] opacity-50"></div>
           </div> 
        </div>

        {/* Comprehensive Care for Every Patient */}
        <h1 className=" font-Inter font-semibold text-5xl text-center mt-10 -mb-20" > Comprehensive Care <br /> for Every Patient </h1>
        {/* Card session */}
        <div className="grid grid-cols-5 items-end font-Inter" >
            <div className=" w-[216px] h-[312px] rounded-[24px] bg-[#f5f2f2] p-6 border-[1px]" >
                <h1 className="font-semibold text-4xl mb-3" >90%</h1>
                <p className="text-sm" >Patient satisfaction <br /> rate, reflecting our commitment.</p>
                <img className="w-[130px] h-[130px] mx-auto mt-6" src="https://i.ibb.co/Fx3ZYHz/pie-chart-301669.png" alt="" />
            </div>

            <div className=" w-[216px] h-[190px] rounded-[24px] bg-[#ffffef] p-6 border-[1.5px]" >
            <h1 className="font-semibold text-4xl mb-3" >500+</h1>
            <p className="text-sm" >Board-certified doctors</p>
            <img className="w-16 ml-24 mt-4" src="https://i.ibb.co/QJVWKtp/medical-certificate-6750568.png" alt="" />
            </div>

            <div className=" w-[216px] h-[162px] rounded-[24px] bg-[#f5f2f2] p-6 border-[1.5px]" >
            <div className="flex gap-2" >
            <h1 className="font-semibold text-4xl mb-3" >4.8</h1>
            <img className="w-9 h-9" src="https://i.ibb.co/8rrH6nC/star-290413.png" alt="" />
            </div>
            <p className="text-sm" >Over 20,000 Patient</p>
         
            <div className="flex mt-2" >
                <img className="w-10 h-10 rounded-badge "  src="https://i.ibb.co/RhD1JmP/468e67ad27d796428df80703412aebd7.jpg" alt="" />
                <img className="w-10 h-10 rounded-badge -ml-4" src="https://i.ibb.co/cy5dvDP/cd5649351bed6a5d7acd6e3ab5000778.jpg" alt="" />
                <img className="w-10 h-10 rounded-badge -ml-4" src="https://i.ibb.co/L5dvPFg/d08cbe61699dcdccad10d7e4dd0904b0.jpg" alt="" />
                <img className="w-10 h-10 rounded-badge -ml-4" src="https://i.ibb.co/d2sCcX7/f2cf44bfa3af771f6396363d4ae67aab.jpg" alt="" />
            </div>

    
            </div>

            <div className=" w-[216px] h-[190px] rounded-[24px] bg-[#ffffef] p-6 border-[1.5px]" >
            <h1 className="font-semibold text-4xl mb-3" >$5000</h1>
            <p className="text-sm" >Money spend for poor patient</p>
            <img className="w-20 ml-24 -mt-5 " src="https://i.ibb.co/1dCV15n/investors-7788425.png" alt="" />
            </div>

            <div className=" w-[216px] h-[312px] rounded-[24px] bg-[#f5f2f2] p-6 border-[1px]" >
            <div>
            <h1 className="font-semibold text-4xl mb-3" >50+</h1>
            </div>
            <p className="text-sm" >Free lesion video for patient.</p>
            <img className="w-[130px] mx-auto mt-10" src="https://i.ibb.co/j5D795w/medical-assistance-12570545.png" alt="" />
            </div>
         </div>
        </div>
    );
};

export default Banner;