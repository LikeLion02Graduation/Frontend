import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import SocialProfile from "../../components/auth/SocialProfile";

import { KakaoLogin } from "../../api/user";

const SocialProfilePage = () => {
  const navigate = useNavigate();

  const urlParams = new URL(window.location.toString()).searchParams;
  const AUTHORIZATION_CODE = urlParams.get("code");

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await KakaoLogin(AUTHORIZATION_CODE);
      setUserData(response);
    };

    getData();
  }, []);

  if (userData && userData.signup === false) {
    navigate("/");
  }

  return (
    <>
      <TopBar navBtnOn={true} titleText="소셜 로그인" />
      <Wrapper>
        <SocialProfile userData={userData} />
      </Wrapper>
    </>
  );
};

export default SocialProfilePage;
