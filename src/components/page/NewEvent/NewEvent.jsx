import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import NewEventCard from "./NewEventCard";


const NewEvent = () => {
    const [newService, setNewService] = useState([]);
    useEffect(() => {
        fetch('/upcomming.json')
            .then(res => res.json())
            .then(data => setNewService(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center my-5"
                data-aos="zoom-out-left"
                data-aos-easing="linear"
                data-aos-duration="1000">Our Upcomming Services...</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    newService.map(service => <NewEventCard key={service._id} service={service}></NewEventCard>)
                }
            </Row>
        </div>
    );
};

export default NewEvent;




