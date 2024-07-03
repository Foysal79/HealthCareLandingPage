import { Outlet } from "react-router-dom";
import Navbar from "../LayOut/Navbar";
import Footer from "../LayOut/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;