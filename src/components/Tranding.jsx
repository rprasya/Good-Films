import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/tranding/dune.jpg";

const Tranding = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={duneImage} alt="Dune Movies" />
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
        </Row>
      </Container>
    </div>
  );
};

export default Tranding;
