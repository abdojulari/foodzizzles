import { useEffect, useRef, useState } from 'react';

interface Props {
    isScrolled: boolean;
    isHomePage: boolean;
}

const Dropdown: React.FC<Props> = ({ isScrolled, isHomePage }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const handleDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleMouseOver = () => {
      setDropdownOpen(true);
    };
  
    const handleMouseOut = (e: React.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
  
    // Attach event listener for global mouse click
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setDropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    return (
        <div className="relative inline-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} ref={dropdownRef}>
            <button
                 
                type="button"
                className={`flex items-center w-full hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ${isHomePage && isScrolled ? 'text-gray-600' : isHomePage ? 'text-white' : 'text-gray-600'}`}
                onClick={handleDropdownToggle}
            >
                <p className={`flex flex-col ${isHomePage && isScrolled ? 'text-gray-600' : isHomePage ? 'text-white' : 'text-gray-600'} `}>
                    <span className={`text-xs px-1 ${isHomePage && isScrolled ? 'text-gray-600' : isHomePage ? 'text-white' : 'text-gray-600'}`}>Hello, sign in</span>
                    <span className={`text-base font-bold ${isHomePage && isScrolled ? 'text-gray-600' : isHomePage ? 'text-white' : 'text-gray-600'}`}>Account</span>
                </p>
                <svg
                    className="ms-1 flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {isDropdownOpen && (
                <div className="hs-dropdown-menu absolute mt-1 w-48 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" >
                    <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                    >
                        Login
                    </a>
                    <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                    >
                        Your Account
                    </a>
                    <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                    >
                        Team Account
                    </a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
