import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { Movie } from "../types"
import Row from '../components/Row'
import requests from '../utils/requests'

interface Props {
  netflixOriginals: Movie[],
  trendingNow: Movie[],
  topRated: Movie[],
  actionMovies: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[],
}

const Home = ({ netflixOriginals, trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries }: Props) => {

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}
      <Header />

      <main className='relaive pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {/* Banner  */}
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          <Row title="Trending Now" movies={trendingNow} />

          <Row title="Top Rated" movies={topRated} />
          {/* <MyListComponent will be here /> */}
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />

          {/* Row  */}
          {/* Row  */}
          {/* Row  */}
          {/* Row  */}
          {/* Row  */}
          {/* Row  */}
          {/* Row  */}
        </section>
      </main>



      {/* 
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home


export const getServerSideProps = async () => {




  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  // console.log(netflixOriginals)

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      // products,
    },
  }

}