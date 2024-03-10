import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermancoverImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="bg-dark text-white movieImage">
              <Image src={antmanImage} alt="antman Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">ANT-MAN</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={avengerImage}
                alt="Avenger Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">AVENGERS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={batmanImage}
                alt="Batman Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">BATMAN THE DARK KNIGHT</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={robinhoodImage} alt="RobinHood Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={spidermancoverImage}
                alt="Spiderman Cover Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={supermanImage}
                alt="Superman Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">SUPERMAN - MAN OF STEEL</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
