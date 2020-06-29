const apiKey = "L53MCr6FurEb4HREITGkMRx4py12tomu"

export default function getGifs({id = '7lkHLJhwwxRTy'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const { images, title, id } = data
      const { url } = images.downsized_medium
      return { title, id, url }
    })
}