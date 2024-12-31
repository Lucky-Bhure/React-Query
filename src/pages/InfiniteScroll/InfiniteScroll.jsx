import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchData } from "../../api/FetchData"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const InfiniteScroll = () => {

    const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchData,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage?.length === 12 ? allPages?.length + 1 : undefined;
        },
    })

    // const handleInfinitScroll = () => {
    //     const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

    //     if(bottom && hasNextPage) {
    //         fetchNextPage();
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleInfinitScroll);
    //     return () => {
    //     window.removeEventListener('scroll', handleInfinitScroll);
    // };
    // },[hasNextPage])

    const { ref, inView } = useInView({
        threshold: 1,
    })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    if (status === 'loading') return <main>
        <h1>Loading...</h1>
    </main>

    if (status === 'error') return <main>
        <h1>Error Fetching Data</h1>
    </main>

    return (
        <main>
            <h2 style={{ marginTop: "3rem" }}>Infinite Scroll with React Query</h2>
            {
                data?.pages?.map((page, index) =>
                    <ul className="data-pages" key={index}>
                        {
                            page?.map((user) => {
                                return <li className="user-list" key={user.id}>
                                    <img src={user.avatar_url} alt="" />
                                    <p>{user.login}</p>
                                </li>
                            })
                        }
                    </ul>
                )
            }
            <div ref={ref} style={{paddingTop: "1rem", fontSize: "1.3rem"}}>
                {
                    isFetchingNextPage ? "Loading more..." : hasNextPage ? "Scroll down to load more" : "No More Users"
                }
            </div>

        </main>
    )
}

export default InfiniteScroll
