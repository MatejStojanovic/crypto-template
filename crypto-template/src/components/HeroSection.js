import { Row, Col, Button } from "reactstrap";
const HeroSection = () => {
  return (
    <article className="hero">
      <Row>
        <h1 className="hero_title">Welcome to Matix cryptocoin</h1>
      </Row>
      <Row className="hero_subtitle">
        <h4>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          asperiores debitis, distinctio quia tempora
          <p>
            odio ad consequatur expedita dicta dolorum pariatur adipisci qui
            earum maiores numquam magnam eveniet rem saepe!
          </p>
        </h4>
      </Row>
      <Row className="buttons-row">
        <Col>
          <button className="hero_cta hero_cta_main">Live chart</button>
        </Col>
        <Col>
          <button className="hero_cta hero_cta_sub">Buy now </button>
        </Col>
      </Row>
    </article>
  );
};

export default HeroSection;
