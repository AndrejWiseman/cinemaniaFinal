import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className="nav-header">
                    {/*<Link to='/'><img src={logo} alt='logo'/></Link>*/}
                    <Link to='/'  className='logo-slova'>cine<span>M</span>ani<span>A</span></Link>
                    <button className='nav-btn' onClick={() => setShow(!show)}>
                        <FiAlignJustify />
                    </button>
                </div>

                <div className={show ? 'nav-links show-links' : 'nav-links'}>
                    <Link to='/' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Početna</Link>
                    <Link to='/filmovi' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Filmovi</Link>
                    <Link to='/tags' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Žanrovi</Link>
                    <Link to='/about' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Stranica</Link>
                    <div className="nav-link contact-link">
                        <Link to='/contact' onClick={() => setShow(false)}>Preporuči</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar