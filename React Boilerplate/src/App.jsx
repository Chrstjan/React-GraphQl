import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";
import { SearchPage } from "./pages/SearchPage";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<LandingPage />}/>
            <Route path={"/about"} element={<AboutPage />}/>
            {/* <Route path={"/search"} element={<SearchPage />}/> */}
            <Route path={"/search/:filmID"} element={<SearchPage />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
