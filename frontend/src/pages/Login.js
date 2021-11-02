import React, {useState} from 'react';
import Axios from "axios"
import { useHistory } from 'react-router-dom';


const Login = () => {
 
    const history = useHistory()
    let [formData, setFormData] = useState({
        email: "",
        password : "", 
        _id: ""
    })

    const handleChange = evt => {
        const name = evt.target.name;
        const value =
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setFormData({
          ...formData,
          [name]: value
        })
      }

    function submitForm(e) {
        
        Axios.post('/login', formData).then( (res)=> {
            
            setFormData(formData._id = res.data._id)
            
            let url = '/profile/' + formData._id
            history.push(url)

        }).catch( (e) => {
            alert("Could not login!")
        })
        e.preventDefault()
    }

    return (
        <section className=" h-screen w-screen flex justify-center items-center "> 
            <div className="flex  w-1/4 h-1/2 overflow-hidden justify-center items-center ">
                <form action="" className="container bg-indigo-200 self-center flex-row justify-center items-center shadow-2xl drop-shadow-md rounded-2xl p-3">
                    <div className="container p-3 m-2">
                        <label htmlFor="" className="1"> Email </label>
                        <input onChange={handleChange} name="email" value={formData.email} type="email" className="border-box h-10 block w-full" />
                    </div>
                    
                    <div className="container p-3 m-2">
                        <label htmlFor="" className="" > Password </label>
                        <input onChange={handleChange} name="password" value={formData.password} type="password" className="border-box h-10  w-full block" />
                    </div>
                    
                    <input  onClick={submitForm} className="container p-2 m-2 bg-white border-4 border-green-500  hover:scale-125 hover:bg-green-400   rounded-2xl" type="submit" value="submit" />
                </form>
            </div>
        </section>
    );
};

export default Login;