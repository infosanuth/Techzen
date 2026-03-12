import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import AllJobs from './pages/AllJobs'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import ManageJobs from './pages/ManageJobs'
import ViewApplication from './pages/ViewApplication'
import ApplicantProfile from './pages/ApplicantProfile'
import Settings from './pages/Settings'
import 'quill/dist/quill.snow.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const { showRecruiterLogin, companyToken } = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && < RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/jobs' element={<AllJobs />} />

        <Route path='/dashboard' element={<Dashboard />}>
          {companyToken ?
            <>
              <Route path='add-job' element={<AddJob />} />
              <Route path='manage-job' element={<ManageJobs />} />
              <Route path='view-applications' element={<ViewApplication />} />
              <Route path='applicant-profile' element={<ApplicantProfile />} />
              <Route path='settings' element={<Settings />} />
            </> : null}

        </Route>
      </Routes>
    </div>
  )
}

export default App
