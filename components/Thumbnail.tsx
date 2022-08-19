import React from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../types'
import Image from "next/image"
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atom/modalAtom'

interface Props {
    movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
      
      const [showModal,setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    return (
        <div className='relative min-w-[180px] h-28 transition duration-200 cursor-pointer ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
        onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
        }}>
            <Image
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                className="rounded-sm object-cover md:rounded"
                layout="fill"


            />
        </div>
    )
}

export default Thumbnail