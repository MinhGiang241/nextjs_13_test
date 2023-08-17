'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' //not next/router
import axios from 'axios'
import Link from 'next/link'
import { Toaster, toast } from 'react-hot-toast'



export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const onSignUp = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("Sign up success", response.data);

      // const {data , error ,isLoading } = useSWR(
      //   '/api/user/signup'
      // )

      router.push("/login")

    } catch (error: any) {
      console.log("Sign up failse", error.message);

      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className=''>
        {loading ? 'Processing' : 'Signup'}
      </h1>
      <hr />
      <label htmlFor='username'>username</label>
      <input
        className='p-2 boder border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id="username"
        type='text'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder='username'
      />
      <label htmlFor='email'>email</label>
      <input
        className='p-2 boder border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id="email"
        type='text'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email'
      />

      <label htmlFor='password'>password</label>
      <input
        className='p-2 boder border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id="password"
        type='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
      />

      <button
        disabled={loading}
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none forcus:border-gray-600'
        onClick={onSignUp}
      >{buttonDisabled ? "No sign up" : "Sign up here"}</button>
      <Link href={'/login'} >Visit Login Page</Link>
      <Toaster />
    </div>
  )
}

