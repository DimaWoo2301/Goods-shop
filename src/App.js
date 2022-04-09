import './App.css';
import React from "react";
import { ShowCase } from "./Components/ShowCase/ShowCase";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout";
import {ShowCaseWindow} from "./Components/ShowCase/ShowCaseWindow/ShowCaseWindow";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<ShowCase/>} />
        <Route path="post" element={<ShowCase/>} />
        <Route path="post/:id" element={<ShowCaseWindow/>} />
      </Route>
    </Routes>
    </>
    );
  }

export default App;
