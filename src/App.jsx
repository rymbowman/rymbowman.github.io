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
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
