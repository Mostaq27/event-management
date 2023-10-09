import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './WeddingPackageCard.css'
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'

const WeddingPackageCard = ({ events }) => {
    const {user} = useContext(AuthContext);

    const handleDetails= ()=>{
        if (!user){
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
      
    const { _id, photo, title, price, rating,description } = events;
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
                                 
                                description.length > 50
                                ? <div>{description.slice(0, 50)} <div className="text-blue-600">Read More... </div></div>
                                : <div>{description} </div>
                            }
                            
                            <div>Price: ${price}</div>
                            <div>Rating:
                                <Rating
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                    fullSymbol={<FaStar className="text-warning"></FaStar>}
                                />
                            </div>
                        </Card.Text>
                        <Link to={`/details/${_id}`}><Button onClick={handleDetails} variant="primary">Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default WeddingPackageCard;