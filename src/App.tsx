import { Outlet } from 'react-router-dom'

import { Navbar } from './components/navbar'
import './css/_grid.scss'

export function App() {
  return (
    <div className='canvas'>
      <div className='inner-board'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}