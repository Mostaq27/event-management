
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Row } from 'react-bootstrap';
import WeddingPackageCard from './WeddingPackageCard';

const WeddingPackage = () => {

    const [data, setData] = useState([])
   
    const handleTabClick = (data) => {
        const url = `/weddingpackag.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    };

    useEffect(() => {
        handleTabClick('wedding')
    }, ['wedding'])



    const tabs = [
        { title: 'wedding', data: 'wedding' },
        
    ];

    return (
        <div className='container'>
            <h1 className='text-center my-5'
            data-aos="zoom-out-right"
            data-aos-easing="linear"
            data-aos-duration="1000">Our Wedding services Package</h1>
            <Tabs>
                <TabList>
                    {
                        tabs.map((tab, idx) => <Tab key={idx} onClick={() => handleTabClick(tab.data)}>{tab.title}</Tab>)
                    }
                </TabList>

                {tabs.map(idx => (
                    <TabPanel key={idx}>
                        <Row xs={1} md={3} className="g-4">
                            {
                                data.map(events => <WeddingPackageCard key={events._id} events={events}></WeddingPackageCard>)
                            }
                        </Row>
                    </TabPanel>
                ))}

            </Tabs>
        </div>
    );
};

export default WeddingPackage;






// import { useContext, useState } from "react";
// import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
// import { AuthContext } from "../../../providers/AuthProvider";
// import Swal from 'sweetalert2'
// import { Helmet } from "react-helmet";

// const AddAtoy = () => {
//     const {user} = useContext(AuthContext);
//     const [selectedItem, setSelectedItem] = useState("Select category");
//     const [error, setError] = useState('')
//     const [catError, setCatError] = useState('')
//     const [ratingError, setRatingError] =useState('')
//     const handleSelect = (eventKey, event) => {
//         setSelectedItem(event.target.text);
//     };

//     const handleSubmit =event =>{
//         setError('');
//         setCatError('');
//         setRatingError('');
//         event.preventDefault();
//         const form = event.target;
//         const sellerName = form.sellerName.value;
//         const sellerEmail = form.email.value;
//         const toyName = form.toyName.value;
//         const photo = form.photo.value;
//         const category = selectedItem;
//         const price = form.price.value;
//         const rating = form.rating.value;
//         const quantity = form.quantity.value;
//         const description = form.description.value; 

// //field validation 
//         const numberRegex = /^[1-5](\.\d+)?$/;
//        if ( price < 0 || quantity < 0){
//         setError('Please Enter Positive Number');
//         return;
//        }
//        else if(category === "Select category"){
//         setCatError('Please Select Category');
//         return;
//        }
//        else if (!numberRegex.test(rating)){
//         setRatingError('Rating must be 1-5')
//         return;
//        }
//         const toyData ={
//             sellerName, 
//             sellerEmail, 
//             toyName, 
//             photo, 
//             category, 
//             price, 
//             rating, 
//             quantity, 
//             description
//         }

//         fetch('https://car-craze-server.vercel.app/cars',{
//             method:'POST',
//             headers:{
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(toyData)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.insertedId){
//                 Swal.fire(
//                     'Successfully!',
//                     'Your toy added successfully!',
//                     'success'
//                   )
//                   form.reset();
//             }
//         })
//         .catch(error=>console.log(error))
//     }
//     return (
//         <div className="container my-4 min-vh-100">
//             <Helmet>
//                 <title>Event Management | Add Event</title>
//             </Helmet>
//             <h2 className="text-center my-4">Add Event</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Row xs={1} md={2}>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Seller Name</Form.Label>
//                             <Form.Control type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Seller Name" readOnly/>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Seller Email</Form.Label>
//                             <Form.Control type="email" name="email" defaultValue={user?.email} placeholder="Seller Email" readOnly />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Name of the Event</Form.Label>
//                             <Form.Control type="text" name="toyName" placeholder="Name of Event" required />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Photo URL</Form.Label>
//                             <Form.Control type="text" name="photo" placeholder="Photo URL" required />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Select Event Category</Form.Label>

//                             <Dropdown onSelect={handleSelect}>
//                                 <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
//                                     {selectedItem}
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu className=" w-100">
//                                     <Dropdown.Item >Wedding</Dropdown.Item>
//                                     <Dropdown.Item >Birthday Parties</Dropdown.Item>
//                                     <Dropdown.Item >Anniversaries</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                             <span className="text-danger">{catError}</span>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Price</Form.Label>
//                             <Form.Control type="number" name="price" placeholder="Price" required />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Rating</Form.Label>
//                             <Form.Control type="text" name="rating" placeholder="Rating should be 1-5" required />
//                             <span className="text-danger">{ratingError}</span>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Available quantity</Form.Label>
//                             <Form.Control type="number" name="quantity" placeholder="Available quantity" required />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control type="text" name="description" placeholder="Description" required />
//                         </Form.Group>
//                     </Col>

//                 </Row>
//                 <p className="text-center text-danger">{error}</p>
//                 <div className="d-flex justify-content-center">
//                 <Button variant="primary" type="submit">
//                     Add Event
//                 </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default AddAtoy;