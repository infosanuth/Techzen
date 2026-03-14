import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MdOutlineLibraryAdd } from "react-icons/md"
import { FiHome } from "react-icons/fi"
import { RiListView } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { AppContext } from '../context/AppContext'

const Dashboard = () => {

  const navigate = useNavigate()

  const { companydata, setCompanyData, setCompanyToken } = useContext(AppContext)

  // Function to logout for company

  const logout = () => {
    setCompanyToken(null)
    localStorage.removeItem('companyToken')
    setCompanyData(null)
    navigate('/')
  }

  return (
    <div className='min-h-screen'>

      {/* Navbar for Recuriter Panel */}
      <div className='py-4 shadow'>
        <div className='flex items-center justify-between px-5'>
          <img onClick={e => navigate('/')} className='cursor-pointer max-sm:w-32' src={assets.logo} alt="" />
          {companydata && (
            <div className='flex items-center gap-3'>
              <p className='max-sm:hidden'>Welcome, {companydata.name}</p>
              <div className='relative group'>
                <img className='w-8 border border-white rounded-full' src={companydata.image} alt="" />
                <div className='absolute top-0 right-0 z-10 hidden pt-12 text-black rounded group-hover:block'>
                  <ul className='p-2 m-0 text-sm list-none bg-white border rounded-md'>
                    <li onClick={logout} className='px-2 py-1 pr-10 cursor-pointer'>Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='flex items-start'>

        {/* Sidebar */}
        <div className='inline-block min-h-screen border-r-1'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/add-job'}>
              <MdOutlineLibraryAdd className='size-6' />
              <p className='max-sm:hidden'>Add Job</p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manage-job'}>
              <FiHome className='size-6' />
              <p className='max-sm:hidden'>Manage Job</p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/view-applications'}>
              <RiListView className='size-6' />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/settings'}>
              <VscSettingsGear className='size-6' />
              <p className='max-sm:hidden'>Settings</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Dashboard
