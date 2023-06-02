// import React, { useContext, useState } from "react";
// import { Button, Image, Nav, Navbar, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
// import { FaUser } from "react-icons/fa";
// import { ThemeContext } from "../../../Context/Theme";
// import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
//   const [mode, setMode] = useState("dark");

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <Navbar collapseOnSelect expand="sm">
//       <Navbar.Toggle
//         aria-controls="navbarScroll"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarScroll"
//       />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav className="mx-auto">
//           <NavLink eventKey="1" as={Link} to="/">
//             Dream CSE
//           </NavLink>
//           <NavLink eventKey="2" as={Link} to="/courses">
//             Courses
//           </NavLink>
//           <NavLink eventKey="3" as={Link} to="/faq">
//             FAQ
//           </NavLink>
//           <NavLink eventKey="4" as={Link} to="/blog">
//             Blog
//           </NavLink>
//         </Nav>
//         <Nav>
//           <Nav.Link href="#deets">
//             {user?.uid ? (
//               <>
//                 <span>{user?.displayName}</span>
//                 <Button variant="light" onClick={handleLogOut}>
//                   LogOut
//                 </Button>
//               </>
//             ) : (
//               <Link to="/login">Login</Link>
//             )}
//           </Nav.Link>
//           <Nav.Link eventKey={2} href="#memes">
//             <Link eventKey={2} to="/userinformation">
//               {user?.photoURL ? (
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src={user.photoURL}
//                 ></Image>
//               ) : (
//                 <FaUser></FaUser>
//               )}
//             </Link>
//           </Nav.Link>

//           <button onClick={toggleTheme} className="border-0">
//             <DarkModeToggle
//               mode={mode}
//               dark="Dark"
//               light="Light"
//               size="sm"
//               inactiveTrackColor="#e2e8f0"
//               inactiveTrackColorOnHover="#f8fafc"
//               inactiveTrackColorOnActive="#cbd5e1"
//               activeTrackColor="#334155"
//               activeTrackColorOnHover="#1e293b"
//               activeTrackColorOnActive="#0f172a"
//               inactiveThumbColor="#1e293b"
//               activeThumbColor="#e2e8f0"
//               onChange={(mode) => {
//                 setMode(mode);
//               }}
//             />
//           </button>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;

import React, { useContext, useState } from "react";
import { Button, Image, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from "../../../Context/Theme";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import "./Header.css"; // Import the CSS file for styling

import img from "../../../Assests/Ellipse 2.png";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [mode, setMode] = useState("dark");

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        style={{ borderBottom: "1px solid red" }}
      >
        <Container
          fluid
          className="py-2 d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand
            href="/"
            className={`${isDark ? "white-brand" : "black-brand"} fs-2`}
          >
            Dream CSE
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <Offcanvas.Body>
              <Nav
                className={`mx-auto ${
                  isDark ? "white-navlinks" : "black-navlinks"
                }`}
              >
                <Nav.Link className="fs-5" href="/courses">
                  Courses
                </Nav.Link>
                <Nav.Link className="fs-5" href="/blog">
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  {user?.uid ? (
                    <>
                      <span>{user?.displayName}</span>
                      <Button variant="light" onClick={handleLogOut}>
                        LogOut
                      </Button>
                    </>
                  ) : (
                    <Nav.Link
                      className={`fs-5 ${
                        isDark ? "white-navlinks" : "black-navlinks"
                      }`}
                      href="/login"
                      style={{ color: isDark ? "white" : "black" }}
                    >
                      Login
                    </Nav.Link>
                  )}
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className="ms-3">
                  <Link eventKey={2} to="/userinformation">
                    {user?.photoURL ? (
                      <Image
                        style={{ height: "50px" }}
                        roundedCircle
                        src="https://media.gettyimages.com/id/98784589/photo/anjum-chopra-of-india-icc-t20-world-cup-squad-on-may-1-2010-in-st-kitts-saint-kitts-and-nevis.jpg?s=612x612&w=gi&k=20&c=9T1W8u9UV79W9ZgVhJOfXsdSG1RsrmyUaUHAFiGXV90"
                      ></Image>
                    ) : (
                      <FaUser />
                    )}
                  </Link>
                </Nav.Link>

                <Button
                  onClick={toggleTheme}
                  className="border-0 bg-transparent"
                >
                  <DarkModeToggle
                    mode={mode}
                    dark={
                      <span
                        className="fs-6"
                        style={{ color: isDark ? "white" : "black" }}
                      >
                        Dark
                      </span>
                    }
                    light={
                      <span
                        className="fs-6"
                        style={{ color: isDark ? "white" : "black" }}
                      >
                        Light
                      </span>
                    }
                    inactiveTrackColor="#e2e8f0"
                    inactiveTrackColorOnHover="#f8fafc"
                    inactiveTrackColorOnActive="#cbd5e1"
                    activeTrackColor="#334155"
                    activeTrackColorOnHover="#1e293b"
                    activeTrackColorOnActive="#0f172a"
                    inactiveThumbColor="#1e293b"
                    activeThumbColor="#e2e8f0"
                    onChange={(mode) => {
                      setMode(mode);
                    }}
                  />
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
