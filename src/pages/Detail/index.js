import React, { useContext } from 'react'
import Gif from '../../components/Gif'
import GifContext from '../../context/GifsContext'

export default function SingleGif({ params }) {
  const {gifs} = useContext(GifContext)

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  return (
    <Gif {...gif} />
  )
}