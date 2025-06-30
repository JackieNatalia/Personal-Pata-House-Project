import React from 'react'
import Logo from '../assets/signup.png'

function Signup() {
  return (
    <div className="container mx-auto my-10 px-4 rounded-4xl shadow-2xl/90 p-5 gap-6">
  <div className="flex flex-col md:flex-row items-center gap-5">
    {/* FORM SECTION */}
    <div className="w-full md:w-1/2 mb-10 md:mb-0 ">
      <h2 className="text-3xl font-bold my-6">Get Started Now</h2>
      <form className='ml-4'>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-normal">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-normal">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-normal">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">
            I agree to the <a href="#" className="text-orange-600 underline">terms & Conditions</a>
          </label>
        </div>

       
        <button type='submit' className='w-full bg-orange-600 shadow-lg shadow-gray-500/50 hover:bg-orange-700 text-white font-normal py-2 px-4 rounded mb-3'>Signup</button>

         <div className="flex justify-center">
          <button
            type="button"
            className="max-w-[300px] w-full self-center flex items-center justify-center border border-gray-300 py-2 px-4 rounded mb-3 mt-6"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google logo"
              className="mr-2"
            />
            <span className="text-black">Sign in with Google</span>
          </button>
        </div>


        <div className="text-sm text-center mb-7">
          Have an account? <a href="sign-in.html" className="text-orange-600 underline">Sign In</a>
        </div>
      </form>
    </div>

    {/* IMAGE SECTION */}
    <div className="w-full md:w-1/2">
      <img src={Logo} alt="Signup" className="w-full h-auto object-contain" />
    </div>
  </div>
</div>

  )
}
export default  Signup
