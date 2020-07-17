import { useEffect, useState, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
  const {gifs, setGifs} = useContext(GifsContext)
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
  }, [keyword, setGifs])

  return {loading, gifs}
}