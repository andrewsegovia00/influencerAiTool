// import React from 'react'
import { heroImg } from "../assets"

const Hero = () => {
    
    return (
    <div className="h-screen bg-yellow-200 grid grid-cols-2 gap-2 ">
       <div className="mt-12 px-10 py-5">
            <h1 className="text-5xl">
            Header Sample: Whatever you want it to be
            </h1>
            <p className="text-3xl mt-8">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className="px-3 py-2 text-sm font-bold rounded-2xl mr-2.5 mt-8 font-poppins border-2 border-black hover:text-yellow-200  hover:bg-black">TRY IT NOW!
            </button>
            <button className=" px-3 py-2 text-sm rounded-2xl font-bold mt-8 ml-2.5 font-poppins border-2 border-black hover:text-yellow-200  hover:bg-black">
            VIEW DEMO
            </button>
        </div>
        <div className="">
            <img src={heroImg} alt="Hero Image" className="w-screen"/>
        </div>


    </div>
    )
}

export default Hero