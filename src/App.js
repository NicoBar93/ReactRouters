import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductionDetailPage from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: <Home /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'products/:id', element: <ProductionDetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;


// con absolute Paths devo inserire lo / in tutti i percorsi, con i relative Paths non ho bisogno degli /.
