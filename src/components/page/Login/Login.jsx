import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet";
const Login = () => {
    const { userLogin, googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const pageFrom = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(pageFrom, { replace: true })
            })
            .catch((error) => {
                setError(error.message);
            })
    }
    const handelGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(pageFrom, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="min-vh-100">
            <Helmet>
                <title>EventManagement | Login</title>
            </Helmet>
            <h1 className="text-center my-4">Login your account</h1>
            <Form onSubmit={handleSubmit} className="mx-auto md:w-1/4 border rounded p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button><br />
                <Form.Text>
                    Don't have an account? <Link to={'/signup'}>Register</Link>
                    <div className="text-danger text-center">{error}</div>
                </Form.Text>
            </Form>
            <div className="d-flex flex-column align-items-center my-2">
                <h4>Or, login with</h4>
                <div className="m-2"> <Button onClick={handelGoogleSignIn} variant="outline-success"><div className="flex items-center gap-2"><p><FaGoogle></FaGoogle></p><p>Login with Google</p></div> </Button></div>

            </div>
        </div>
    );
};

export default Login;