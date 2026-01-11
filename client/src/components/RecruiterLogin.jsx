import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RecruiterLogin = () => {

  const [state, setState] = useState('Login')

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [image, setImage] = useState(false)

  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false)

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>
        <>
        {state !== 'Login' && (
          <div className='flex border px-4 py-2 items-center gap-2 rounded-full mt-5'>
          <img src={assets.person_icon} alt="" />
          <input className='outline-none text-sm' onChange={e=> setName(e.target.value)} value={name} type='text' placeholder='Company Name' required/>
        </div>
        )}
        
        <div className='flex border px-4 py-2 items-center gap-2 rounded-full mt-5'>
          <img src={assets.email_icon} alt="" />
          <input className='outline-none text-sm' onChange={e=> setEmail(e.target.value)} value={email} type='email' placeholder='Email' required/>
        </div>

        <div className='flex border px-4 py-2 items-center gap-2 rounded-full mt-5'>
          <img src={assets.lock_icon} alt="" />
          <input className='outline-none text-sm' onChange={e=> setPassword(e.target.value)} value={password} type='password' placeholder='Password' required/>
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password</p>
        </>

        <button className='block mx-auto py-2 px-6 rounded-4xl bg-blue-600 text-white mt-2'>
          {state === 'Login' ? 'login' : 'create accounot'}
        </button>

        {
        state === 'Login' 
         ? <p className='mt-5 text-center'>Don't have an account <span className='text-blue-600 cursor-pointer' onClick={()=> setState("Sign up")}>Sign up</span></p>
         : <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=> setState("Login")}>Login</span></p>
        }

      </form>
    </div>
  )
}

export default RecruiterLogin
