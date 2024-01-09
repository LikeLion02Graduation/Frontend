import { http } from "../api/http";
// import { isTokenExpired } from "./user";

// GET : 추천 상세 조회
export const GetRecomMain = async (id) => {
  try {
    const response = await http.get(`/recom/${id}`);
    console.log("추천 상세 조회", response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error("추천 상세 조회 실패", error);
    return Promise.reject(error);
  }
};

// POST : 추천 작성하기
export const PostRecom = async (mapId, mapTitle, mapContent, userId, mapPlace, mapHashtag, navigate) => {
  try {
    const response = await http.post("/recom/", {
      map_id: mapId,
      title: mapTitle,
      content: mapContent,
      user_id: userId,
      place: mapPlace,
      hashtag: mapHashtag,
    });
    console.log(response.data);
    console.log(response.data.data.id);
    navigate(`/map/${mapId}/${response.data.data.id}`);
    return Promise.resolve(response);
  } catch (error) {
    console.error("추천 작성하기 실패 ", error.response);
    return Promise.reject(error);
  }
};

// GET :추천 반응 상세보기
export const GetRecomReact = async (id) => {
  try {
    const response = await http.get(`/recom/react/${id}`);
    console.log("추천 반응 조회", response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error("추천 반응 조회 실패", error);
    return Promise.reject(error);
  }
};

// POST : 추천 반응 남기기
export const PostRecomReact = async (id, emoji, input) => {
  try {
    const response = await http.post(`/recom/react/${id}`, {
      emoji: emoji,
      content: input,
    });
    console.log(response.data);
    return Promise.resolve(response);
  } catch (error) {
    console.error("추천 반응 남기기 실패", error.response);
    return Promise.reject(error);
  }
};

// PATCH : 추천 반응 수정하기
export const PatchRecomReact = async (id, emoji, input) => {
  try {
    const response = await http.patch(`/recom/react/${id}`, {
      emoji: emoji,
      content: input,
    });
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    console.error("추천 반응 수정하기 실패", error.response);
    return Promise.reject(error);
  }
};

//GET : 알림 조회
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
