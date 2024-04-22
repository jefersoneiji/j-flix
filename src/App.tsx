import { Outlet } from 'react-router-dom'

import { Navbar } from './components/navbar'
import './css/_grid.scss'

export function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}