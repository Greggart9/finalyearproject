import React from 'react'
import './Landing.css'


const Landing = () => {
  return (

    <>

     {/* The Header to the landing page */}
      
    <header className='py-4 border-b-2 border-blue-300'>
        <div className='container mx-auto flex items-center justify-between'>
                {/* The Logo Div */}

            <div className='flex items-center ml-4'>
                <img src='/Images/Logo.png' className='h-16' alt='Website Logo' />
            </div>

            {/* The Navbar Div */}

            <nav>
                <ul className='flex space-x-4'>
                    <li className='hover:bg-blue-400 text-black hover:text-white font-bold py-2 px-5 rounded-3xl '>Home</li>
                    <li className='hover:bg-blue-400 text-black hover:text-white font-bold py-2 px-5 rounded-3xl '>About Us</li>
                    <li className='hover:bg-blue-400 text-black hover:text-white font-bold py-2 px-5 rounded-3xl '>University</li>
                    <li className='hover:bg-blue-400 text-black hover:text-white font-bold py-2 px-5 rounded-3xl '>Contact Us</li>
                </ul>

            </nav>

            {/* The Login/Signup Div */}

            <div className='mr-4 flex space-x-4'>
                <button className='text-blue-400 border border-blue-400 py-2 px-5 rounded-3xl hover:bg-blue-400 hover:text-white'>Login</button>
                <button className='text-blue-400 border border-blue-400 py-2 px-5 rounded-3xl hover:bg-blue-400 hover:text-white'>Sign up</button>
            </div>
        </div>  
        
    </header>

     {/* This is beginning of the body to the landing page */}

     <section className='w-100'>
        <div className='container mx-auto flex items-center'>

             {/* The content by the left hand side THE TEXT*/}
            <div className='space-y-4 flex-2'>
                <p className='text-4xl '>Empower Your <br/> Education, Elevate<br/> Your Learning <br/>Journey</p>
                <p>The Ultimate Collaboration Hub for Students and Lecturers to Expand Knowledge and Sharpen Skills.</p>
                <button className='text-white py-3 px-7 bg-blue-400 rounded-3xl hover:bg-blue-600'>Get Started</button>

            </div>

             {/* The content by the left hand side THE IMAGE*/}
             
             <div className='flex-1'>
                <img className='h-96' src='/Images/img1.png' alt='A passionate lady' />
             </div>



        </div>

     </section>

    


    </>
  )
}

export default Landing