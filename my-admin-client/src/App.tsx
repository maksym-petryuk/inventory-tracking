 import './App.css'
// import Laut from "./component/layout.tsx";
// import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";

function App() {

    return <RouterProvider router={router} />;

}

export default App
