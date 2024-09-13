import React from "react";

function Footer() {
  return (
    <div className="bg-custom-gradient min-h-fit overflow-y-scroll gap-12 flex flex-col md:justify-between">
      <h1 className="w-full text-teal-900 text-7xl sm:text-left italic pt-8 px-14">
        SHOP/it
      </h1>
      <section className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex flex-col gap-4 flex-1 md:flex-row justify-evenly">
          <div className="flex flex-col ">
            <h2 className="mb-4 text-3xl text-teal-900">SHOP</h2>
            <a href="#" className="text-white text-left pl-8">
              Sneakers
            </a>
            <a href="#" className="text-white text-left pl-8">
              Sports
            </a>
            <a href="#" className="text-white text-left pl-8">
              Running
            </a>
            <a href="#" className="text-white text-left pl-8">
              Casuals
            </a>
            <a href="#" className="text-white text-left pl-8">
              Gift Card
            </a>
            <a href="#" className="text-white text-left pl-8">
              Refer a Friend
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-3xl text-teal-900">HELP</h2>
            <a href="#" className="text-white text-left pl-8">
              Contact Us
            </a>
            <a href="#" className="text-white text-left pl-8">
              FAQ
            </a>
            <a href="#" className="text-white text-left pl-8">
              Accessibility
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-3xl text-teal-900">ABOUT</h2>
            <a href="#" className="text-white text-left pl-8">
              Our Story
            </a>
            <a href="#" className="text-white text-left pl-8">
              SHOP/iT Digest
            </a>
            <a href="#" className="text-white text-left pl-8">
              Wholesale
            </a>
            <a href="#" className="text-white text-left pl-8">
              Press
            </a>
            <a href="#" className="text-white text-left pl-8">
              Careers
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center md:justify-start gap-4 md:gap-8">
          <p className="text-teal-900 font-bold">
            Sign up to get 10% off on your first order
          </p>

          <div className="flex gap-2 items-center justify-center">
            <input
              className="bg-teal-100 h-10 pl-4 rounded-full text-teal-900 leading-none w-[50%]"
              type="email"
              name=""
              id=""
              placeholder="Your Email Address"
            />
            <button
              type="#"
              className="h-10 bg-yellow-300 text-teal-900 leading-none rounded-full"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section className=" h-8 flex flex-col justify-between px-12 lg:flex-row ">
        <p>&copy;2024 SHOP/it, ALL RIGHTS RESERVED</p>
        <div className="flex flex-col lg:flex-row text-slate-400  lg:gap-4">
          <p>Terms Of Service,</p>
          <p>Privacy Policy,</p>
          <p>DO Not Sell My Information</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
