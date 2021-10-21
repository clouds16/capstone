import React from 'react';
import "../index.css" ;

const Navbar = () => {
    return (
        <div className="w-full h-auto bg-indigo-400 font-serif text-white flex">
                <div className="h-full p-2 m-2 w-min overflow-hidden "> <h1 className="text-xl font-bold float-left">MOTIVATR</h1> </div>
                <div className="h-full p-2 m-2 w-min hover:bg-purple-500  hover:text-black overflow-hidden "> <a className="float-left  " href="/"> Home </a></div>
                <div className="h-full p-2 m-2 w-min hover:bg-purple-500  hover:text-black overflow-hidden" ><a className="float-left " href="/about"> About </a></div>
                <div className="h-full p-2 m-2 w-min hover:bg-purple-500  hover:text-black overflow-hidden" ><a className="float-left" href="/contactus"> Contact </a></div>
                <div className="h-full p-2 m-2 w-min hover:bg-purple-500  hover:text-black overflow-hidden float-right" ><a className="float-right" href="/signup"> Login/SignUp </a></div>
        </div>
    );
};

export default Navbar;