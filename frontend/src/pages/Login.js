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
        console.log(formData)
        Axios.post('/login', formData).then( (res)=> {
            setFormData(formData._id = res.data._id)
            console.log(formData)
            
            try {
                let url = '/profile/' + formData._id
                history.push(url)


            } catch (e) {
                console.log(e)
            }

        }).catch( (e) => [
            console.log(e)
        ])
        e.preventDefault()
    }

    return (
        <section className="h-screen w-screen bg-red-300 flex"> 
            <div className="container flex bg-green-100 self-center">
                <form action="" className="bg-yellow-100 self-center">
                    <label htmlFor="" className="1"> Email </label>
                    <input onChange={handleChange} name="email" value={formData.email} type="email" className="border-box" />

                    <label htmlFor="" className="" > Password </label>
                    <input onChange={handleChange} name="password" value={formData.password} type="password" className="border-box" />

                    <input  onClick={submitForm} type="submit" value="submit" />
                </form>
            </div>
        </section>
    );
};

export default Login;