import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import RouterNav from './Route/RouterNav'
import ProviderContext from './ProviderContext/ProviderContext'

function App() {

  return (
    <div className="App">
      <ProviderContext>
        <RouterProvider router={RouterNav} />
      </ProviderContext>
    </div>
  )
}

export default App
