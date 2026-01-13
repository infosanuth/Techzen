
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
    <div className="container 2xl:px-20 px-4 sm:px-6 mx-auto mt-4 mb-4">

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center rounded-2xl px-4 sm:px-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Over 10,000 jobs to apply
        </h2>

        <p className="mb-10 max-w-xl mx-auto text-sm md:text-base text-blue-100">
          Your next big career move starts here. Explore top opportunities from trusted companies.
        </p>

        {/* Search Box */}
        <div className="bg-white text-gray-600 rounded-xl p-2 flex flex-col sm:flex-row gap-2 max-w-xl mx-auto shadow-lg">
          <div className="flex items-center gap-2 px-2 flex-1">
            <img className="h-4" src={assets.search_icon} alt="" />
            <input
              ref={titleRef}
              type="text"
              placeholder="Job title or keyword"
              className="outline-none w-full text-sm"
            />
          </div>

          <div className="flex items-center gap-2 px-2 flex-1">
            <img className="h-4" src={assets.location_icon} alt="" />
            <input
              ref={locationRef}
              type="text"
              placeholder="Location"
              className="outline-none w-full text-sm"
            />
          </div>

          <button
            onClick={onSearch}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg text-sm"
          >
            Search Jobs
          </button>
        </div>

        {/* Secondary CTA */}
        <button
          onClick={() => navigate('/jobs')}
          className="mt-6 text-sm underline text-blue-100 hover:text-white"
        >
          Browse all jobs →
        </button>
      </div>

      {/* Trusted Companies */}
      <div className="border border-gray-200 rounded-2xl bg-white mt-12 px-4 sm:px-8 py-2 max-sm:hidden">
        <div className=" flex items-center justify-center gap-6 lg:gap-16">
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
