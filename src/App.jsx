import React from "react";
import Homepage from "./pages/Homepage";
import Connect from "./pages/Connect";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/resume" element={<h1>Resume Page</h1>} />
      <Route
        path="*"
        element={<h1>Page not found. Please return to home page.</h1>}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
