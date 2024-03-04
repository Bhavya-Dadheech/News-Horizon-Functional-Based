import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 16;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProg] = useState(0);
  const [country, setCntry] = useState("in");
  const [mode, setMode] = useState("dark");

  const setProgress = (progress) => {
    setProg(progress);
  };

  const setCountry = (cntry) => {
    setCntry(cntry);
  };

  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3A3B3C";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#3A3B3C";
    }
  }, [mode]);

  return (
    <div>
      <LoadingBar color="#007bff" height={3} progress={progress} />
      <Navbar mode={mode} toggleMode={toggleMode} country={country} setCountry={setCountry} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          }
        ></Route>
        <Route exact path="/about" element={<About mode={mode} />}></Route>
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="business"
              pageSize={pageSize}
              country={country}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="entertainment"
              pageSize={pageSize}
              country={country}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="health"
              pageSize={pageSize}
              country={country}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="science"
              pageSize={pageSize}
              country={country}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="sports"
              pageSize={pageSize}
              country={country}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              mode={mode}
              key="technology"
              pageSize={pageSize}
              country={country}
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
