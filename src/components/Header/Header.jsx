
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'text-orange-700'
            : 'hover:text-orange-700'

    return (
        <>
            <header className='bg-white py-4 flex justify-around px-14'>

                {/* Logo */}
                <Link to="/" className='logo flex items-center'>
                    <h1 className='text-gray-600 text-3xl font-bold'>MiX</h1>
                    <h1 className='text-orange-700 text-3xl font-bold'>Web</h1>
                    <p>®</p>
                </Link>

                {/* Navbar */}
                <nav className='flex items-center gap-5 font-medium'>

                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        About
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        Contact
                    </NavLink>

                    <a
                        href="https://github.com/iammzeeshan"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-orange-700"
                    >
                        Github
                    </a>

                </nav>

                {/* Buttons */}
                <div className='flex items-center'>
                    <Link className='px-8 hover:text-orange-700' to="/login">
                        Log in
                    </Link>

                    <Link
                        className='bg-orange-700 px-6 py-2 rounded-xl text-white'
                        to="/signup"
                    >
                        Get started
                    </Link>
                </div>

            </header>

            <div className='h-px w-full bg-gray-300 opacity-60'></div>
        </>
    )
}

export default Header



