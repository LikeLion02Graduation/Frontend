import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addPlace } from "../../redux/recommendSlice";

import TopBar from "../../components/_common/TopBar";
import { Line2, Wrapper, YellowBox } from "../../components/_common/CommonExport";

const { kakao } = window;

const RecommendResultPage = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mapState, setMapState] = useState({
    isSelected: false,
    reseultPlaces: [],
    selectedPlace: null,
  });

  // 장소 검색 결과 반환
  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchText, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        setMapState((prevState) => ({ ...prevState, reseultPlaces: data }));
      } else {
        alert("검색어를 정확히 입력해주세요. (임시)");
        window.location.reload();
      }
    }
  }, [searchText]);

  // 장소 선택 시 지도 생성
  useEffect(() => {
    if (mapState.selectedPlace) {
      const container = document.getElementById("myMap");
      const options = {
        center: new kakao.maps.LatLng(mapState.selectedPlace.y, mapState.selectedPlace.x),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const newInfowindow = new kakao.maps.InfoWindow();

      displayMarker(mapState.selectedPlace, map, newInfowindow);

      // return () => {
      //   infowindow.close();
      //   map.removeAllChildren();
      // };
    }
  }, [mapState.selectedPlace]);

  // 장소 선택 시 마커 생성 함수
  function displayMarker(place, map, infowindow) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
    infowindow.open(map, marker);
  }

  // 장소 선택 함수
  function selectPlace(data) {
    setMapState((prevState) => ({ ...prevState, isSelected: true, selectedPlace: data }));
    console.log(data);
  }

  // 장소 선택 초기화 함수
  function initSelectPlace() {
    setSearchText("");
    setMapState({ isSelected: false, reseultPlaces: [], selectedPlace: null });
  }

  // 장소 저장 함수 (최종 선택)
  async function savePlace() {
    dispatch(
      addPlace({
        name: mapState.selectedPlace.place_name,
        address: mapState.selectedPlace.address_name,
        link: mapState.selectedPlace.place_url,
      })
    );
    initSelectPlace();
    navigate("/recommend/main");
  }

  // 장소 저장X 함수 (선택X)
  function notSavePlace() {
    initSelectPlace();
    navigate("/recommend/search");
  }

  return (
    <Fix>
      <TopBar navBtnOn={true} titleText="Result" />
      <Wrapper>
        {mapState.isSelected ? (
          <>
            <SearchAgain onClick={notSavePlace}>탭해서 [다시] 장소 검색하기. . .</SearchAgain>
            <Line2 />
            <MapContainer id="myMap" mapState={mapState} />
            <YellowBox text="이 장소가 맞나요?" font={"Hack Regular"} weight={"400"} />
            <Buttons>
              <div onClick={savePlace} style={{ background: "var(--black1)", color: "var(--white)" }}>
                y
              </div>
              <div onClick={notSavePlace} style={{ background: "var(--white)", color: "var(--black1)" }}>
                N
              </div>
            </Buttons>
          </>
        ) : (
          <ResultList id="result-list">
            {mapState.reseultPlaces.map((item, i) => (
              <>
                <ListBox key={item.id} onClick={() => selectPlace(item)}>
                  <Index>{i + 1}</Index>
                  <Info>
                    <div>{item.place_name}</div>
                    {item.road_address_name && <div>{item.road_address_name}</div>}
                    <div style={{ opacity: "0.3" }}>[지번] {item.address_name}</div>
                    <div style={{ opacity: "0.3", fontFamily: "Hack Regular", fontWeight: "400" }}>{item.phone}</div>
                  </Info>
                </ListBox>
                <Line2 />
              </>
            ))}
          </ResultList>
        )}
      </Wrapper>
    </Fix>
  );
};

export default RecommendResultPage;

const Fix = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
`;

const SearchAgain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 61px;
  padding-left: 30px;
  box-sizing: border-box;

  color: var(--Black2);
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 145px;
  padding-top: 31px;
  box-sizing: border-box;

  color: var(--black3);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 29px 0px 31px;
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  border: 1.2px solid var(--black1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MapContainer = styled.div`
  display: ${(props) => (props.mapState.isSelected ? "flex" : "none")};
  width: 393px;
  height: 474px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 41px;
    flex-shrink: 0;
    border: 1.5px solid var(--black1);
    box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  }
`;

const ResultList = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: var(--white);
`;
