import { Container, Col, Row, Card } from "react-bootstrap";
import SignupForm from "./subcomponents/SignupForm";

function SignupPage() {
  return (
    <Container fluid className="mr-0 ml-0 p-5">
      <Row className="justify-content-center">
        <Col lg="6">
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
