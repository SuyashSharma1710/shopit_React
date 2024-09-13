import React from "react";
import { contact, call, email } from "../assets";
import { contactinfo } from "../constants";

function Contact() {
  return (
    <div className="bg-gun-gray ">
      <h1 className="w-full text-teal-900 text-7xl sm:text-left pt-8 px-14">
        Contact
      </h1>
      <div className="flex flex-col  lg:flex-row p-8">
        <img src={contact} className="md:w-[400px] m-auto" alt="" />
        <section className="bg-gun-gray flex-1 flex flex-col gap-8 justify-center items-center">
          {contactinfo.map((contactinfo) => (
            <div className=" w-full sm:w-[60%] p-8 gap-2 border-2 flex justify-evenly items-center border-teal-800 rounded-lg">
              <img src={contactinfo.icon} alt="" className="h-16" />
              <div className="w-[60%]">
                <h1 className="text-teal-700 text-4xl pb-2">
                  {contactinfo.tag}
                </h1>
                <p className="text-teal-600">{contactinfo.info}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Contact;
