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
        import MainLayout from './layouts/MainLayout.tsx'
        import { ClerkProvider } from '@clerk/clerk-react'



        const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


        if (!PUBLISHABLE_KEY) {
          throw new Error('Missing Publishable Key')
          }

          const router = createBrowserRouter([
           {
             element: <MainLayout />,
               children: [
                 {
                     path: "/",
                         element: <Homepage />
                           },
                             {
                                 path: "/posts",
                                     element: <PostListPage />
                                       },
                                         
                                           {
                                               path: "/writing",
                                                   element: <Writing />
                                                     },
                                                       {
                                                           path: "/register",
                                                               element: <Register />
                                                                 },
                                                                   {
                                                                       path: "/:slug",
                                                                       element: <PostListPage /> // Or a dedicated <PostPage /> component
                                                                     },
                                                                     ]
                                                                      }
                                                                      ]);

                                                                      createRoot(document.getElementById('root')!).render(
                                                                        <StrictMode>
                                                                            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                                                                                  <RouterProvider router={router} />
                                                                                      </ClerkProvider>
                                                                                        </StrictMode>,
                                                                                        )
                                                                                        