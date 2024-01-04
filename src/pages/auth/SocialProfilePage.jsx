import React from "react";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import ProfileUpload from "../../components/auth/ProfileUpload";

const SocialProfilePage = () => {
  const fullURL = window.location.href;
  const code = fullURL.replace(process.env.REACT_APP_API_URL, "");

  console.log(fullURL);
  console.log(code);

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
