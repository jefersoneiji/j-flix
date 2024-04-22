import { useState } from 'react'
import '../css/_navbar.scss'
import { useShrink } from '../utils/useShrink'

export const Navbar = () => {
    const [show, setShow] = useState(false)
    const [shrink] = useShrink(768)

    const onShow = () => setShow(prev => !prev)
    return (
        <header>
            <nav className="nav-container">
                <a className='navbar-brand'>
                    JFlix
                </a>
                {shrink && show &&
                    <div className='navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>Início</li>
                            <li className='nav-item'>About</li>
                            <li className='nav-item'>Login</li>
                        </ul>
                    </div>
                }
                {!shrink && <div className='navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>Início</li>
                        <li className='nav-item'>About</li>
                        <li className='nav-item'>Login</li>
                    </ul>
                </div>}
                {shrink && !show && <button onClick={onShow} name="show-menu">Show Menu</button>}
                {shrink && show && <button onClick={onShow} name="hide-menu">Close Menu</button>}
            </nav>
        </header>
    )
}