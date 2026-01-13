import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    
     <section className="container 2xl:px-20 mx-auto px-4 mt-0 sm:mt-12">
      {/* <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl px-8 py-16 sm:px-16 sm:py-20 lg:px-24"> */}
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl px-4 sm:px-6 lg:px-12 py-16 sm:py-20">

        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Get the mobile app for a better experience
          </h2>

          <p className="text-gray-600 mb-8">
            Search jobs, apply faster, and track your applications on the go.
          </p>

          <div className="flex gap-4">
            <img className="h-12 cursor-pointer" src={assets.play_store} alt="" />
            <img className="h-12 cursor-pointer" src={assets.app_store} alt="" />
          </div>
        </div>

        <img
          className="absolute right-10 bottom-0 w-72 hidden lg:block"
          src={assets.app_main_img}
          alt=""
        />
      </div>
    </section>
  )
}

export default AppDownload