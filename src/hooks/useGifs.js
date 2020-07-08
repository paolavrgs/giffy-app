import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

export function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function() {
    setLoading(true)
    // Recuperar keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)

        // Guardar keywork en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword])

  return {loading, gifs}
}