
export default function getNewsResults(section: string) {
  const key = import.meta.env.VITE_REACT_APP_NYT_API_KEY;
  const url = new window.URL(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error()
    }
  })
}