import Head from "next/head";

const Meta = ({ seo_title, description }) => {


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          {seo_title || seo_title !== null || seo_title !== undefined
            ? seo_title
            : "Opedia Technologies - Software & IT solution Company"}
        </title>
        <meta
          name="description"
          content={
            description || description !== null || description !== undefined
              ? description
              : "We Are One of the best It solution company in Dhaka, Bangladesh"
          }
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="/opedia.ico"
        />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  seo_title: "Opedia Technologies - Softwer & IT solution Company",
  description:
    "We Are One of the best It solution company in Dhaka, Bangladesh",
};

export default Meta;
