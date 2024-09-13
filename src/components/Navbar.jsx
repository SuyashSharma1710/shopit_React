import React from "react";

function Navbar() {
const totop = ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  });
}
const product = ()=>{
  window.scrollTo({
    top:1910,
    behavior:'smooth',
  });
}
const about = ()=>{
  window.scrollTo({
    top:2830,
    behavior:'smooth',
  });
}
const contact = ()=>{
  window.scrollTo({
    top:3460,
    behavior:'smooth',
  });
}

  return (
    <nav className="italic w-full flex flex-col justify-center ">
      <div className="text-4xl h-20 bg-teal-800 flex items-center justify-center">
        SHOP / iT
      </div>
      <div className="  flex justify-center bg-teal-700">
        <div className="w-full sm:w-2/4 h-8 flex justify-evenly items-center">
            <a href="#" onClick={totop} rel="noopener noreferrer"className="text-white">Home</a>
            <a href="#" onClick={product} rel="noopener noreferrer"className="text-white">Product</a>
            <a href="#" onClick={about} rel="noopener noreferrer"className="text-white">About</a>
            <a href="#" onClick={contact} rel="noopener noreferrer"className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
