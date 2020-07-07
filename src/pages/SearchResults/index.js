import React, { useState, useEffect } from 'react'
import getGifs from '../../services/getGifs'
import Gif from '../../components/Gif'
import Spinner from '../../components/Spinner'

export default function SearchResults({ params }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const { keyword } = params

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