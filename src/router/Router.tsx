import { 
    Routes, 
    Route, 
    useLocation 
} from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Recipes from "../pages/recipes";
import Shop from "../pages/shop";
import Contact from "../pages/contact";
import Recipe from "../pages/recipe";
import CookBooks from "../pages/cookBooks";


const AppRoutes: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <Layout showBanner={isHomePage}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cookbooks" element={<CookBooks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        </Layout>
    );
};

export default AppRoutes;