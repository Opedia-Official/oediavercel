import React from "react";
import InnerHead from "../components/innerHead";
import Meta from "../components/Meta";
import WhatsappChat from "../components/whatsappChat";

import trainingImage from "/public/page-image/privacy.jpg";

function Privacy() {
  return (
    <>
      <Meta seo_title="Privacy" />
      <WhatsappChat />
      <InnerHead title="Privacy" img={trainingImage} isDynamic={false} />

      <div
        style={{ marginTop: "0px", marginBottom: "20px" }}
        className="container terms mb-5"
      >
        <div className="div ">
          <br />
          <p>This is the website of Big Spaceship Opedia Company.</p>
          <p>
            Company has created this privacy policy statement in order to
            demonstrate our commitment to your privacy with respect to our
            website (“Site”), as well as services we provide to our clients
            (“Services”). This privacy policy explains our data collection and
            use practices for the Site and our Services as well as your choices
            regarding your personal information.
          </p>
          <p>
            The Site provides information about the company, products, services
            and a means to contact the Company. IF YOU DO NOT AGREE TO THIS
            PRIVACY POLICY YOU MAY NOT ACCESS OR OTHERWISE USE THE SITE. Our
            postal address is: 55 Washington St, 5th Floor Brooklyn, NY 11201 We
            can be reached via e-mail at{" "}
            <span style={{ color: "#2f6eb5" }}>
              opedia.technologies@gmail.com
            </span>
            , or you can reach us by telephone at 01978159172.
          </p>
        </div>
        <div className="div">
          <h2>Type of Information We Collect</h2>
          <p>
            While using our Site and Services, we may collect certain
            information that can be used to contact or identify you ("Personal
            Information"). We may collect the following types of Personal
            Information:
          </p>

          <ul>
            <li>
              Contact information that allows us to communicate with you, such
              as your name, email addresses, telephone numbers, mailing
              addresses.
            </li>
            <li>
              Information that your browser sends whenever you visit our
              Services ("Log Data"). This Log Data may include information such
              as your computer's Internet Protocol ("IP") address, browser type,
              browser version, the pages of our Services that you visit, the
              time and date of your visit, the time spent on those pages,
              approximate location in the world, certain anonymized behavior
              data, and other statistics.
            </li>
            <li>
              Information that you directly provide to use, for example, if you
              send us an email, apply for a job, purchase a product, add your
              name to our mailing list, participate in our contests, or follow
              us on social media. This data may include, for example, your name,
              email address, public social media usernames, and any other data
              you provide, which may be personally identifiable either on its
              own or in combination with other data. We may also retain a log of
              all communications with you in order to have a history of our past
              communications and to better serve you.
            </li>
            <li>
              Information Collected from Other Sources. We may license and
              otherwise obtain non-personally identifiable information from
              other companies, including research companies, data aggregation
              companies and other third party companies. Data sets may include
              information about you or your demographic segment that such
              companies have licensed, purchased or collected.
            </li>
          </ul>
        </div>
        <div className="div">
          <h2>How We Use Collected Information</h2>
          <p>
            We may use information about you for various purposes, including to:
          </p>
          <ul>
            <li>
              Provide, maintain, and improve our Site and Services, and develop
              new products and services;
            </li>
            <li>
              Provide and deliver the services you request, and process
              transactions and send you related information, including
              confirmations,
            </li>
            <li>
              Respond to your comments, questions and requests, or otherwise
              communicate with you about the Services;
            </li>
            <li>
              Personalize and improve the Services and provide advertisements,
              content or features that match user profiles or interests;
            </li>
            <li>
              Authenticate your identity, when necessary pursuant to legal and
              regulatory requirements;
            </li>
            <li>
              Send you technical notices, updates, security alerts and support
              and administrative messages;
            </li>
            <li>
              onitor and analyze trends, usage and activities in connection with
              our Site;
            </li>
            <li>
              Carry out any other purpose described to you at the time the
              information was collected.
            </li>
          </ul>
        </div>
        <div className="div">
          <h2>User Generated Content</h2>
          <p>
            The Websites present information and content including, but not
            limited to, articles, opinions, text, data, software applications,
            commentary, advertisements, graphics, illustrations, calendars,
            designs, games, reviews, video and audio files, programs, code, and
            photos, in addition to User Generated Content (as defined herein)
            (collectively, “Content”), that is owned or licensed by the Company.
            The Sites may also include materials owned by third parties and
            posted on the Sites by virtue of a license, grant or some other form
            of agreement between the third party and BSS. When used in this
            Agreement, “we”, “us” and “our” mean BSS. The Content contained on
            the Websites is for general information use only and has not been
            verified by BSS. BSS does not make any representations as to the
            accuracy or completeness of Content or assume any liability for any
            loss that may result from the reliance by any person upon any
            Content we provide. Any statements non-factual in nature constitute
            only current opinions, which are subject to change without notice.
          </p>
        </div>
      </div>
    </>
  );
}

export default Privacy;
