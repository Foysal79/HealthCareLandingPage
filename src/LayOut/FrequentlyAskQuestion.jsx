import React from "react";

const FrequentlyAskQuestion = () => {
  return (
    <div className="w-10/12 mx-auto  font-Inter space-y-6">
      <button className=" text-[#020043] py-2 px-6 border-[1.5px] border-black rounded-[32px] text-[16px] cursor-pointer">
        Faq
      </button>
      <h1 className=" font-semibold text-[36px] text-[#020043]">
        Frequently Asked Question
      </h1>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="  collapse-title text-xl font-medium bg-[#ffffef] text-[#020043]">
        What are your office hours?
        </div>
        <div className="collapse-content bg-base-200">
          <p className="text-[14px] text-[#343268] py-4 px-3" >Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#ffffef] text-[#020043]">
        How can I schedule an appointment?
        </div>
        <div className="collapse-content bg-base-200">
          <p className="text-[14px] text-[#343268] py-4 px-3" >yes, firstly tactical interview</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#ffffef] text-[#020043]">
        Do you accept insurance?
        </div>
        <div className="collapse-content bg-base-200">
          <p className="text-[14px] text-[#343268] py-4 px-3" >No</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#ffffef] text-[#020043]">
        What should I bring to my appointment?
        </div>
        <div className="collapse-content bg-base-200">
          <p className="text-[14px] text-[#343268] py-4 px-3" >yes, Your resume submit .</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#ffffef] text-[#020043]">
        Do you offer tele-medicine appointments?
        </div>
        <div className="collapse-content bg-base-200">
          <p className="text-[14px] text-[#343268] py-4 px-3" >Yes .</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default FrequentlyAskQuestion;
