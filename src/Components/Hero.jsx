// import React from 'react'
import { heroImg } from "../assets"

const Hero = () => {
    
    return (
    <div className=" h-screen  grid grid-cols-2 gap-2">
       <div className="ml-5 mt-12 px-10 py-5">
            <h1 className="text-5xl text-title font-bold">
            Empower Your Influence: Social Media Analytics for Influencers
            </h1>
            <p className="text-3xl mt-8 text-sub-title">
            Unlock the power of AI-driven social media analytics to optimize content, attract coveted brand collaborations, and propel your influence to new heights. Let AI be your guiding force on the path to unparalleled influencer success.
            </p>
            <button className="px-3 py-2 text-sm font-bold rounded-2xl mr-2.5 mt-8 font-poppins border-2 text-blue-1 border-blue-1 hover:text-grey-1  hover:bg-blue-1">TRY IT NOW!
            </button>
            <button className=" px-3 py-2 text-sm rounded-2xl font-bold mt-8 ml-2.5 font-poppins border-2 text-blue-1 border-blue-1 hover:text-grey-1  hover:bg-blue-1">
            VIEW DEMO
            </button>
        </div>
        <div className="">
            <img src={heroImg} alt="Hero Image" className="h-4/5 xl:h-screen"/>
        </div>


    </div>
    )
}

export default Hero