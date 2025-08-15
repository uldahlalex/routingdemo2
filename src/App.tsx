import './App.css'
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router";
import HomeComponent from "./HomeComponent.tsx";
import AuthorDetail from "./AuthorDetail.tsx";
import AuthorsList from "./AuthorsList.tsx";

export const authorRoute = "/authors"


function App() {

  return (
    <>
        
     <RouterProvider router={createBrowserRouter([

         {
             path:'/',
             element: <HomeComponent />,
             children: [
                 {
                     path: '/books',
                     element: <div>This is the books component</div>
                 },
                 {
                     path: authorRoute,
                     element: <AuthorsList />
                 },
                 {
                     path: authorRoute+'/:authorId',
                     element: <AuthorDetail />
                 }
             ]
         }
         
     ])} />
    </>
  )
}

export default App
