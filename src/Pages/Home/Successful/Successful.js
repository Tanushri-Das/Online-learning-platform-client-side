// import React from "react";
// import { Card, Container, Image, Row } from "react-bootstrap";
// import { FaQuoteRight, FaRegStarHalf, FaStar } from "react-icons/fa";
// import last from "../../../Assests/Ellipse 2.png";
// import "../Successful/Successful.css";

// const Successful = () => {
//   return (
//     <div className="container mb-5">
//       <h2 className="text-center mb-4 fw-bold">
//         Some successful students feedback
//       </h2>
//       <p className="text-center mb-5 fw-medium" style={{ fontSize: "18px" }}>
//         We are proud to share the feedback from our successful students who have
//         benefited from our learning platform. Their experiences and achievements
//         speak volumes about the quality of education we provide.
//       </p>

//       <Row className="card-row">
//         <div className="col-md-6">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                 I am grateful for the opportunity to learn from this platform.
//                 The courses offered here are comprehensive and well-structured,
//                 providing me with a solid foundation in various subjects. The
//                 instructors are knowledgeable and supportive, and I have gained
//                 valuable insights and skills that have helped me in my
//                 professional career. Highly recommended!
//               </Card.Text>
//               <div className="d-flex mt-1">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Awlad Hossain</h5>
//                   <p>Network Engineer</p>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-6 mt-4 mt-md-0">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaRegStarHalf className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                  The courses
//                 are engaging and taught by industry professionals. I have gained
//                 practical skills that are directly applicable to my work. The
//                 platform provides a supportive community where I can connect
//                 with other learners and share knowledge. I highly recommend this
//                 platform to anyone looking to expand their knowledge and advance
//                 their career.
//               </Card.Text>
//               <div className="d-flex mt-1">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Alayana</h5>
//                   <p>Software Engineer</p>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-6 mt-4">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                 This learning platform has been a game-changer for me. The
//                 courses cover a wide range of topics and are taught in a clear
//                 and concise manner. The platform's interactive exercises and
//                 practical projects have allowed me to apply my learning in
//                 real-world scenarios. The support from the instructors and the
//                 community is exceptional. I am grateful for the opportunities
//                 this platform has provided me in my journey of continuous
//                 learning.
//               </Card.Text>
//               <div className="d-flex mt-1">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Ovik Das</h5>
//                   <p>App Developer</p>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-6 mt-4">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaRegStarHalf className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                 I can confidently say that this learning platform has
//                 transformed my career. The courses are comprehensive and
//                 up-to-date with the latest industry trends. The hands-on
//                 projects have given me practical experience and boosted my
//                 confidence. The platform's community and support have been
//                 invaluable in my learning journey. I highly recommend this
//                 platform to anyone seeking to acquire new skills or enhance
//                 their existing ones.
//               </Card.Text>
//               <div className="d-flex mt-1">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src={last}
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Rajib Das</h5>
//                   <p>Web Developer</p>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </Row>
//     </div>
//   );
// };

// export default Successful;

// import React from "react";
// import { Card, Container, Image, Row } from "react-bootstrap";
// import { FaQuoteRight, FaRegStarHalf, FaStar } from "react-icons/fa";
// import last from "../../../Assests/Ellipse 2.png";
// import "../Successful/Successful.css";

// const Successful = () => {
//   return (
//     <div className="container mb-5">
//       <h2 className="text-center mb-4 fw-bold">
//         Some successful students feedback
//       </h2>
//       <p className="text-center mb-5 fw-medium" style={{ fontSize: "18px" }}>
//         We are proud to share the feedback from our successful students who have
//         benefited from our learning platform. Their experiences and achievements
//         speak volumes about the quality of education we provide.
//       </p>

//       <Row className="card-row">
//         <div className="col-md-6">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                 I am grateful for the opportunity to learn from this platform.
//                 The courses offered here are comprehensive and well-structured,
//                 providing me with a solid foundation in various subjects. The
//                 instructors are knowledgeable and supportive, and I have gained
//                 valuable insights and skills that have helped me in my
//                 professional career. Highly recommended!
//               </Card.Text>
//               <div style={{ marginTop: "auto" }}>
//                 <div className="d-flex">
//                   <Image
//                     style={{ height: "50px" }}
//                     roundedCircle
//                     src={last}
//                   ></Image>
//                   <div className="ms-3">
//                     <h5 className="mb-1">Rajib Das</h5>
//                     <p>Web Developer</p>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-6 mt-4 mt-md-0">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaRegStarHalf className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                  The courses
//                 are engaging and taught by industry professionals. I have gained
//                 practical skills that are directly applicable to my work. The
//                 platform provides a supportive community where I can connect
//                 with other learners and share knowledge. I highly recommend this
//                 platform to anyone looking to expand their knowledge and advance
//                 their career.
//               </Card.Text>
//               <div style={{ marginTop: "auto" }}>
//               <div className="d-flex">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Alayana</h5>
//                   <p>Software Engineer</p>
//                 </div>
//               </div>
//               </div>
              
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-6 mt-4">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                 This learning platform has been a game-changer for me. The
//                 courses cover a wide range of topics and are taught in a clear
//                 and concise manner. The platform's interactive exercises and
//                 practical projects have allowed me to apply my learning in
//                 real-world scenarios. The support from the instructors and the
//                 community is exceptional. I am grateful for the opportunities
//                 this platform has provided me in my journey of continuous
//                 learning.
//               </Card.Text>
//               <div style={{ marginTop: "auto" }}>
//               <div className="d-flex">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Ovik Das</h5>
//                   <p>App Developer</p>
//                 </div>
//               </div>
//               </div>
              
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-6 mt-4">
//           <Card className="pt-4 h-100">
//             <div className="d-flex justify-content-between mx-3">
//               <div>
//                 <FaQuoteRight className="fs-4" />
//               </div>
//               <div>
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaStar className="text-warning" />
//                 <FaRegStarHalf className="text-warning" />
//               </div>
//             </div>

//             <Card.Body>
//               <Card.Text className="text-justify">
//                 I can confidently say that this learning platform has
//                 transformed my career. The courses are comprehensive and
//                 up-to-date with the latest industry trends. The hands-on
//                 projects have given me practical experience and boosted my
//                 confidence. The platform's community and support have been
//                 invaluable in my learning journey. I highly recommend this
//                 platform to anyone seeking to acquire new skills or enhance
//                 their existing ones.
//               </Card.Text>
//               <div style={{ marginTop: "auto" }}>
//               <div className="d-flex">
//                 <Image
//                   style={{ height: "50px" }}
//                   roundedCircle
//                   src={last}
//                 ></Image>
//                 <div className="ms-3">
//                   <h5 className="mb-1">Rajib Das</h5>
//                   <p>Web Developer</p>
//                 </div>
//               </div>
//               </div>
              
//             </Card.Body>
//           </Card>
//         </div>
//       </Row>
//     </div>
//   );
// };

// export default Successful;

import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { FaQuoteRight, FaRegStarHalf, FaStar } from "react-icons/fa";
import last from "../../../Assests/Ellipse 2.png";
import "../Successful/Successful.css";

const Successful = () => {
  return (
    <div className="container mb-5" id="feedback">
      <h2 className="text-center mb-4 fw-bold">
        Some successful students feedback
      </h2>
      <p className="text-center mb-5 fw-medium" style={{ fontSize: "18px" }}>
        We are proud to share the feedback from our successful students who have
        benefited from our learning platform. Their experiences and achievements
        speak volumes about the quality of education we provide.
      </p>

      <Row className="card-row">
        <div className="col-md-6">
          <Card className="pt-4 h-100 d-flex flex-column">
            <div className="d-flex justify-content-between mx-3">
              <div>
                <FaQuoteRight className="fs-4" />
              </div>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>

            <Card.Body className="d-flex flex-column">
              <Card.Text className="text-justify">
                I am grateful for the opportunity to learn from this platform.
                The courses offered here are comprehensive and well-structured,
                providing me with a solid foundation in various subjects. The
                instructors are knowledgeable and supportive, and I have gained
                valuable insights and skills that have helped me in my
                professional career. Highly recommended!
              </Card.Text>
              <div className="mt-auto">
                <div className="d-flex">
                  <Image
                    style={{ height: "50px" }}
                    roundedCircle
                    src={last}
                  />
                  <div className="ms-3">
                    <h5 className="mb-1">Rajib Das</h5>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <Card className="pt-4 h-100 d-flex flex-column">
            <div className="d-flex justify-content-between mx-3">
              <div>
                <FaQuoteRight className="fs-4" />
              </div>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaRegStarHalf className="text-warning" />
              </div>
            </div>

            <Card.Body className="d-flex flex-column">
              <Card.Text className="text-justify">
                 The courses
                are engaging and taught by industry professionals. I have gained
                practical skills that are directly applicable to my work. The
                platform provides a supportive community where I can connect
                with other learners and share knowledge. I highly recommend this
                platform to anyone looking to expand their knowledge and advance
                their career.
              </Card.Text>
              <div className="mt-auto">
              <div className="d-flex">
                <Image
                  style={{ height: "50px" }}
                  roundedCircle
                  src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
                ></Image>
                <div className="ms-3">
                  <h5 className="mb-1">Alayana</h5>
                  <p>Software Engineer</p>
                </div>
              </div>
              </div>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mt-4">
          <Card className="pt-4 h-100">
            <div className="d-flex justify-content-between mx-3">
              <div>
                <FaQuoteRight className="fs-4" />
              </div>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>

            <Card.Body>
              <Card.Text className="text-justify">
                This learning platform has been a game-changer for me. The
                courses cover a wide range of topics and are taught in a clear
                and concise manner. The platform's interactive exercises and
                practical projects have allowed me to apply my learning in
                real-world scenarios. The support from the instructors and the
                community is exceptional. I am grateful for the opportunities
                this platform has provided me in my journey of continuous
                learning.
              </Card.Text>
              <div className="mt-auto">
              <div className="d-flex">
                <Image
                  style={{ height: "50px" }}
                  roundedCircle
                  src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
                ></Image>
                <div className="ms-3">
                  <h5 className="mb-1">Ovik Das</h5>
                  <p>App Developer</p>
                </div>
              </div>
              </div>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mt-4">
          <Card className="pt-4 h-100">
            <div className="d-flex justify-content-between mx-3">
              <div>
                <FaQuoteRight className="fs-4" />
              </div>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaRegStarHalf className="text-warning" />
              </div>
            </div>

            <Card.Body>
              <Card.Text className="text-justify">
                I can confidently say that this learning platform has
                transformed my career. The courses are comprehensive and
                up-to-date with the latest industry trends. The hands-on
                projects have given me practical experience and boosted my
                confidence. The platform's community and support have been
                invaluable in my learning journey. I highly recommend this
                platform to anyone seeking to acquire new skills or enhance
                their existing ones.
              </Card.Text>
              <div className="mt-auto">
              <div className="d-flex">
                <Image
                  style={{ height: "50px" }}
                  roundedCircle
                  src={last}
                ></Image>
                <div className="ms-3">
                  <h5 className="mb-1">Rajib Das</h5>
                  <p>Web Developer</p>
                </div>
              </div>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default Successful;
