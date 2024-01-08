import React, { useState, useEffect } from "react";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import ProfileUpload from "../../components/auth/ProfileUpload";
import { KakaoLogin } from "../../api/user";

const SocialProfilePage = () => {
  const fullURL = window.location.href;
  const code = fullURL.replace("http://localhost:3000", ""); //임시 URL

  console.log(fullURL);
  console.log(code);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await KakaoLogin(code);
      setUserData(response);

      console.log(userData);
    };

    getData();
  }, []);

  return (
    <>
      <TopBar navBtnOn={true} titleText="소셜 로그인" />
      <Wrapper>
        <ProfileUpload />
      </Wrapper>
    </>
  );
};

export default SocialProfilePage;
