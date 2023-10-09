import { Helmet } from "react-helmet";
import Banner from "../../Banner/Banner";

import OurServices from "../../OurServices/OurServices";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import About from "../About/About";
import Eventbycategory from "../../Shopbycategory/Eventbycategory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EmentManagement | Home</title>
            </Helmet>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Eventbycategory></Eventbycategory>
            {/* <NewService></NewService> */}
            {/* <MyToy></MyToy> */}
            <About></About>
            <OurServices></OurServices>

        </div>
    );
};

export default Home;