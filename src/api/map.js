import { http } from "../api/http";
import { isTokenExpired } from "./user";

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
