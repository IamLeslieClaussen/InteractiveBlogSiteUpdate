import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import Homepage from './routes/Homepage.tsx'
import PostListPage from './routes/PostListPage.tsx'
import Writing from './routes/Writing.tsx'
import Register from './routes/Register.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/posts",
    element: <PostListPage />
  },
  {
    path: "/:slug",
    element: <PostListPage />
  },
  {
    path: "/writing",
    element: <Writing />
  },
  {
    path: "/:slug",
    element: <Register />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
