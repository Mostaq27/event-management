import { Button, Col, Row } from "react-bootstrap";
// import bannerImg from '../../assets/wedding-arch.jpg'
import './Banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container p-4">
                <Row xs={1} md={2}>
                    <Col className="py-4">
                        <div>
                        <h1 className="text-white">Your Event ,Your Way</h1>
                        <p className="text-white my-4">we will provide your event managed and provide some special services like, stage and backdrop, Arch & Centerpiece,Artificial Flower, Story name sign etc...</p>
                        <Link to='/alltoy'><Button variant="warning" className="me-3">Explore Event</Button></Link>
                        <Link to='signup'><Button variant="outline-dark">Signup</Button></Link>
                        </div>
                    </Col>
                    {/* <Col>
                        <img src={bannerImg} alt="" className="opacity-50 h-[50vh] w-full" />
                    </Col> */}
                </Row>
            </div>
        </div>

    );
};

export default Banner;