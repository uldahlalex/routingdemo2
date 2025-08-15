import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import HomeComponent from "./HomeComponent.tsx";
import AuthorDetail from "./AuthorDetail.tsx";

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
                     path: '/authors',
                     element: <div>This is the authors component</div>
                 },
                 {
                     path: '/authors/:authorId',
                     element: <AuthorDetail />
                 }
             ]
         }
         
     ])} />
    </>
  )
}

export default App
