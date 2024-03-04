import { Container, Row, Col } from "react-bootstrap";


const Sustainability = () => {
    return (
        <Container className="component">
          <div className="red-line"></div>
          <section className="text-center" style={{ marginTop: '50px' }}>
            <h2>OUR SUSTAINABILITY COMMITMENTS.</h2>
          </section>
    
          <Col style={{ marginTop: '50px' }}>
            <Row>
              <p className="text-center">
                We're dedicated to environmental sustainability, fostering positive
                changes in the industries we operate in while protecting the global
                communities we serve.
              </p>
            </Row>
          </Col>
    
          <div className="red-line" style={{ marginTop: '50px' }}></div>
        </Container>
      );
}

export default Sustainability; 