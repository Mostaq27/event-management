import { Col, Row } from "react-bootstrap";
import { FaMoneyBillAlt, FaPhone, } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { GiLabCoat } from "react-icons/gi";
import './OurServices.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const OurServices = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    return (
        <div className="container"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            
            <h1 className="text-center my-5">Our special services</h1>
            <Row className="g-2">
                <Col className="text-center border border-2 p-4 m-1 rounded custom">
                <FaPhone className="fs-1 text-primary mx-40 my-3"></FaPhone>
                <h3>Support 24/7</h3>
                <p>We are open for all time, if you need any help don't forget to contact with us.</p>
                </Col>
                <Col className="text-center border border-2 p-4 m-1 rounded custom">
                <GiLabCoat className="fs-1 text-primary  mx-40 my-3"></GiLabCoat>
                <h3>Traditional Dress</h3>
                <p> where we can provide traditional dress for wedding, birthday party and traditional festival.</p>
                </Col>
                <Col className="text-center border border-2 p-4 m-1 rounded custom">
                <TbDiscount2 className="fs-1 text-primary  mx-40 my-3"></TbDiscount2>
                <h3>Discount</h3>
                <p> We give 10% discount if you book our package 30 days before the event.</p>
                </Col>
            </Row>
        </div>
    );
};

export default OurServices;