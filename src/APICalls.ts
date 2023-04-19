export default function getNewsResults(section: string) {
  const key: string = process.env.REACT_APP_NYT_API_KEY!;
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error()
    }
  })
}