import { Card } from "react-bootstrap";
import Link from "next/link";

import { FaCloud, FaAngleRight } from "react-icons/fa";
import Meta from "../../components/Meta";

function ServiceItem({ item }) {
  const slug = item?.service_title
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/\s/g, "-");

  return (
    <Card>
      <Card.Body>
        <FaCloud />
        <Card.Title>{item?.service_title}</Card.Title>
        <Card.Text>
          <div
            dangerouslySetInnerHTML={{
              __html: `${item?.service_desc}`,
            }}
          ></div>

          <div>
            <Link href={`/service/${item?.service_slug}`}>
              <a>
                Service Details <FaAngleRight />
              </a>
            </Link>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default ServiceItem;
