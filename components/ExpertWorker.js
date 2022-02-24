import React from 'react';
import { Card } from 'react-bootstrap';


function ExpertWorker({item}) {
 const {type,
    description,
    Link,
    iconMain,
    iconSecondary,} = item

  return <div className="col-lg-4 col-sm-6 mb-5 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
  <Card >
    <Card.Body>
    {iconMain}
      <Card.Title>{type}</Card.Title>
      <Card.Text>
             {description}
          <div>
          <a href="#"> {Link} {iconSecondary} </a>
          </div>
      </Card.Text>
    
    </Card.Body>
  </Card>
  </div>;
}

export default ExpertWorker;
