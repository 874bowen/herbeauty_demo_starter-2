import Head from 'next/head'
import Featured from '../components/Featured'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HerBeauty</title>
        <meta name="description" content="Next.js e-commerce application using Xata as a serverless data storage and Cloudinary for media transformations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Featured />
      <Footer />
    </div>
  )
}
