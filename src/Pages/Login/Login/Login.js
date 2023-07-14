import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

import PrivateRoute from "../../../Routes/PrivateRoute/PrivateRoute";
import { Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setPasswordError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        navigate(from, { replace: true });
        toast.success('Logged in successfully');
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/wrong-password).") {
          setPasswordError("please provide a valid password");
        }
      });
  };
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Container>
      <Row className="my-5 mx-3">
        <div className="col-lg-2 col-xl-3"></div>
        <div className="col-lg-8 col-xl-6 shadow rounded-3 p-4">
          <h2 className="fw-bold heading text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-5 fw-semibold">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 fw-semibold"
              controlId="formBasicPassword"
            >
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <p className="text-danger">{passwordError}</p>
            {success && (
              <p className="text-success">Successfully login in your account</p>
            )}
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="primary"
                type="submit"
                className="d-block mb-3 fw-semibold"
              >
                Login
              </Button>
            </div>
          </Form>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="outline-success"
                onClick={handleGoogleSignIn}
                className="me-5 fw-semibold"
              >
                Login with Google
              </Button>
              <Button
                variant="outline-info"
                onClick={handleGithubSignIn}
                className="github fw-semibold"
              >
                Login with Github
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="mt-3 fs-5 fw-semibold">
              <small>
                New to this Website ?{" "}
                <Link className="text-decoration-none" to="/register">Please Register First </Link>
              </small>
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-xl-3"></div>
      </Row>
    </Container>
  );
};

export default Login;
