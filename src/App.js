import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/Products', element: <Products /> }
  ])

  return <RouterProvider router={router} />;
}

export default App;
