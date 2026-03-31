import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '@clerk/clerk-react'

const ApplyJob = () => {

  const { id } = useParams()

  const { getToken } = useAuth()

  const navigate = useNavigate()

  const [jobData, setJobData] = useState(null)

  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false)

  const { jobs, backendUrl, userData, userApplication, fetchUserApplications } = useContext(AppContext)

  const fetchJob = async () => {

    try {

      const { data } = await axios.get(backendUrl + `/api/jobs/${id}`)

      if (data.success) {
        setJobData(data.job)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const applyHandler = async () => {
    try {

      if (!userData) {
        return toast.error('Login to apply for job')
      }

      if (!userData.resume) {
        navigate('/applications')
        return toast.error('Upload resume to apply')
      }

      const token = await getToken()

      const { data } = await axios.post(backendUrl + '/api/users/apply',
        { jobId: jobData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        toast.success(data.message)
        fetchUserApplications()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const checkAlreadyApplied = () => {

    const hasApplied = userApplication.some(item => item.jobId._id === jobData._id)

    setIsAlreadyApplied(hasApplied)
  }

  useEffect(() => {
    fetchJob()
  }, [id])

  useEffect(() => {
    if (userApplication.length > 0 && jobData) {
      checkAlreadyApplied()
    }
  }, [jobData, userApplication, id])


  return jobData ? (
    <>
      <Navbar />
      <div className='container flex flex-col min-h-screen px-4 py-10 mx-auto 2xl:px-20'>
        <div className='w-full text-black bg-white rounded-lg'>
          <div className='flex flex-wrap justify-center gap-8 py-20 mb-6 border md:justify-between px-14 bg-sky-50 border-sky-400 rounded-xl'>
            <div className='flex flex-col items-center md:flex-row'>
              <img className='h-24 p-4 m-4 bg-white border border-white rounded-lg max-md:mb-4' src={jobData.companyId.image} alt="" />
              <div className='text-center md:text-left text-neutral-700'>
                <h1 className='pb-1 text-2xl font-medium sm:text-4xl'>{jobData.title}</h1>
                <div className='flex flex-row flex-wrap items-center gap-6 text-gray-600 max-md:justify-center gap-y-2'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId.name}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="" />
                    Rs: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center text-sm text-end max-md:text-center'>
              <button onClick={applyHandler} className='bg-blue-600 p-2.5 px-10 text-white rounded'>{isAlreadyApplied ? 'Already Applied' : 'Apply Now'}</button>
              <p className='mt-1 text-gray-600'>Posted {moment(jobData.date).fromNow()}</p>
            </div>

          </div>

          <div className='flex flex-col items-start lg:flex-row justify-baseline'>
            <div className='w-full lg:w-2/3'>
              <h2 className='mb-4 text-2xl font-bold'>Job description</h2>
              <div className='rich-text' dangerouslySetInnerHTML={{ __html: jobData.description }}></div>
              <button onClick={applyHandler} className='bg-blue-600 p-2.5 px-10 text-white rounded mt-10'>{isAlreadyApplied ? 'Already Applied' : 'Apply Now'}</button>
            </div>

            {/* Right section More Jobs */}
            <div className='w-full mt-8 space-y-6 lg:w-1/3 lg:mt-0 lg:ml-8'>
              <h2>More jobs from {jobData.companyId.name}</h2>

              {jobs.filter(job => job._id !== jobData._id && job.companyId._id === jobData.companyId._id)
                .filter(job => {

                  // set of applied jobId
                  const appliedJobsId = new Set(userApplication.map(app => app.jobId && app.jobId._id))

                  // Return true if the user has not already applied for this job
                  return !appliedJobsId.has(job._id)

                }).slice(0, 4)
                .map((job, index) => <JobCard key={index} job={job} />)}
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  )
}

export default ApplyJob
