
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">

            <div className="mx-auto w-full max-w-7xl p-4 py-8">

                <div className="md:flex md:justify-between">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-gray-600 text-3xl font-bold">
                                your
                            </h1>
                            <h1 className="text-orange-700 text-3xl font-bold">
                                logo
                            </h1>
                            <p>®</p>
                        </Link>

                        <p className="text-gray-500 mt-3 text-sm">
                            Building something amazing for everyone.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">

                        {/* Resources */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Resources
                            </h2>

                            <ul className="text-gray-500 font-medium space-y-4">
                                <li>
                                    <Link to="/" className="hover:text-orange-700">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="hover:text-orange-700">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Follow Us
                            </h2>

                            <ul className="text-gray-500 font-medium space-y-4">
                                <li>
                                    <a href="https://github.com/iammzeeshan" target="_blank" rel="noreferrer"
                                        className="hover:text-orange-700">
                                        Github
                                    </a>
                                </li>

                                <li>
                                    <a href="https://discord.com/" target="_blank" rel="noreferrer"
                                        className="hover:text-orange-700">
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Legal
                            </h2>

                            <ul className="text-gray-500 font-medium space-y-4">
                                <li>
                                    <Link to="/privacy" className="hover:text-orange-700">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/terms" className="hover:text-orange-700">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-200" />

                {/* Copyright & Social Icons */}
                <div className="sm:flex sm:items-center sm:justify-between">

                    <span className="text-sm text-gray-500">
                        © 2026
                        <Link to="/" className="hover:text-orange-700 font-semibold">
                            iammzeeshan
                        </Link>
                        . All Rights Reserved.
                    </span>

                    <div className="flex gap-5 mt-4 sm:mt-0 text-gray-500">
                        <a href="https://www.linkedin.com/in/md-zeeshan-ismat/" target="_blank" rel="noreferrer" aria-label="Linkedin">
                            <i className="ri-linkedin-box-fill hover:text-orange-700"></i>
                        </a>
                        <a href="https://www.instagram.com/iam_mzeeshan" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="ri-instagram-fill hover:text-orange-700"></i>
                        </a>
                        <a href="https://discord.com/" target="_blank" rel="noreferrer" aria-label="Discord">
                            <i className="ri-discord-fill hover:text-orange-700"></i>
                        </a>
                        <a href="https://github.com/iammzeeshan" target="_blank" rel="noreferrer" aria-label="Github">
                            <i className="ri-github-fill hover:text-orange-700"></i>
                        </a>


                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;

