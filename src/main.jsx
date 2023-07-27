import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/store.jsx";
import Home from "./pages/Home.jsx";
import Movie1 from "./pages/Movie1.jsx";
import Movie2 from "./pages/Movie2.jsx";
import Movie3 from "./pages/Movie3.jsx";
import Movie4 from "./pages/Movie4.jsx";
import Movie5 from "./pages/Movie5.jsx";
import Movie6 from "./pages/Movie6.jsx";
import Login from "./pages/login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movie-1" element={<Movie1 />} />
          <Route path="/movie-2" element={<Movie2 />} />
          <Route path="/movie-3" element={<Movie3 />} />
          <Route path="/movie-4" element={<Movie4 />} />
          <Route path="/movie-5" element={<Movie5 />} />
          <Route path="/movie-6" element={<Movie6 />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);