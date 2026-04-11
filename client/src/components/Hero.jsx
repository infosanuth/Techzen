
import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext)
  const navigate = useNavigate()

  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)
    navigate('/jobs')
  }

  return (
    <div className="container px-4 mx-auto mt-4 mb-4 2xl:px-20 sm:px-6">

      {/* Hero */}
      <div className="px-4 py-20 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-4xl lg:text-5xl">
          Over 10,000 jobs to apply
        </h2>

        <p className="max-w-xl mx-auto mb-10 text-sm text-blue-100 md:text-base">
          Your next big career move starts here. Explore top opportunities from trusted companies.
        </p>

        {/* Search Box */}
        <div className="flex flex-col max-w-xl gap-2 p-2 mx-auto text-gray-600 bg-white shadow-lg rounded-xl sm:flex-row">
          <div className="flex items-center flex-1 gap-2 px-2">
            <img className="h-4" src={assets.search_icon} alt="" />
            <input
              ref={titleRef}
              type="text"
              placeholder="Job title or keyword"
              className="w-full text-sm outline-none"
            />
          </div>

          <div className="flex items-center flex-1 gap-2 px-2">
            <img className="h-4" src={assets.location_icon} alt="" />
            <input
              ref={locationRef}
              type="text"
              placeholder="Location"
              className="w-full text-sm outline-none"
            />
          </div>

          <button
            onClick={onSearch}
            className="px-6 py-2 text-sm text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Search Jobs
          </button>
        </div>

        {/* Secondary CTA */}
        <button
          onClick={() => navigate('/jobs')}
          className="mt-6 text-sm text-blue-100 underline hover:text-white"
        >
          Browse all jobs →
        </button>
      </div>

      {/* Trusted Companies */}
      <div className="px-4 py-2 mt-12 bg-white border border-gray-200 rounded-2xl sm:px-8 max-sm:hidden">
        <div className="flex items-center justify-center gap-6 lg:gap-16">
          <p className="font-medium">Trusted by</p>

          <img className="h-10 mt-1" src={assets.wso2_logo} alt="" />
          <img className="-mt-1 -ml-5 h-30" src={assets.lseg_logo} alt="" />
          <img className="h-10 -mt-1 -ml-10" src={assets.wiley_logo} alt="" />
          <img className="h-10 -mt-1" src={assets.ifs_logo} alt="" />
          <img className="-mt-2 h-15" src={assets.logo_99x} alt="" />
        </div>
      </div>

    </div>
  )
}


export default Hero
