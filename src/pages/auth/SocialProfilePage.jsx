import React from "react";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import ProfileUpload from "../../components/auth/ProfileUpload";

const SocialProfilePage = () => {
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
