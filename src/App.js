import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import RecommendMainPage from "./pages/recommend/RecommendMainPage";
import RecommendResultPage from "./pages/recommend/RecommendResultPage";
import RecommendSearchPage from "./pages/recommend/RecommendSearchPage";
import PlacePage from "./pages/mapmaking/PlacePage";
import ThemePage from "./pages/mapmaking/ThemePage";
import NamePage from "./pages/mapmaking/NamePage";
import ImagePage from "./pages/mapmaking/ImagePage";
import DonePage from "./pages/mapmaking/DonePage";
import SharePage from "./pages/mapmaking/SharePage";

function App() {
  return (
    <Router>
      <Routes>
        <RecommendMainPage />
        <RecommendSearchPage />
        <RecommendResultPage />
        <Route path={"/mapmaking/main"} element={<PlacePage />} />
        <Route path={"/mapmaking/theme"} element={<ThemePage />} />
        <Route path={"/mapmaking/name"} element={<NamePage />} />
        <Route path={"/mapmaking/image"} element={<ImagePage />} />
        <Route path={"/mapmaking/done"} element={<DonePage />} />
        <Route path={"/mapmaking/share"} element={<SharePage />} />
      </Routes>
    </Router>
  );
}

export default App;
