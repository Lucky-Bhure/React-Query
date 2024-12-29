import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchData } from "../../api/FetchData"
import { useEffect } from "react";


const InfiniteScroll = () => {

    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchData,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage?.length === 12 ? allPages?.length + 1 : undefined;
        },
    })

    const handleInfinitScroll = () => {
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

        if(bottom && hasNextPage) {
            fetchNextPage();
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfinitScroll);
        return () => {
        window.removeEventListener('scroll', handleInfinitScroll);
    };
    },[hasNextPage])

    console.log(data);
  return (
    <main>
      <h2 style={{marginTop: "3rem"}}>Infinite Scroll with React Query</h2>
        {
            data?.pages?.map((page,index) => 
                <ul className="data-pages" key={index}>
                    {
                        page?.map((user) => {
                            console.log(user);
                            return <li className="user-list" key={user.id}>
                                <img src={user.avatar_url} alt="" />
                                <p>{user.login}</p>
                            </li>
                        })
                    }
                </ul>
            )
        }

    </main>
  )
}

export default InfiniteScroll
