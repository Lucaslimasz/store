import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Details from '../Components/Details';

export default function Informations() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Navbar />
        <Details />
      </body>
    </div>
  );
}
