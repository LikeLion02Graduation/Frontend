import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import RecommendMainPage from "./pages/recommend/RecommendMainPage";
import RecommendSearchPage from "./pages/recommend/RecommendSearchPage";
import RecommendResultPage from "./pages/recommend/RecommendResultPage";
import RecommendKeywordPage from "./pages/recommend/RecommendKeywordPage";
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

function App() {
  return (
    <Router>
      <Routes>
        {/* recommend */}
        <Route path={"/recommend/main"} element={<RecommendMainPage />} />
        <Route path={"/recommend/search"} element={<RecommendSearchPage />} />
        <Route path={"/recommend/keyword"} element={<RecommendKeywordPage />} />

        {/* mymap */}
        <Route path={"/map/:id"} element={<MapMainPage />} />
        <Route path={"/map/:id/all"} element={<MapAllRecommendPage />} />
        <Route path={"/map/:id/:recomId"} element={<MapRecommendPage />} />
        <Route path={"/map/:id/:recomId/commend"} element={<MapCommendPage />} />

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
