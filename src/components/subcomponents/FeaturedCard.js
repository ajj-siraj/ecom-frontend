import { Card, Button } from "react-bootstrap";

import coverPhoto from "../../assets/201392.jpg";

function FeaturedCard({ product }) {
  return (
    <Card className="bg-dark text-white rounded-0">
      <Card.Img src={coverPhoto} className="cover-image img-fluid" />
      <Card.ImgOverlay>
        <Card.Title>Don't miss this exclusive offer!</Card.Title>
        <Button>
          Browse Discounts
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default FeaturedCard;
