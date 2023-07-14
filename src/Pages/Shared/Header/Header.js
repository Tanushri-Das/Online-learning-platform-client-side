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

import Container from "react-bootstrap/Container";

import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="shadow">
      <Navbar collapseOnSelect expand="sm">
        <Container className="py-2 d-flex align-items-center justify-content-center">
          <Navbar.Brand
            href="/"
            className="fs-2 text-center fw-bold"
          >
            TechEdify
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <Offcanvas.Body>
              <Nav
                className="mx-auto justify-content-center align-items-center"
              >
                <Nav.Link className="fs-5 text-dark fw-semibold" href="/courses">
                  Courses
                </Nav.Link>
                {user?.uid && (
                  <>
                    <Nav.Link className="fs-5 text-dark fw-semibold" href="#faq">
                      FAQ
                    </Nav.Link>
                    <Nav.Link className="fs-5 text-dark fw-semibold" href="#team">
                      Team
                    </Nav.Link>
                    <Nav.Link className="fs-5 text-dark fw-semibold" href="#feedback">
                      Feedback
                    </Nav.Link>
                  </>
                )}
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  {user?.uid ? (
                    <>
                      <NavLink
                        to="#"
                        className="nav-link text-dark fw-semibold fs-5"
                        onClick={handleLogOut}
                      >
                        LogOut
                      </NavLink>
                    </>
                  ) : (
                    <Nav.Link
                      className="text-dark fw-semibold fs-5"
                      href="/login"
                    >
                      Login
                    </Nav.Link>
                  )}
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
