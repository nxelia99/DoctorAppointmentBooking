import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const handleInputChange = e=>{
    setFormData({... formData, [e.target.name]:e.target.value});
  };

  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello, <span className="text-primaryColor">welcome</span> back.
        </h3>

        <form className='py-4 md:py-0'>
          <div className="mb-5">
            <input type="email" placeholder='Enter your email' name='email'
            value={formData.email} 
            onChange={handleInputChange} 
            className='w-full py-3 border-b border-salid border-[#0066ff61] 
            focus:outline-none focus:border-b-primaryColor
            text-[16px] leading-7 tex-headingColor placeholder:text-textColor 
            cursor-pointer' required />
          </div>

          <div className="mb-5">
            <input type="password" placeholder='Password' name='password'
            value={formData.password} 
            onChange={handleInputChange} 
            className='w-full py-3 border-b border-salid border-[#0066ff61] 
            focus:outline-none focus:border-b-primaryColor
            text-[16px] leading-7 tex-headingColor placeholder:text-textColor 
            cursor-pointer' required />
          </div>

          <div className="mt-7">
            <button className="w-full btn" type='submit'>
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don't have an account? <Link to='/register'
            className='text-primaryColor font-medium
            ml-1'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login