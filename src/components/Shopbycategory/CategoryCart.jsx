import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CategoryCart.css'
// import Rating from "react-rating";
// import { FaRegStar, FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const CategoryCart = ({ cars }) => {
    const { user } = useContext(AuthContext);

    const handleDetails = () => {
        if (!user) {
            Swal.fire(
                'Need to Login!',
                'You have to log in first to view Details',
                'warning'
            )
        }
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { _id, photo, title, price, description } = cars;
    return (
        <div>
            <Col>
                <Card data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="crop-container">
                        <Card.Img variant="top" src={photo} className="w-100 img-fluid" />
                    </div>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {
                                description.length > 90
                                    ? <div>{description.slice(0, 90)} <div className=" text-base text-blue-400">Read More...</div></div>
                                    : <div>{description} </div>
                            }
                            <div>Price: ${price}</div>
                            
                        </Card.Text>
                        <Link to={`/details/${_id}`}><Button onClick={handleDetails} variant="primary">Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CategoryCart;