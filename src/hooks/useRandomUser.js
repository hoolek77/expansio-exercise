import { useState, useEffect } from 'react'

const useRandomUser = () => {
  const [randomUser, setRandomUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/')
        const user = await response.json()
        setRandomUser(user.results[0])

        // just for demo purpose
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      } catch (ex) {
        setIsLoading(false)
        throw new Error(ex)
      }
    }
    getUser()
  }, [])

  return [randomUser, isLoading]
}

export default useRandomUser
