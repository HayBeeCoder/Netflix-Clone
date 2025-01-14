import { ChevronLeftIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import Thumbnail from './Thumbnail'
import { Movie } from '../types'

interface Props {
  title: String
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: String) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef?.current as HTMLDivElement

      const scrollTo =
        direction == 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef?.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('left')}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide"
        >
          {movies &&
            Array.isArray(movies) &&
            movies?.map((movie) => <Thumbnail key={movie.id} movie={movie} />)}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0  right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
