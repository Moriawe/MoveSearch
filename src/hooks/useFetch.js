import { useEffect, useState } from "react"

const useFetch = (searchString) => {
  const API_KEY = `&apikey=${process.env.REACT_APP_API_KEY}`
  const url = "https://www.omdbapi.com/?"
  const endpoint = `${url}${searchString}${API_KEY}`

  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log("Logging Endpoint from useFetch: " + endpoint)
    fetch(endpoint)
      .then((response) => {
        //console.log(response)
        if (!response.ok) {
          throw Error("Could not fetch data")
        }
        return response.json()
      })
      .then((data) => {
        //console.log(data)
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        //console.log(error.message)
        setError(error.message)
        setIsPending(false)
      })
  }, [endpoint])

  return { data, isPending, error }
}

export default useFetch
