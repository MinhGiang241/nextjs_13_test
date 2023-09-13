
'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' //not next/router
import axios from 'axios'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'


export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  console.log("Hello");
  const onLogin = async () => {
    console.log("Hello");

    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", user)
      console.log("Login succes: ", response.data);
      toast.success("Login success")
      router.push('/profile')

    } catch (error: any) {
      console.log("Login failed: ", error.message);
      toast.error("Login failed: " + error.message)
    } finally {
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
        {loading ? "proccessing" : "Login"}
      </h1>
      <hr />
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
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        onClick={onLogin}
      >Login here</button>
      <Link href={'/signup'} >Visit Signup Page</Link>
    </div>
  )
}

