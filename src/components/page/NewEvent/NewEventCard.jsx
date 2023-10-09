import { Card, Col } from "react-bootstrap";
import './NewEventCard.css'
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const NewEventCard = ({ service }) => {
    const { name, price, rating, picture } = service;
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div>
            <Col>
                <Card data-aos="fade-up-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <Card.Img variant="top" src={picture} className="image-top" />
                    <Card.Body className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price} <br />
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                fullSymbol={<FaStar className="text-warning"></FaStar>}
                            /></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default NewEventCard;