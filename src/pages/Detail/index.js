import React, { useState, useEffect } from 'react'
import getSingleGif from '../../services/getSingleGif'
import Gif from '../../components/Gif'

export default function SingleGif({ params }) {
  const [gif, setGif] = useState('')
  const { id } = params

  useEffect(function() {
    getSingleGif({ id })
      .then(gif => setGif(gif))
  }, [id])

  return (
    <Gif
      id={gif.id}
      title={gif.title}
      url={gif.url}
    />
  )
}