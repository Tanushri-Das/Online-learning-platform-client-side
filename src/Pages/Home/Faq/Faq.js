import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import './Faq.css';

const Faq = () => {
  return (
    <div className="my-5">
      <h4 className="text-center mb-4">Frequently Asked Questions</h4>
      <Container>
        <Row>
          <div className="col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why should I use online learning?</Accordion.Header>
                <Accordion.Body>
                Among the many benefits of online learning, you'll find that virtual education allows you to enjoy a more flexible schedule, can reduce the cost of your degree, and can allow you to more easily develop your career alongside furthering your education.Even Face-to-face education is better than online learning because it offers opportunities for building interpersonal relationships, and it upholds the principles of a sound education system. Face-to-face learning involves the meeting of an instructor and students for teaching sessions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What are the requirements to take the courses or sign up with your website?</Accordion.Header>
                <Accordion.Body>
                The student must be a student of cse otherwise it will not be helpful.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What are the technology requirements?</Accordion.Header>
                <Accordion.Body>
                Student should have basic programming knowledge.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are you accredited or licensed by educational organizations?</Accordion.Header>
                <Accordion.Body>
                  Yes,This platform licensed by educational organizations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>What is online learning like?</Accordion.Header>
                <Accordion.Body>
                It allows students to take courses and earn degrees remotely, without the need to be physically present on campus. Online learning can take many different forms, such as web-based courses, video conferencing, and self-paced learning programs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Can I learn at my own pace?</Accordion.Header>
                <Accordion.Body>
                Learning at your own pace allows you to learn in a way that suits you, in a comfortable environment. Self-paced learning also gives people who prefer to complete the material quickly the opportunity to do so.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
