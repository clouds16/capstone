import React from 'react';
import "../index.css" ;
import HomeImage from "../images/stock-home-image.jpeg"

const Homepage = () => {
    return (
        <div className=" h-screen w-full bg-gray-100 flex flex-row justify-center ">
            <div className="flex-1 w-80 h-full self-center justify-center bg-white-600 flex "> 
                <div className="h-full w-300 self-center flex-row justify-center">
                    <div className="text-area flex-1  overflow-hidden m-20 mt-40"> 
                        <h1 className=" text-5xl float-left"> Motivation Starts Here</h1>
                        <h2 className="text-3xl float-left ">Destroying Excuses</h2>
                        <h2 className="text-3xl float-left ">Witnessing Results</h2>
                        <h2 className="text-3xl float-left ">Motivatr</h2>

                    </div>
                    <div className="button-area flex-1 overflow-hidden m-20 float-left">
                        <button className="bg-white p-3 m-3  rounded-lg border-black border-2 hover:bg-black hover:text-white "> Discover More</button>
                        <button className="bg-white p-3 m-3 rounded-xl border-black border-2 hover:bg-black hover:text-white"> Log In </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-80 h-full bg-yellow-400">
                 <img src={HomeImage} alt="Woman Working out " className="h-full w-full object-cover" /> 
            </div>
        </div>
    );
};

export default Homepage;