import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring"
import NavigationItem from "../../shared/Navigation";
import foodzizzles from "../../assets/foodzizzles.png"

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    
    const fadeIn = useSpring({
        opacity: isMenuOpen ? 1 : 0, 
        display: isMenuOpen ? "block" : "none"
    });

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navigationItems = [
        { to: "/about", label: "About" },
        { to: "/recipes", label: "Recipes" },
        { to: "/cookbooks", label: "Cookbook" },
        { to: "/shop", label: "Shop" },
        { to: "/contact", label: "Contact" },
    ];

    const location = useLocation();
    const isActive = (targetPath: string): boolean => (location.pathname === targetPath);

    return (
        <header className="font-montserrat text-gray-700 leading-normal">
            <nav className=" flex flex-col bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-2xl shadow-gray-400/20">
                <div className="top-nav h-16 bg-gray-900 text-white px-10 flex items-center">
                    <ul className="nav-bar-item flex flex-row gap-8 items-center">
                        <li className="nav-link hover:text-lemon">
                            <Link to="/#" >Watch</Link>
                        </li>
                        <li className="nav-link hover:text-lemon">
                            <Link to="/book" >Books</Link>
                        </li>
                    </ul>
                </div>
        
                <div className="max-w-screen-xl h-20 flex flex-wrap items-center justify-around py-4 px-10">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="h-14 w-auto object-cover" src={foodzizzles} alt="foodzizzles logo" />
                    </Link>
                   
                    <div className="search flex gap-5 bg-stone-100 border border-1 rounded-lg h-8 item w-64 md:w-72 lg:w-96 ">
                        <select id="cuisine-select" 
                        className="bg-transparent rounded-lg px-2 outline-0 w-32 h-8 text-sm mb-2 
                        md:w-40 md:text-base md:mb-0 md:px-5 md:mr-2 md:flex-grow lg:w-64">
                            <optgroup label="All Categories">
                                <option>All Categories</option>
                            </optgroup>
                            <optgroup label="African Cuisine">
                                <option>West African</option>
                                <option>North African</option>
                                <option>East African</option>
                                <option>Southern African</option>
                                <option>Central African</option>
                            </optgroup>
                            <optgroup label="Asian Cuisine">
                                <optgroup label="East Asian">
                                    <option>Chinese</option>
                                    <option>Japanese</option>
                                    <option>Korean</option>
                                </optgroup>
                                <optgroup label="Southeast Asian">
                                    <option>Thai</option>
                                    <option>Vietnamese</option>
                                    <option>Malaysian</option>
                                    <option>Indonesian</option>
                                </optgroup>
                                <optgroup label="South Asian">
                                    <option>Indian</option>
                                    <option>Pakistani</option>
                                    <option>Bangladeshi</option>
                                </optgroup>
                            </optgroup>
                            <optgroup label="European Cuisine">
                                <option>Italian</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Spanish</option>
                                <option>Greek</option>
                            </optgroup>
                            <optgroup label="Middle Eastern Cuisine">
                                <option>Arabian</option>
                                <option>Israeli</option>
                                <option>Persian</option>
                                <option>Turkish</option>
                            </optgroup>
                            <optgroup label="North American Cuisine">
                                <option>American</option>
                                <option>Canadian</option>
                                <option>Mexican</option>
                            </optgroup>
                            <optgroup label="Latin American Cuisine">
                                <option>Mexican</option>
                                <option>Brazilian</option>
                                <option>Argentinian</option>
                                <option>Peruvian</option>
                            </optgroup>
                            <optgroup label="Caribbean Cuisine">
                                <option>Jamaican</option>
                                <option>Cuban</option>
                                <option>Haitian</option>
                                <option>Trinidadian</option>
                            </optgroup>
                            <optgroup label="Oceanian Cuisine">
                                <option>Australian</option>
                                <option>New Zealand</option>
                                <option>Polynesian</option>
                                <option>Micronesian</option>
                            </optgroup>
                            <optgroup label="Scandinavian Cuisine">
                                <option>Swedish</option>
                                <option>Norwegian</option>
                                <option>Danish</option>
                                <option>Finnish</option>
                            </optgroup>    
                        </select>
                        <input className="bg-transparent outline-0 w-full md:w-auto" type="search" placeholder="Search" name="search" />   
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto" id="navbar-sticky">
                        <ul className="flex flex-col justify-items-end p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> 
                            {navigationItems.map((item) => {
                                       const itemIsActive = isActive(item.to)
                                       console.log(`Is "${item.label}" active? ${itemIsActive}`);
                               return (
                                <NavigationItem
                                key={item.to}
                                to={item.to}
                                label={item.label}
                                className={` ${isActive(item.to) ? 'text-white' : 'border-animation'}`}
                                />
                               ) 
                               })}
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
                    <div className="hidden lg:inline-block">
                        <button className="bg-orange-500 text-white leading-7 w-24 p-1 rounded-lg ">Login</button>
                    </div>         
                </div>
            </nav>
                {isMenuOpen && (
                    <animated.ul 
                        className="fixed top-[8rem] p-10 z-50 w-full lg:hidden md:p-0 mt-4 font-medium border border-gray-100 
                        bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-col md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
                        md:dark:bg-gray-900 dark:border-gray-700"
                        style={fadeIn}
                    >
                        {navigationItems.map((item) => (
                            <NavigationItem
                            key={item.to}
                            to={item.to}
                            label={item.label}
                            onClick={closeMenu}
                            className="border-animation"
                            />
                        ))}
                        <div className="my-5 border-t">
                            <button className="text-lemon-dark leading-7 px-3 hover:text-orange-500">Login</button>
                        </div>
                    </animated.ul>
                )}
            
        </header> 
    )
}

export default Navbar;