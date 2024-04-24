import { Outlet } from 'react-router-dom'

import { Navbar } from './components/navbar'
import './css/_grid.scss'

export function App() {
  return (
    <div className='canvas'>
      <Navbar />
      <Outlet />
    </div>
  )
}