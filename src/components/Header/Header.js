import React, { useContext } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <>
            <Container fluid={true} className="shadow-sm">
                <Container>
                    <Navbar expand="lg">
                        <Link to="/"><Navbar.Brand href="#home">Ticket<span className="text-dark">Box</span></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto p-1">
                                <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                                <Link to="/login"><Nav.Link href="#link">Destination</Nav.Link></Link>
                                <Link to="/notFound"><Nav.Link href="#link">Blog</Nav.Link></Link>
                                <Link to="/notFound"><Nav.Link href="#link">Contact</Nav.Link></Link>
                                <Nav.Link href="#link"> <FontAwesomeIcon className="text-dark" icon={faUser} /> {loggedInUser.name || loggedInUser.displayName}</Nav.Link>
                            </Nav>
                            {
                               !loggedInUser.displayName  ? (  <Link to="/login"><Button variant="outline-dark">Login</Button></Link>) 
                               : (  <Button onClick={() => setLoggedInUser({})} variant="outline-dark">SignOut</Button>) 
                            }
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        </>
    );
};

export default Header;