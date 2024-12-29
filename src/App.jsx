import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/AppLayout/AppLayout'
import Home from './pages/Home/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FetchOld from './pages/FetchOld/FetchOld'
import FetchRQ from './pages/FetchRQ/FetchRQ'
import FetchRQInd from './pages/FetchRQInd/FetchRQInd'
import InfiniteScroll from './pages/InfiniteScroll/InfiniteScroll'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children : [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/fetch-rq",
          element: <FetchRQ />
        },
        {
          path: "/fetch-rq/:id",
          element: <FetchRQInd />
        },
        {
          path: "/fetch-old",
          element: <FetchOld />
        },
        {
          path: "/infinite-scroll",
          element: <InfiniteScroll />
        },
      ]
    }
  ])

  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} />
  </QueryClientProvider>
  
}

export default App
