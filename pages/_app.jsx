import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import '../styles/globals.scss';
import {Toaster} from 'sonner'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return <html lang="fr" suppressHydrationWarning={true}>
    <Head>
        <meta charSet='UTF-8'/>
        <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta property='og:locale' content='fr_FR'/>
        <meta name='author' content='Web Waze Digital'/>
        <meta property='og:url' content='https://webwazedigital.com'/>
        <meta property='og:description'
              content='Renforcez votre présence en ligne avec nos services complets de conception web, de développement et de gestion des réseaux sociaux. Des solutions sur mesure pour valoriser votre marque et engager efficacement votre public.'/>
        <meta property='og:image:width' content='1500'/>
        <meta property='og:image:height' content='1500'/>
        <meta property='og:image' content='https://webwazedigital.com/images/opengraph.png' />
        <meta name='twitter:card' content='summary_large_image'/>
        <meta
            property='og:site_name'
            content='Developing Superior Software for Leading Businesses'
        />
        <meta
            name='keywords'
            content='JavaScript developer, TypeScript developer, Web developer'
        />
    </Head>
    <Toaster richColors={true} duration={5000}/>
    <Component  {...pageProps} />
</html>
}

export default MyApp;
