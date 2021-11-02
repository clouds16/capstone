import React, { useState } from 'react';
import "../index.css" ;
import Axios from "axios"
import { useHistory } from 'react-router-dom';

function Signup() {

    const history = useHistory();
    let [loginData , setLoginData] = useState({
        fname : "",
        lname : "",
        email : "",
        password : "",
    })
    
    function submitForm(e) {
        Axios.post('/signup', loginData ).then( (response) => {
            setLoginData( loginData._id = response.data._id);
            console.log(loginData)
            let url = "/profile/" + loginData._id + "/program";
            history.push(url);
        } ).catch((e) =>{
            alert("Could Create New Account")
        })
        e.preventDefault()
        
    }

    const handleChange = evt => {
        const name = evt.target.name;
        const value =
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setLoginData({
          ...loginData,
          [name]: value
        })
        console.log(loginData)
      }
    

    return (
        <div className="flex bg-white w-full  h-screen ">
            <div className="left-container flex-1 p-10 m-10 flex ">
                <div className="flex-row p-5 text-black self-center  ">
                    <h1 className="flex-1 text float-left text-5xl">Let the Motivation begin!</h1>
                    <h1 className="flex-1 text float-left text-5xl"> It´s as easy as 1 , 2 , 3 !</h1>
                    <h1 className="flex-1 text float-left text-5xl"> Sign up!</h1>
                </div>
            </div>

            <div className="right-containter flex-1 bg-gray-100 p-10 m-10 flex  drop-shadow-2xl shadow-2xl rounded-xl">
                <div className="  w-full pt-10 ">
                    <form action="" className="myform grid grid-rows-5  ">
                    

                        <div className="item flex flex-col">
                            <label htmlFor="" className="flex-1 text-left  ">First Name</label>
                            <input onChange={handleChange}  name="fname" value={loginData.fname} placeholder="John" type="text" className="border-box p-2 flex-1 border-black border-2 m-2 rounded-md hover:border-green-500" />
                        </div>
                        
                        <div className="item flex flex-col">
                            <label htmlFor="" className="flex-1 text-left  ">Last Name</label>
                            <input onChange={handleChange}  name="lname"  value={loginData.lname}  placeholder="Smith" type="text" className="border-box p-2  flex-1 border-black border-2 m-2 rounded-md hover:border-green-500" />
                        </div>

                        <div className="item flex flex-col">
                            <label htmlFor="" className="flex-1 text-left  ">Email</label>
                            <input onChange={handleChange}  name="email"  value={loginData.email}  placeholder="Email" type="email" className="border-box p-2 flex-1 border-black border-2 m-2 rounded-md hover:border-green-500" />
                        </div>

                        <div className="item flex flex-col">
                            <label htmlFor="" className="flex-1 text-left  ">Password</label>
                            <input onChange={handleChange}  name="password" value={loginData.password} placeholder="Password..." type="password" className="border-box p-2 m-2 flex-1 border-black border-2 m-2 rounded-md hover:border-green-500" />
                        </div>
                        
                        <input type="submit" onClick={submitForm} className="border-box p-2 m-2 bg-green-300 border-black border-2 rounded-md hover:border-green-500" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;