
import Head from 'next/head'
import Header from './components/Header'
import Homepage from './Home/Homepage'


export default function index() {
  return (
    <div className="">
      <Head>

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />


      </Head>

      <Header />
      <Homepage />


    </div>
  )
}