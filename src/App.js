import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/main/HomePage";
import RecommendMainPage from "./pages/recommend/RecommendMainPage";
import RecommendSearchPage from "./pages/recommend/RecommendSearchPage";
import RecommendKeywordPage from "./pages/recommend/RecommendKeywordPage";
import RecommendContentPage from "./pages/recommend/RecommendContentPage";
import MapMainPage from "./pages/mymap/MapMainPage";
import MapAllRecommendPage from "./pages/mymap/MapAllRecommendPage";
import MapRecommendPage from "./pages/mymap/MapRecommendPage";
import MapCommendPage from "./pages/mymap/MapCommendPage";
import PlacePage from "./pages/mapmaking/PlacePage";
import ThemePage from "./pages/mapmaking/ThemePage";
import NamePage from "./pages/mapmaking/NamePage";
import ImagePage from "./pages/mapmaking/ImagePage";
import DonePage from "./pages/mapmaking/DonePage";
import SharePage from "./pages/mapmaking/SharePage";
import MapSharePage from "./pages/mymap/MapSharePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* main */}
        <Route path={"/home"} element={<HomePage />} />
        {/* recommend */}
        <Route path={"/recommend/main"} element={<RecommendMainPage />} />
        <Route path={"/recommend/search"} element={<RecommendSearchPage />} />
        <Route path={"/recommend/keyword"} element={<RecommendKeywordPage />} />
        <Route path={"/recommend/content"} element={<RecommendContentPage />} />

        {/* mymap */}
        <Route path={"/map/:id"} element={<MapMainPage />} />
        <Route path={"/map/:id/all"} element={<MapAllRecommendPage />} />
        <Route path={"/map/:id/:recomId"} element={<MapRecommendPage />} />
        <Route
          path={"/map/:id/:recomId/commend"}
          element={<MapCommendPage />}
        />
        <Route path={"/map/:id/share"} element={<MapSharePage />} />

        {/* mapmaking */}
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
