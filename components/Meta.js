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

    {/* Google tag manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5RMF4C2');`}}></script>
      {/* Google tag manager */}
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
