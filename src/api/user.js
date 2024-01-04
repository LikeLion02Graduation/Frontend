import React from "react";
import { Navigate } from "react-router-dom";

import { http } from "../api/http";
import { persistor } from "../index";

// POST : 로그인
export const PostLogin = async (user_id, password) => {
  try {
    const response = await http.post("/accounts/signin/", {
      username: user_id,
      password: password,
    });

    localStorage.setItem("userId", response.data.data.id);
    localStorage.setItem("token", response.data.data.access_token);

    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // 토큰이 만료된 경우, 로그아웃 처리
      Logout();
    }
    console.error("로그인 실패 ", error.response);
    return Promise.reject(error);
  }
};

// 카카오 로그인
export const KAKAO_AUTH_URL = `${process.env.REACT_APP_API_URL}/accounts/kakao`;

export const KakaoLogin = async (url) => {
  try {
    const response = await http.get(url);
    console.log(response.data);
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
export const PostSignup = async (user_id, password, username, profile) => {
  try {
    const response = await http.post("/accounts/signup/", {
      username: user_id,
      password: password,
      nickname: username,
      profile: profile,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("이미 존재하는 아이디 입니다.");
    }
    return Promise.reject(error);
  }
};

// 토큰 만료 처리
export const isTokenExpired = async (error) => {
  if (error.response.data.detail === "Given token not valid for any token type") {
    window.location.reload();

    alert("세션 만료. 다시 로그인해주세요.");
    Logout();
  }
};

//isLogin + AuthRoute
export const isLogin = () => {
  const tokenData = localStorage.getItem("token");
  return tokenData && tokenData.expiration > Math.floor(Date.now() / 36000);
};

export default function AuthRoute({ component: Component }) {
  if (isLogin()) {
    return <Component />;
  } else {
    // 토큰이 없거나 만료된 경우, 로그아웃 처리
    Logout();
    return <Navigate to="/auth/login" />;
  }
}
