import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function() {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if (loading) return <div className="loading">Cargando...</div>

  return (
    <>
      { gifs.map(({id, title, url}) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      )}
    </>
  )
}