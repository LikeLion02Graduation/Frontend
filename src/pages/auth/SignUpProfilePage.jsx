import React from "react";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import ProfileUpload from "../../components/auth/ProfileUpload";

const SignUpProfilePage = () => {
  return (
    <>
      <TopBar navBtnOn={true} titleText="프로필 설정" />
      <Wrapper>
        <ProfileUpload />
      </Wrapper>
    </>
  );
};

export default SignUpProfilePage;
