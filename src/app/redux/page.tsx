'use client'

import React from 'react'
import type { RootState } from '@/GlobalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from '@/GlobalRedux/features/counter/CounterSlice'
import { Button } from 'antd'

export default function ReduxTest() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
      {count}
      <div >
        <Button type='primary' className='bg-green-600' onClick={() => dispatch(increment())}>
          Increment
        </Button>
      </div>
      <div>

        <Button type="dashed" className='bg-red-300' onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>

      <div>
        <Button type='default' className='bg-teal-700 hover:bg-red-500' onClick={() => dispatch(incrementByAmount(10))}>
          Increment By Amount
        </Button>
      </div>

      <div>
        <Button type='default' className='bg-purple-400 active:bg-yellow-100 hover:bg-blue-800' onClick={() => dispatch(decrementByAmount(10))}>
          decrement By Amount
        </Button>
      </div>
    </>
  )
}
ReduxTest
