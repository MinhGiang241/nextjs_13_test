"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const logOut = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout sucecchul')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data)
    setData(res.data.data._id)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className={`p-3 rouned ${data ? 'bg-green-500' : 'bg-red-500'}`}>{data ? (<Link href={`/profile/${data}`}>
        {data}
      </Link>) : 'Nothing here'}</h2>
      <hr />
      <button
        onClick={logOut}
        className='bg-blue-500 hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded'>
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className='bg-green-500 hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded'>
        Get User Detail
      </button>

    </div>

  )
}
