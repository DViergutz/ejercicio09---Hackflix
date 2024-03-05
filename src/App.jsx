import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import SearchMovie from "./components/Home";
import router from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
