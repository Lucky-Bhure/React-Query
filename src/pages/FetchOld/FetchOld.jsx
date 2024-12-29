import React, { useEffect, useState } from 'react'
import { getApiData } from '../../api/FetchData';

const FetchOld = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);


  const apiData = async () => {
    try {
      const res = await getApiData();
      if (res.status === 200) {
        setData(res.data);
        setIsLoading(false)
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error)
      setIsError(error)
      return [];
    }
  }

  useEffect(() => {
    apiData()
  }, [])


  if (isLoading) return <main>
    <h1>Loading...</h1>
  </main>

  if (isError) return <main>
    <h1>{isError.message}</h1>
  </main>


  return (
    <main>
      <h2 className='old'>Old Way To Fetch Data</h2>
      <ul className='data-list'>
        {
          data?.map((item) => {
            const { userId, id, title, body } = item;
            return <li key={id} className='list'>
              <p><span>ID: </span>{id}</p>
              <p><span>Title: </span>{title}</p>
              <p><span>Body: </span>{body}</p>
            </li>
          })
        }
      </ul>
    </main>
  )
}

export default FetchOld
