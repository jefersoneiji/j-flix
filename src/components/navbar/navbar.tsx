import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../css/_navbar.scss'

import { OpenSVG } from '../../assets/open-svg'
import { CloseSVG } from '../../assets/close-svg'

export const Navbar = () => {
    const [show, setShow] = useState(false)

    const onShow = () => setShow(prev => !prev)
    return (
        <header className='navbar'>
            <nav className="nav-container">
                <Link to={'/'} className='navbar-brand nav-link subtitle' style={{ fontSize: 26 }}>
                    JFlix
                </Link>
                {!show && <button name="show-menu" className="nav-button" onClick={onShow}><OpenSVG /></button>}
                {show && <button name="hide-menu" className="nav-button" onClick={onShow}><CloseSVG /></button>}
                {show &&
                    <div className='navbar-collapse navbar-collapse-desktop'>
                        <NavItems />
                    </div>
                }
                {<div className='navbar-collapse navbar-collapse-mobile'>
                    <ul className='navbar-nav'>
                        <NavItems />
                    </ul>
                </div>}
            </nav>
        </header>
    )
}

const NavItems = () => {
    return (
        <ul className='navbar-nav'>
            {items.map(({ path, label }, idx) =>
                <li key={idx} className='nav-item'>
                    <Link to={path} className='nav-link subtitle'>
                        {label}
                    </Link>
                </li>
            )}
        </ul>
    )
}

const items = [
    { path: '/', label: 'Home' },
]