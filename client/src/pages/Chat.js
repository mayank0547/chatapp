import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import './Chat.css'
function Chat({roomID}) {
    return (
        <Container className="custom-container">
            <Row>
                <Col md={4}>
                    <Sidebar roomID={roomID} />
                </Col>
                <Col md={8}>
                    <MessageForm  />
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;
