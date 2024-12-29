import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getApiDataRQInd } from '../../api/FetchData';
import { useQuery } from '@tanstack/react-query';

const FetchRQInd = () => {

  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => getApiDataRQInd(id)
  })

  if (isLoading) return <main>
    <h1>Loading...</h1>
  </main>

  if (isError) return <main>
    <h1>{error.message}</h1>
  </main>


  return (
    <main>
      <h1 className='post-heading'>Post ID Number - {id}</h1>
      <div className='individual-post'>
      <p><span>ID: </span>{data.id}</p>
      <p><span>Title: </span>{data.title}</p>
      <p><span>Body: </span>{data.body}</p>
      </div>
      <NavLink to={"/fetch-rq"}>
        <button className='ind-btn'>Go Back</button>
      </NavLink>
    </main>
  )
}

export default FetchRQInd
