import React from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../types'
import Image from "next/image"

interface Props {
    movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
    return (
        <div className='relative min-w-[1200px] h-20 transition duration-200 cursor-pointer ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <Image
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                className="rounded-sm object-cover md:rounded"
                layout="fill"


            />
        </div>
    )
}

export default Thumbnail