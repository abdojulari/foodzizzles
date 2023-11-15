
const Navbar = () => {
    return (
        <>
            <nav className="flex flex-col">
                <div className="top-nav h-8 bg-black text-white px-10 flex items-center">
                    <ul className="nav-bar-item flex flex-row gap-8 items-center">
                        <li className="nav-link">
                            <a href="/#" >watch</a>
                        </li>
                        <li className="nav-link">
                            <a href="/#" >Books</a>
                        </li>
                    </ul>
                </div>
                <div className="main-nav flex justify-between p-5">
                    <div className="logo"></div>
                    <div className="seach flex gap-5 bg-stone-100 border border-1 rounded-lg h-8">
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
                    <div className="main-nav flex">
                            <ul className="nav-bar-item flex gap-10 items-center justify-between">
                                <li className="nav-link">
                                    <a href="/#" >About</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/#" >Recipes</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/#" >Services</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/#" >Contact</a>
                                </li>
                            </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar;