import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

  const { setSearchFilter, setIsSearched } = useContext(AppContext)

  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)

    document.getElementById("job-list")?.scrollIntoView({ behavior: "smooth" })  // ChatGPT

    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
  }


  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-blue-600 to to-purple-600 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000 jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm  px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
        <div className='flex items-center justify-between bg-white text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
          <div className='flex items-center'>
            <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
            <input ref={titleRef} type="text" placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full' />
          </div>
          <div className='flex items-center'>
            <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
            <input ref={locationRef} type="text" placeholder='Location' className='max-sm:text-xs p-2 rounded outline-none w-full' />
          </div>
          <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>

      <div className="border border-gray-200 shadow-md rounded-2xl mx-2 mt-8 bg-white">
        <div className="max-sm:hidden flex items-center justify-center gap-6 lg:gap-16">
          <p className="font-medium">Trusted by</p>

          <img className="h-10 mt-1" src={assets.wso2_logo} alt="" />
          <img className="h-30 -ml-5 -mt-1" src={assets.lseg_logo} alt="" />
          <img className="h-10 -mt-1 -ml-10" src={assets.wiley_logo} alt="" />
          <img className="h-10 -mt-1" src={assets.ifs_logo} alt="" />
          <img className="h-15 -mt-2" src={assets.logo_99x} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Hero
