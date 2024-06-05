import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/NewNote";
import NewNote from "./pages/NewNote";

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/new', element: <NewNote/>},
    {path: '/:id', 
        children: [
        {index: true, element:<h1>Show</h1> },
        {path: 'edit', element: <h1>Edit</h1>}
    ]
},
    {path: '*', element: <Navigate to='/' />}
])