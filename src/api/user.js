import React from "react";
import { Navigate } from "react-router-dom";

import { http } from "../api/http";
import { persistor } from "../index";

// POST : 로그인
export const PostLogin = async (user_id, password, navigate) => {
  try {
    const response = await http.post("/accounts/signin/", {
      username: user_id,
      password: password,
    });

    localStorage.setItem("userId", response.data.data.id);
    localStorage.setItem("token", response.data.data.access_token);

    console.log(response.data.data);
    alert("로그인에 성공했습니다!");
    navigate("/");
    window.location.reload();
    return Promise.resolve(response.data.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error("로그인 실패", error.response);
  }
};

// 카카오 로그인
export const KAKAO_AUTH_URL = `${process.env.REACT_APP_API_URL}/accounts/kakao`;

export const KakaoLogin = async (url) => {
  try {
    const response = await http.get(url);
    console.log(response.data);

    localStorage.setItem("userId", response.data.data.id);
    localStorage.setItem("token", response.data.data.access_token);

    alert("로그인에 성공했습니다!");
    // navigate("/");
    return Promise.resolve(response.data);
  } catch (error) {
    throw error;
  }
};

// 로그아웃
export const Logout = () => {
  persistor.purge();
  window.localStorage.removeItem("userId");
  window.localStorage.removeItem("token");
  window.location.replace("/auth/login");
};

// POST : 회원가입
export const PostSignup = async (user_id, password, username, profile, navigate) => {
  try {
    const response = await http.post("/accounts/signup/", {
      username: user_id,
      password: password,
      nickname: username,
      profile: profile,
    });
    console.log(response.data);
    alert("가입이 완료되었습니다.");
    navigate("/auth/login");
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error("회원가입 실패", error.response);
  }
};

// 토큰 만료 처리
// export const isTokenExpired = async (error) => {
//   if (error.response.data.detail === "Given token not valid for any token type") {
//     window.location.reload();

//     alert("세션 만료. 다시 로그인해주세요.");
//     Logout();
//   }
// };

//isLogin + AuthRoute
const isLogin = () => !!localStorage.getItem("token");

export default function AuthRoute({ children }) {
  if (isLogin()) {
    return children;
  } else {
    alert("로그인이 필요합니다:(");
    return <Navigate to="/auth/login" />;
  }
}
