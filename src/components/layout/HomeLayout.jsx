import { Outlet } from "react-router-dom";
import NavigationBar from "../page/shared/NavigationBar/NavigationBar";
import Footer from "../page/shared/Footer/Footer";

const HomeLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;