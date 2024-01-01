import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring"
import NavigationItem from "../../shared/Navigation";
import foodzizzles from "../../assets/foodzizzles.png";
import { useSelector } from "react-redux";
import { CartState } from "../../utils/cart";
import Dropdown from "../../shared/DropDown";
import cartIcon from '../../assets/cart.gif'


const Header: React.FC<CartState> = () => {
    const [isScrolled, setScrolled] = useState(false);
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

    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isActive = (targetPath: string): boolean => (location.pathname === targetPath);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 50);
      };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []); 


    const cart = useSelector((state: CartState) => state.cart)

    const getTotalItems: () => number = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }
    

    return (
        <header className="font-montserrat text-gray-700 leading-normal">
            <nav className={`flex flex-col  ${isScrolled ? 'bg-white ' : ''} shadow-2xl dark:bg-gray-900 fixed w-full z-20 top-0 start-0  shadow-gray-400/20`}>
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
        
                <div className=" h-20 flex  justify-between py-4 px-10">
                    <Link to="/" className=" bg-white px-4 flex items-center space-x-3 rtl:space-x-reverse md:w-48">
                        <img className="h-16 w-auto object-cover" src={foodzizzles} alt="foodzizzles logo" />
                    </Link>
                    <div className="items-center justify-end px-10 hidden w-full lg:flex " id="navbar-sticky">
                        <ul className="flex flex-col ml-autojustify-items-end p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> 
                            {navigationItems.map((item) => {
                                const itemIsActive = isActive(item.to)    
                                return (
                                    <NavigationItem
                                        key={item.to}
                                        to={item.to}
                                        label={item.label}
                                        className={`${itemIsActive  ? 'text-white' : 'border-animation'}`}
                                        textColor={
                                            isHomePage && isScrolled
                                              ? 'text-gray-600'
                                              : isHomePage
                                              ? 'text-white'
                                              : 'text-gray-600'
                                          }
                                    />
                                )
                            })}
                        </ul>
                        <div className="hidden lg:inline-block lg:flex space-x-4 items-center pl-4">
                            <Dropdown isScrolled={isScrolled} isHomePage={isHomePage} />
                            <button className="flex items-center"
                                onClick={() => {
                                    if (getTotalItems() > 0) {
                                        navigate('/cart');
                                    }
                                }}
                            >
                                <div className="flex relative mx-2 " >
                                    <img className="h-10" src={cartIcon} />
                                    <span className="absolute -right-2 top-2 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                        { getTotalItems() || 0} 
                                    </span>         
                                </div>
                                <span className="font-bold mx-2 text-white">Cart</span>
                            </button>
                            
                        </div>   
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

export default Header;