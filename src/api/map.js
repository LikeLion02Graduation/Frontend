import { http } from "../api/http";
// import { isTokenExpired } from "./user";

// GET : 지도 메인 화면
export const GetMapMain = async (id) => {
  try {
    const response = await http.get(`/map/detail/${id}/`);
    console.log("지도 메인 화면", response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    // isTokenExpired(error);
    console.error("지도 메인 화면 조회 실패", error);
    return Promise.reject(error);
  }
};

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

// POST : 새로운 태그 요청
export const PostNewTag = async (data) => {
  try {
    const response = await http.post("/map/newtag/", {
      tagname: data,
    });
    console.log(response.data);
    return Promise.resolve(response);
  } catch (error) {
    console.error("새로운 태그 요청 실패 ", error.response);
    return Promise.reject(error);
  }
};
