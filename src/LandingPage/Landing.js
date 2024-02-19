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
                    <li className='hover:bg-blue-400 text-black hover:text-white text-xl py-2 px-5 rounded-3xl cursor-pointer'>Home</li>
                    <li className='hover:bg-blue-400 text-black hover:text-white text-xl py-2 px-5 rounded-3xl cursor-pointer '>About Us</li>
                    <li className='hover:bg-blue-400 text-black hover:text-white text-xl py-2 px-5 rounded-3xl cursor-pointer'>University</li>
                    <li className='hover:bg-blue-400 text-black hover:text-white text-xl py-2 px-5 rounded-3xl cursor-pointer'>Contact Us</li>
                </ul>

            </nav>

            {/* The Login/Signup Div */}

            <div className='mr-4 flex space-x-4'>
                <button className='text-blue-400 border border-blue-400 py-2 px-7 text-x rounded-3xl hover:bg-blue-400 hover:text-white cursor-pointer'>Login</button>
                <button className='text-white bg-blue-400  py-2 px-5 rounded-3xl text-x hover:bg-white hover:text-blue-400 hover:border hover:border-blue-400 cursor-pointer'>Sign up</button>
            </div>
        </div>  
        
    </header>

     {/* This is beginning of the body to the landing page */}

     <section className='w-100 h-[33.4rem]  flex items-center bg-blue-100'>
        <div className='container mx-auto w-10/12 flex items-center justify-between'>

             {/* The content by the left hand side THE TEXT*/}
            <div className='space-y-8 '>
                <p className='text-6xl font-bold'><span className='text-blue-400'>Power Your</span><br/> Education, <span  className='text-blue-400'>Elevate</span><br/> Your Learning <br/>Journey</p>
                <p className='text-xl'>The Ultimate Collaboration Hub for Students <br/>and Lecturers to Expand Knowledge and Sharpen Skills.</p>
                <button className='text-white bg-blue-400  py-3 px-7 rounded-3xl hover:bg-white hover:text-blue-400 hover:border-2 hover:border-blue-400 cursor-pointer'>Get Started</button>

            </div>

             {/* The content by the left hand side THE IMAGE*/}
             
             <div className=''>
                <img className='h-[25rem]' src='/Images/img1.png' alt='A passionate lady' />
             </div>
             
             {/* The ring image by the bottom THE IMAGE*/}

             <div className='absolute bottom-0 left-[35rem]'>
                <img className='h-[20rem] -z-1' src='Images/img2.png' alt='The ring' />
             </div>
        </div>

     </section>


          {/* THE STATS DIV */}

          <section className='bg-red-300 w-100 flex justify-center'>

            <div className='flex justify-evenly w-[70rem] py-10'>

                {/* RESOURCES */}
                <div className='flex items-center gap-3'>
                    <img className='h-16' src='/Images/img3.png' alt='Resources' />
                    <div>
                        <p className='font-bold text-2xl m-0'>1K+</p>
                        <p className='text-lg m-0'>Resources</p>
                    </div>
                </div>

                {/* PAST QUESTIONS */}
                <div className='flex items-center gap-3'>
                    <img className='h-16' src='/Images/img4.png' alt='Past questions' />
                    <div>
                        <p className='font-bold text-2xl m-0'>500+</p>
                        <p className='text-lg m-0'>Past Questions</p>
                    </div>
                </div>

                {/* UNIVERSITIES */}
                <div className='flex items-center gap-3'>
                    <img className='h-16' src='/Images/img5.png' alt='universities' />
                    <div>
                        <p className='font-bold text-2xl m-0'>100+</p>
                        <p className='text-lg m-0'>Universities</p>
                    </div>
                </div>
            </div>

          </section>

    


    </>
  )
}

export default Landing