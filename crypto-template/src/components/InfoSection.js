import { Row, Col, Container } from "reactstrap";
const InfoSection = () => {
  return (
    <Container fluid className="info-container">
      <Container className="info-container_data">
        <Row className="info-data" lg="4" md="4" sm="2" xs="1">
          <Col>
            0.00000074
            <Col className="info-labels">Price</Col>
          </Col>
          <Col>
            3,780,411
            <Col className="info-labels">Holders</Col>
          </Col>
          <Col>
            $60,833,800
            <Col className="info-labels">Liquidity</Col>
          </Col>
          <Col>
            $2,478,755
            <Col className="info-labels">Market cap</Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default InfoSection;
