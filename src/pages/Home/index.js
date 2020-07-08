import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()
  
  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Search gifs here" type="text" value={keyword} />
        <button>Search</button>
      </form>
      <h2>Últimas búsquedas</h2>
      { loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}