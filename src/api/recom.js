import { http } from "../api/http";
// import { isTokenExpired } from "./user";

// GET : 알림 조회
export const GetNoticeList = async () => {
  try {
    const response = await http.get(`/recom/notice/`);
    console.log("응답 결과: ", response.data);
    return response.data;
  } catch (error) {
    console.error("알림 조회 실패", error.response);
  }
};

// DELETE : 알림 삭제
export const DeleteNotice = async (id) => {
  try {
    const response = await http.delete(`/recom/notice/${id}`, {
      pk: id,
    });
    console.log("message: ", response);
    return Promise.resolve(response);
  } catch (error) {
    console.error("알림 삭제 실패", error.response);
    return Promise.reject(error);
  }
};

// GET : 추천 콘텐츠 리스트
export const GetHotMapList = async (loc) => {
  try {
    const response = await http.get(`/recom/content/?key=${loc}`, {
      key: loc,
    });
    console.log("message: ", response);
  } catch (error) {
    console.error("알림 삭제 실패", error.response);
  }
};
