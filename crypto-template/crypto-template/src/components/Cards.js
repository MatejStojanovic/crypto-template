import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import crypto from "../img/crypto.svg";
import investment from "../img/investment.svg";
import insurance from "../img/insurance.svg";
const Cards = ({}) => {
  return (
    <div className="services" id="services">
      <CardDeck>
        <Row xl="3" xs="1" className="services_row">
          <Col>
            <Card
              body
              inverse
              style={{
                height: "52rem",
              }}
              className="card-services"
            >
              <CardImg src={crypto} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h1">Feature 1</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo necessitatibus obcaecati facilis tempora vitae quae
                  dolorum, neque nisi debitis aliquid quam dolorem, quis numquam
                  distinctio ratione laudantium, labore veniam rem.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              body
              inverse
              style={{
                height: "52rem",
              }}
              className="card-services"
            >
              <CardImg src={investment} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h1">Feature 2</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo necessitatibus obcaecati facilis tempora vitae quae
                  dolorum, neque nisi debitis aliquid quam dolorem, quis numquam
                  distinctio ratione laudantium, labore veniam rem.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              body
              inverse
              style={{
                height: "52rem",
              }}
              className="card-services"
            >
              <CardImg src={insurance} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h1">Feature 3</CardTitle>{" "}
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo necessitatibus obcaecati facilis tempora vitae quae
                  dolorum, neque nisi debitis aliquid quam dolorem, quis numquam
                  distinctio ratione laudantium, labore veniam rem.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Cards;
