import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addNewPost, deletePost, getApiDataRQ, updatePost } from "../../api/FetchData";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => getApiDataRQ(pageNumber),
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();

  const handleDelete = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (postData, id) => {
      queryClient.setQueryData(["posts", pageNumber], (currEle) => {
        return currEle?.filter((post) => post.id !== id);
      })
    }
  })

  const handleUpdate = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (postData, id) => {
      queryClient.setQueryData(["posts", pageNumber], (currEle) => {
        return currEle?.map((post) => {
          return post.id === id ? {...post,title: postData.data.title} : post;
        })
      })
    }
  })


  if (isLoading)
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );

  if (isError)
    return (
      <main>
        <h1>{error.message}</h1>
      </main>
    );

  return (
    <main>
      <h2>React Query To Fetch Data</h2>
      <ul className="data-list">
        {data?.map((item) => {
          const { userId, id, title, body } = item;
          return (
            <li className="list" key={id}>
              <NavLink to={`/fetch-rq/${id}`}>
                <p>
                  <span>ID: </span>
                  {id}
                </p>
                <p>
                  <span>Title: </span>
                  {title}
                </p>
                <p>
                  <span>Body: </span>
                  {body}
                </p>
              </NavLink>
              <div className="post-btn">
              <button className="btn" onClick={() => handleUpdate.mutate(id)}>
                Edit
              </button>
              <button className="delete btn" onClick={() => handleDelete.mutate(id)}>
                Delete
              </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="pagination">
        <button
          disabled={pageNumber < 1 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
          className={pageNumber < 1 ? `btn-color` : "pagination-btn"}
        >
          PREV
        </button>
        <p>{pageNumber / 3 + 1}</p>
        <button
          onClick={() => setPageNumber((prev) => prev + 3)}
          className="pagination-btn"
        >
          NEXT
        </button>
      </div>
    </main>
  );
};

export default FetchRQ;
