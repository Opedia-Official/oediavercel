import { Card } from "react-bootstrap";
import { FaAngleRight} from "react-icons/fa";
import InnerHead from "../../../components/innerHead";
import Link from "next/link";
import { useEffect } from "react";
import WhatsappChat from "../../../components/whatsappChat";


import { server } from "../../../config";
import Meta from '../../../components/Meta'

export default function PortfolioCategtoryDetails({ cats,params} ) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, [params.catSlug]);

  const portsTitle = params.catSlug.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    " "
  );
  return (
    <>

 <Meta title = {portsTitle} />
    <WhatsappChat/>
      <InnerHead title="Portfolio" />
      <div className="portfolio-area">
        <div className="container">
          <div
            className="row   wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {
              cats?.map(cat=>{
                return (
                  <div key={cat.id} className="col-lg-4 col-sm-6">
                  <div className="portfolio-items mb-100">
                    <Card>
                      <Card.Img src={`${server}/${cat.thambnail_image}`} />
                    </Card>
                    <div className="portfolio-info">
                      <span>{cat.portfolio_title}</span>
                      <h2>{cat.project_name}</h2>
                      <div>
                        <Link href={`/portfolio/${cat.portfolio_slug}`}>
                          <a>
                            View Projects <FaAngleRight />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
            }
        
          </div>
        </div>
      </div>



    </>
  );
}




export async function getStaticPaths() {
    const res = await fetch(`${server}/api/portfolio/category`);
    const categories = await res.json();

  const paths = categories.map(category=>{
      return {
          params:{
            catSlug: `${category.category_slug}`
          }
      }
  })
  return {
      paths,
      fallback:true
  }



  }

export async function getStaticProps(context) {
    const { params } = context
    
    const res = await fetch( `${server}/api/portfolio/category/${params.catSlug}`);
    const cats = await res.json();

    
    return {
      props:{
        cats,
        params
      },
      revalidate: 10,
    }
  }


