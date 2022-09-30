import React from 'react';
import { MdOutlinePhone, MdOutlinePlace, MdAccessTime } from "react-icons/md";
function ContactUs() {
  return (
    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      <div className="h-[1500px]">
        <div className="grid grid-cols-3 gap-4 grid-flow-col justify-around justify-items-center mt-3">
          <div className="visitus-box bg-textOther text-textColor justify-items-center pl-[150px] w-[358px] h-[194px] border-textOther rounded-2xl">
            <div className="bg-textColor text-textOther text-[20px] w-16 h-12 rounded-b-full pt-3 pl-[22px] mb-5">
              <MdOutlinePhone />
            </div>
            <h3 className="pb-5 ml-[6px]">PHONE</h3>
            <a href="tel: +91 9898025928" className="ml-[-16px]">
              9898025928
            </a>
          </div>
          <div className="visitus-box bg-textOther text-textColor justify-items-center pl-[150px] w-[358px] h-[194px] border-textOther rounded-2xl">
            <div className="bg-textColor text-textOther text-[20px] w-16 h-12 rounded-b-full pt-3 pl-[22px] mb-5">
              <MdOutlinePlace />
            </div>
            <h3 className="pb-5 ml-[-3px]">ADDRESS</h3>
            <a
              href="http://maps.google.com/?q=123 Main Street, Uni 21, New York City"
              className="ml-[-60px]"
            >
              123 Main Street, New York
            </a>
          </div>
          <div className="visitus-box bg-textOther text-textColor justify-items-center pl-[150px] w-[358px] h-[194px] border-textOther rounded-2xl">
            <div className="bg-textColor text-textOther text-[20px] w-16 h-12 rounded-b-full pt-3 pl-[22px] mb-5">
              <MdAccessTime />
            </div>
            <h3 className="pb-5 ml-[-30px]">WORKING HOURS</h3>
            <p className="ml-[-75px]">MON - FRI: 11:00 AM - 12:00 AM</p>
            <p className="ml-[-75px]">SAT - SUN: 09:00 AM - 12:00 AM</p>
          </div>
        </div>
        {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.458231605829!2d72.81827801488267!3d22.59935748516907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1663589777915!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      </div>
    </main>
  );
}

export default ContactUs
