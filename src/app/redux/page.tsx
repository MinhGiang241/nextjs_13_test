'use client'

import React from 'react'
import type { RootState } from '@/GlobalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from '@/GlobalRedux/features/counter/CounterSlice'
import dynamic from 'next/dynamic'

import { TextField } from '@mui/material'
import { Input } from 'semantic-ui-react'

import { Button } from 'semantic-ui-react'

const Buttons = dynamic(() => import('antd/es/button'))
// const {Button} = dynamic(()=> import('antd'),{ssr:false} )

export default function ReduxTest() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-0'>
        {count}
        <div >
          <Buttons type='primary' color='red-1' onClick={() => dispatch(increment())}>
            Increment
          </Buttons>
        </div>
        <div>

          <Buttons type="dashed" color='green' onClick={() => dispatch(decrement())}>
            Decrement
          </Buttons>
        </div>

        <div>
          <Buttons type='default' onClick={() => dispatch(incrementByAmount(10))}>
            Increment By Amount
          </Buttons>
        </div>

        <div>
          <Buttons type='default' onClick={() => dispatch(decrementByAmount(10))}>
            decrement By Amount
          </Buttons>
        </div>
      </div>
      <div className='col-span-1 flex flex-col' >
        <TextField className='bg-white' id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField className='bg-white' id="filled-basic" label="Filled" variant="filled" />
        <TextField className='bg-white' id="standard-basic" label="Standard" variant="standard" />
        <div className='h-10' />
      </div>
      <div className='col-span-2 flex flex-col'>
        <Input placeholder='Search...' />
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    </div>
  )
}
ReduxTest
