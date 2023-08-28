'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Slug({ params, searchParams }: any) {

  return (
    <div>
      <div>{Object.keys(searchParams).map((v) => (<div>{`searchParams : ${v} =  ${searchParams[v]} `}</div>))}</div>
      {params.slug.map((c: any) => <div>{`param: ${c}`}</div>)}
    </div>
  )
}
