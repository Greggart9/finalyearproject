import React from 'react'

const Signin = () => {
  return (
    <>
    <section className='flex h-screen mx-auto justify-center items-center'>
            <div className='container flex  bg-red-200'>

        {/* SIGNIN PART */}
        <div className='flex-1 bg-green-200'>
            <p className='text-blue-400 font-bold text-2xl'>Sign In</p>

            <p className='text-gray-400 mt-3 text-sm font-bold'>Email</p>
            <input className='bg-gray-100 h-8 w-[18rem]' type='email' id='email' name='email' />

            <p className='text-gray-400 mt-2 text-sm font-bold'>Password</p>
            <input className='bg-gray-100 h-8 w-[18rem]' type='password' id='password' name='password' />

            <p className='text-blue-400 font-bold mt-2'>Forgot Password?</p>

            <button className='bg-gray-100 py-3 w-[18rem] rounded-3xl mt-3 text-bold'>Sign In</button>

            <p className=' text-sm font-bold'>Don't have an Account? <span className='text-blue-400'>Sign Up</span></p>

        </div>

        {/* IMAGE */}

        <div className='flex-1 bg-gray-200'>
            <img className='h-96' src='/Images/img11.png' alt='sign in' />

        </div>

        </div>

    </section>


    
    </>
  )
}

export default Signin