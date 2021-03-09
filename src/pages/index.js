import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Discover from '../Components/Discover'
import Featured from '../Components/Featured'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>
        <Navbar />
        <Discover />
        <Featured products={products}/>
      </body>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json();

  return {products};
}
