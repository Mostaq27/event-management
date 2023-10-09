
import { useState } from "react";
import { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";



const EventDetails = () => {
   const [findData,setFindData]=useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        fetch("/eventsdetails.json")
        .then(res=>res.json())
        .then(data =>{

            const findItem = data.find(event=> event._id==id)
            setFindData(findItem)
        })
    },[id])



    return (
        <div className="container my-4 min-vh-100">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={findData.photo} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{findData.title}</h5>
                            <p className="card-text">Price: ${findData.price}</p>
                            <p className="card-text">Category: {findData.category}</p>
                           
                            <p className="card-text">Description: {findData.description}</p>
                            <p className="card-text">Rating: <Rating
                                    placeholderRating={findData.rating}
                                    emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                    fullSymbol={<FaStar className="text-warning"></FaStar>}
                                /></p>
                            <p className="card-text">Manager Name: {findData.managerName}</p>
                            <p className="card-text">Manager Email: {findData.managerEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        

    );
};

export default EventDetails;