import Head from "next/head";
const Meta = ({title,description})=>{
    return (
        <>
            <Head>
            <meta charset="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
            <link rel="shortcut icon" type="image/png" sizes="32x32" href="/opedia.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            <script src="https://apps.elfsight.com/p/platform.js" defer></script>

            </Head>
        </>
      )
}



Meta.defaultProps ={
    title: "Opedia Technologies - Softwer & IT solution Company",
    description: "We Are One of the best It solution company in Dhaka, Bangladesh"
}

export default Meta;