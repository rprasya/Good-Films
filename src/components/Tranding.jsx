import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/tranding/dune.jpg";
import everythingImage from "../assets/images/tranding/everything.jpg";
import infiniteImage from "../assets/images/tranding/infinite.jpg";
import jokerImage from "../assets/images/tranding/joker.jpg";
import lightyearImage from "../assets/images/tranding/lightyear.jpg";
import morbiusImage from "../assets/images/tranding/morbius.jpg";

const Tranding = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRANDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="tranding">
            <Card className="bg-dark text-white movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">DUNE</Card.Title>
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
                src={everythingImage}
                alt="Everything Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">EVERYTHING</Card.Title>
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
                src={infiniteImage}
                alt="Infinite Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">INFINITE</Card.Title>
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
              <Image src={jokerImage} alt="Joker Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">JOKER</Card.Title>
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
                src={lightyearImage}
                alt="Lightyear Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">LIGHTYEAR</Card.Title>
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
                src={morbiusImage}
                alt="Morbius Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">MORBIUS</Card.Title>
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

export default Tranding;
