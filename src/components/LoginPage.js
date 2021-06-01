import { Container, Col, Row, Card } from "react-bootstrap";
import LoginForm from "./subcomponents/LoginForm";

function LoginPage() {
  return (
    <Container fluid className="mr-0 ml-0 p-5">
      <Row className="justify-content-center">
        <Col lg="6">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
