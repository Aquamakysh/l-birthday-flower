// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  'BQCbVPrlM6JHk4mjODawjq6QEAggRpda5ESaY23hB119UgnN7phbyqpvRpJbM9KOGIXMC-o0Jc5ma5oqpAN9R7owk9OC5F7xzT1eET6Y3YSR9C-Yhh0V7ZWQHrXOKJ6gxiyGgigRMh5QXznrQtk9yEQZgh9LHHwv3a8E9Wl7FabiJKRsvFjuHOQA3uBhC6djWlLM2ixm9oitnL3FCjrkXFx8GXeqYnNog7L-ErWl6AYdcyHI_eSgaRCkU-WUJk7HG40XzqfcIN7HQ1xRQ1IhKonbO_NXvXBK6KOFmHFWFO6QEngg'
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    method,
    body: JSON.stringify(body)
  })
  return await res.json()
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=5',
      'GET'
    )
  ).items
}

const topTracks = await getTopTracks()
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
)
