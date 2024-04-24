import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../css/_navbar.scss'

import { useShrink } from '../utils/useShrink'

export const Navbar = () => {
    const [show, setShow] = useState(false)
    const [shrink] = useShrink(768)

    const onShow = () => setShow(prev => !prev)
    return (
        <header>
            <nav className="nav-container">
                <Link to={'/'} className='navbar-brand nav-link subtitle' style={{fontSize:26}}>
                    JFlix
                </Link>
                {shrink && show &&
                    <div className='navbar-collapse'>
                        <NavItems />
                    </div>
                }
                {!shrink && <div className='navbar-collapse'>
                    <ul className='navbar-nav'>
                        <NavItems />
                    </ul>
                </div>}
                {shrink && !show && <button onClick={onShow} name="show-menu">Show Menu</button>}
                {shrink && show && <button onClick={onShow} name="hide-menu">Close Menu</button>}
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