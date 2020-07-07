import React, { useState, useEffect } from 'react'
import './ListOfGifs.css'
import getGifs from '../../services/getGifs'
import Spinner from '../Spinner'
import Gif from '../Gif'

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

  if (loading) return <Spinner />

  return (
    <div className="list-gifs">
      { gifs.map(({id, title, url}) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      )}
    </div>
  )
}