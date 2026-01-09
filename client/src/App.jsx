import React, { useContext } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import AllJobs from './pages/AllJobs'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && < RecruiterLogin />}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/apply-job/:id' element={<ApplyJob/>}/>
          <Route path='/applications' element={<Applications/>}/>
          <Route path='/jobs' element={<AllJobs/>} />
        </Routes>
    </div>
  )
}

export default App
