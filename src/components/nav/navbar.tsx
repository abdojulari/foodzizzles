import { useState } from "react";
import { Link} from "react-router-dom";

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="flex flex-col bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-2xl shadow-blue-500/20">
                <div className="top-nav h-8 bg-black text-white px-10 flex items-center">
                    <ul className="nav-bar-item flex flex-row gap-8 items-center">
                        <li className="nav-link hover:text-lemon">
                            <a href="/#" >watch</a>
                        </li>
                        <li className="nav-link">
                            <Link to="/book" >Books</Link>
                        </li>
                    </ul>
                </div>
              
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        Foodzizzles
                    </Link>
                   
                    <div className="seach flex gap-5 bg-stone-100 border border-1 rounded-lg h-8 w-64 md:w-72 lg:w-96 ">
                        <select id="dino-select" className="bg-transparent rounded-lg px-5 outline-0">
                            <optgroup label="All Categories">
                                <option >All Categories</option>
                            </optgroup>
                            <optgroup label="African">
                                <option>Diplodocus</option>
                                <option>Saltasaurus</option>
                                <option>Apatosaurus</option>
                            </optgroup>
                            <optgroup label="Intercontinental">
                                <option>Diplodocus</option>
                                <option>Saltasaurus</option>
                                <option>Apatosaurus</option>
                            </optgroup>
                        </select>
                        <input className="bg-transparent outline-0" type="search" placeholder="Search" name="search" />   
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> 
                            <li>
                                <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link to="/recipes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                        rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" 
                        aria-expanded="false"
                        onClick={toggleMenu}
                        >
                          {isMenuOpen ?
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          :  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                        } 
                           
                            
                        </button>
                    </div>         
                </div>
            </nav>
                {isMenuOpen && (
                    <ul className="absolute top-24 p-10 z-50 w-full lg:hidden md:p-0 mt-4 font-medium border border-gray-100 
                    bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-col md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
                    md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                            to="/about"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={closeMenu}
                            >
                            About
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/recipes"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={closeMenu}
                            >
                            Recipes
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/services"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={closeMenu}
                            >
                            Services
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/contact"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            onClick={closeMenu}
                            >
                            Contact
                            </Link>
                        </li>
                    </ul>
                )}
        </> 
    )
}

export default Navbar;