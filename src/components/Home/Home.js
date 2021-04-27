import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData.json';
import { Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(FakeData)
    }, [])

    return (
        <>
            <Container className="d-flex mt-5">
                <Row>
                    {
                        cards.map(card => <Card key={card.title} card={card}></Card>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;