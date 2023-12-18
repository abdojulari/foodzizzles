import { 
    Routes, 
    Route, 
    useLocation 
} from "react-router-dom";
import Layout from "../layouts/layout";
import { Home } from "../pages";
import { About } from "../pages";
import { Recipes } from "../pages";
import { Shop } from "../pages";
import { Contact } from "../pages";
import { Recipe } from "../pages";
import { CookBooks } from "../pages";


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