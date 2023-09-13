'use client'
import { Provider } from "react-redux";
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'

export function Providers({ children }: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
