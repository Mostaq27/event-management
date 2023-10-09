import { Button, Container, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.png'
import { Tooltip } from 'react-tooltip'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                   <Link to='/'><img src={logo} alt="" className="me-2 rounded-3xl" style={{ width: '80px' }} /></Link>
                    <Navbar.Brand href="/" className="fw-bold fs-2">EventManagement</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/allevent'>All Event</ActiveLink>
                            <ActiveLink to='/about'>About</ActiveLink>
                            {
                                user
                                    ? <span className="d-flex">
                                        <ActiveLink to='/weddingpackage'>Wedding</ActiveLink>
                                        <ActiveLink to='/newevent'>New Event</ActiveLink>
                                    </span>
                                    : ''
                            }
                        </Nav>

                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={user?.displayName}
                            data-tooltip-place="top"
                        >
                            {
                                user
                                    ? <img src={user?.photoURL} alt="" style={{ width: '35px' }} className="rounded-circle mx-3" />
                                    : <span>{user?.email}</span>
                            }
                        </a>
                        <Tooltip id="my-tooltip" />

                        {
                            user
                                ? <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                                : <Link to='/login'><Button variant="outline-success">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;