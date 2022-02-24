// import { Card } from "react-bootstrap";
// import Link from "next/link";

// import { BiRightArrowAlt } from "react-icons/bi";
// import { FaCloud } from "react-icons/fa";
// import Meta from "../../components/Meta";
// import {server} from '../../config/index'

// function ServiceItem({ item }) {
//   const slug = item.service_title
//     .toLowerCase()
//     .split(" ")
//     .join("")
//     .replace(/\s/g, "-");
//   //   const slug = "item";
//   return (
//     <Card>
//       <Meta title={slug} />
//       <Card.Body>
//         <FaCloud />
//         <Card.Title>{item.service_title}</Card.Title>
//         <Card.Text>
//           <p
//             dangerouslySetInnerHTML={{
//               __html: `${item.service_desc}`,
//             }}
//           ></p>

//           <div>
//             {/* <Link href={`/service/${item.service_slug}`}> */}
//               <a>
//                 Service Details <BiRightArrowAlt />
//               </a>
//             {/* </Link> */}
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ServiceItem;

import React from 'react'

function serviceItem() {
  return (
    <div>serviceItem</div>
  )
}

export default serviceItem
