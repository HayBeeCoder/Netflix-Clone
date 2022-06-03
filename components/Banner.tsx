import { useEffect, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import { Movie } from '../types'
import { baseUrl } from "../constants/movie"
import { FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from '@heroicons/react/solid'
interface Props {
  netflixOriginals: Movie[]
}
const Banner = ({ netflixOriginals }: Props) => {

  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])

  }, [])
  console.log(movie)

  return (
    <div className=' flex flex-col space-y-2 pt-[30%] lg:pt-0   md:space-y-4 lg:justify-center h-screen '>

      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit='cover'
        />
      </div>
      <div className=' relative  '>

      <h1 className='text-2xl lg:text-7xl font-bold md:text-4xl '>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='max-w-xs text-sm md:max-w-lg  md:text-lg lg:max-w-2xl text-shadow-md'>{movie?.overview}</p>
      <div className='flex gap-3'>
        <button className='flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-65 md:py-2.5 md:px-8 md:text-xl bg-white text-black'> <FaPlay className='h-4 w-4 text-black md:w-5 md:h-5' /> Play</button>
        <button className='flex items-center gap-x-2 rounded px-5 py-1.5 font-semibold transition  hover:opacity-65 md:py-2.5 md:px-8 md:tex-xl bg-[gray]/70'>More Info<InformationCircleIcon className='h-4 w-4 text-white md:w-7 md:h-7' /> </button>
      </div>
      </div>
    </div>
  )
}

export default Banner