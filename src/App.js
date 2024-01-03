import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import SignUpProfilePage from "./pages/auth/SignUpProfilePage";
import SocialProfilePage from "./pages/auth/SocialProfilePage";

import HomePage from "./pages/main/HomePage";
import HomeBuyingPage from "./pages/main/HomeBuyingPage";
import MyPage from "./pages/main/MyPage";

import RecommendMainPage from "./pages/recommend/RecommendMainPage";
import RecommendSearchPage from "./pages/recommend/RecommendSearchPage";
import RecommendKeywordPage from "./pages/recommend/RecommendKeywordPage";
import RecommendContentPage from "./pages/recommend/RecommendContentPage";

import MapMainPage from "./pages/mymap/MapMainPage";
import MapRecommendPage from "./pages/mymap/MapRecommendPage";
import MapCommendPage from "./pages/mymap/MapCommendPage";
import MapCommendWritePage from "./pages/mymap/MapCommendWritePage";
import MapSharePage from "./pages/mymap/MapSharePage";
import MapRecommendSharePage from "./pages/mymap/MapRecommendSharePage";

import PlacePage from "./pages/mapmaking/PlacePage";
import ThemePage from "./pages/mapmaking/ThemePage";
import NamePage from "./pages/mapmaking/NamePage";
import ImagePage from "./pages/mapmaking/ImagePage";
import DonePage from "./pages/mapmaking/DonePage";
import SharePage from "./pages/mapmaking/SharePage";

import HotMapPage from "./pages/payment/HotMapPage";
import PreviewPage from "./pages/payment/PreviewPage";
import PaymentPage from "./pages/payment/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* auth */}
        <Route path={"/auth/login"} element={<LoginPage />} />
        <Route path={"/auth/signup"} element={<SignUpPage />} />
        <Route path={"/auth/profile"} element={<SignUpProfilePage />} />
        <Route path={"/auth/social"} element={<SocialProfilePage />} />

        {/* main */}
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/homebuying"} element={<HomeBuyingPage />} />
        <Route path={"/my"} element={<MyPage />} />

        {/* recommend */}
        <Route path={"/map/:mapId/r/main"} element={<RecommendMainPage />} />
        <Route
          path={"/map/:mapId/r/search"}
          element={<RecommendSearchPage />}
        />
        <Route
          path={"/map/:mapId/r/keyword"}
          element={<RecommendKeywordPage />}
        />
        <Route
          path={"/map/:mapId/r/content"}
          element={<RecommendContentPage />}
        />

        {/* mymap */}
        <Route path={"/map/:mapId"} element={<MapMainPage />} />
        <Route path={"/map/:mapId/:recomId"} element={<MapRecommendPage />} />
        <Route
          path={"/map/:mapId/:recomId/commend"}
          element={<MapCommendPage />}
        />
        <Route
          path={"/map/:mapId/:recomId/commend/w"}
          element={<MapCommendWritePage />}
        />
        <Route path={"/map/:mapId/share"} element={<MapSharePage />} />
        <Route
          path={"/map/:mapId/:recomId/share"}
          element={<MapRecommendSharePage />}
        />

        {/* mapmaking */}
        <Route path={"/mapmaking/main"} element={<PlacePage />} />
        <Route path={"/mapmaking/theme"} element={<ThemePage />} />
        <Route path={"/mapmaking/name"} element={<NamePage />} />
        <Route path={"/mapmaking/image"} element={<ImagePage />} />
        <Route path={"/mapmaking/done"} element={<DonePage />} />
        <Route path={"/mapmaking/share"} element={<SharePage />} />

        {/* payment */}
        <Route path={"/hotmap/:location"} element={<HotMapPage />} />
        <Route path={"/payment/:location/:mapId"} element={<PreviewPage />} />
        <Route
          path={"/payment/:location/:mapId/pay"}
          element={<PaymentPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
