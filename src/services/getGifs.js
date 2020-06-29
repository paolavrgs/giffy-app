const apiKey = "L53MCr6FurEb4HREITGkMRx4py12tomu"

export default function getGifs({keyword = 'jon snow'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data= []} = response
      const gifs = data.map(item => {
        const { images, title, id } = item
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}