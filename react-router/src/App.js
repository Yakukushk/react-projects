import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/Home";
import Product from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:id", element: <ProductDetail/> }
    ],
  },
]);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<RootLayout />} />
//     <Route path="/" element={<HomePage />} />
//     <Route path="/product" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
