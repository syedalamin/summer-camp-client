import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";
import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>SA Camp | Home </title>
            </Helmet>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;