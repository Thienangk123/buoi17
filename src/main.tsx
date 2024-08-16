// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import "./index.css";
// import Login from "./components/login";
// import Layout from "./components/Layout";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/login"
//           element={<App />}
//         >
//           <Route path="abcd" element={<Layout text="\" />} />
//           <Route path="dev" element={<Login text="\" />} />
//         </Route>

//         <Route
//           path="/page"
//           element={
//             <h1>
//               page <Outlet />
//             </h1>
//           }
//         >
//           <Route path="abc" element={<h1>abc</h1>} />
//         </Route>

//         <Route path="/Trang-chu" element={<h1>Trang chu</h1>} />
//         <Route path="/san-pham" element={<h1>san pham</h1>} />
//         <Route path="/lien-he" element={<h1>lien he</h1>} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ProductPage from "./pages/ProductPage";
import Login from "./components/Login";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Login />},
  {
    path: "/pages",
    element: <App />,
    children: [
      {
        path: "product",
        element: <ProductPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}