import React from 'react'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  return (
    <div className=''>
      <MovieList title="Trending"/>
      <MovieList title="Popular"/>
      <MovieList title="Recent Hits"/>
      <MovieList title="Old Movie"/>

      </div>
  )
}

export default SecondaryContainer