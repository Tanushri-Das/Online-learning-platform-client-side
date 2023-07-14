import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "../Register/Register.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, providerLogin } =
    useContext(AuthContext);
  const [paswordError, setPaswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const form = e.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, PhotoURL, email, password, confirm);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPaswordError("please provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPaswordError("Please should be at least 6 characters");
      return;
    }
    if (!/(?=.*[!@#$%&*^])/.test(password)) {
      setPaswordError("Please add at least one special character");
      return;
    }
    if (password !== confirm) {
      setPaswordError("password and confirm password did not match");
      return;
    }
    setPaswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        handleUpdateUserProfile(name, PhotoURL);
        navigate("/");
        toast.success('Create user successfully');
      })
      .catch((error) => {
        setPaswordError(error.message);
      });
  };
  const handleUpdateUserProfile = (name, PhotoURL) => {
    const profile = {
      displayName: name,
      photoURL: PhotoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
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
        <div className="col-lg-8 col-xl-6 shadow-lg rounded-3 p-4">
          <h2 className="fw-bold heading text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="label fw-semibold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter FullName"
                  />
                </Form.Group>
              </div>

              <div className="col-lg-6">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="label fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="label fw-semibold">Photo URL</Form.Label>
              <Form.Control
                type="file"
                name="PhotoURL"
                placeholder="Photo URL"
              />
            </Form.Group>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className="label fw-semibold">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-semibold label">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="label fw-semibold"
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    Accept{" "}
                    <Link to="/terms" className="text-decoration-none">
                      Terms and Conditions
                    </Link>
                  </>
                }
              />
            </Form.Group>
            <p className="text-danger">{paswordError}</p>
            {success && (
              <p className="text-success">User created successfully</p>
            )}
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="primary"
                className="fw-semibold"
                type="submit"
                disabled={!accepted}
              >
                Register
              </Button>
            </div>
            <hr />
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="outline-success"
                onClick={handleGoogleSignIn}
                className="me-5"
              >
                Login with Google
              </Button>
              <Button
                variant="outline-info"
                onClick={handleGithubSignIn}
                className="github"
              >
                Login with Github
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center align-items-center">
            <p className="mt-3 label fw-semibold">
              Already have an account ?{" "}
              <Link className="text-decoration-none" to="/login">
                Please Login{" "}
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-xl-3"></div>
      </Row>
    </Container>
  );
};

export default Register;
