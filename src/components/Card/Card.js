import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import './Card.css';
import './responsive.css';

const Card = (props) => {
    const { title, price, image } = props.card;
    return (
        <>
            <div className="ticket-card">
                <img style={{ height: '150px' }} src={image} alt="" />
                <h6 className="title">{title}</h6>
                <Link to={"/destination/" + title}><Button variant="dark btn-sm"><FontAwesomeIcon className="text-warning" icon={faCartArrowDown} /> Buy Now</Button></Link> <br /><br />
                <h6 className="price">Ticket Price ${price}</h6>
            </div>
        </>
    );
};

export default Card; <h1>This Is card !</h1>