import { http } from "../api/http";
import { isTokenExpired } from "./user";

// GET : 지도 메인 화면
export const GetMapMain = async (id) => {
  try {
    const response = await http.get(`/map/detail/${id}/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    isTokenExpired(error);
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

// GET : 지도 반환
export const GetSiLoc = async (selectedBtn, doLoc, setSiLoc, setSelectedDo) => {
  if (selectedBtn && doLoc.includes(selectedBtn)) {
    try {
      const response = await http.get(`/map/city/`, {
        params: { city: selectedBtn },
      });
      setSiLoc(response.data.data.cities);
      setSelectedDo(response.data.data.cities);
    } catch (error) {
      console.error(`도시 데이터를 가져오는 중 에러 발생: ${error}`);
    }
  }
};

// POST : 지도 만들기 - 이미지만
export const PostMapImg = async (img) => {
  try {
    const formData = new FormData();
    formData.append("img", img);

    const response = await http.post(`/map/imgpost/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error("지도 데이터 전송 실패", error.response);
    return Promise.reject(error);
  }
};

// POST : 지도 만들기 - 전체 다
export const PostMapData = async (location, name, img, hashtag, description) => {
  try {
    const response = await http.post(`/map/new/`, {
      name,
      location,
      img,
      hashtag,
      description,
    });
    console.log(response.data.data);
    return response.data.data.id; // post한 지도의 id를 반환
  } catch (error) {
    console.error("지도 데이터 전송 실패", error.response);
  }
};

// GET : MY 지도 리스트 조회
export const GetMyMapList = async (order) => {
  try {
    const response = await http.get(`/map/?order=${order}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    isTokenExpired(error);
    console.error("지도 정렬 실패", error.response);
  }
};

// GET : OTHERS 지도 리스트 조회
export const GetOthersMapList = async (order) => {
  try {
    const response = await http.get(`/map/others/?order=${order}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    isTokenExpired(error);
    console.error("지도 정렬 실패", error.response);
  }
};
