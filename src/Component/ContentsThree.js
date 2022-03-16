import React, { useState } from "react";
import styled from "styled-components";
import "../styles/css/App.css";

const ContentsThreeContainer = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const LineTextOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFive = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const SectionBox = styled.button`
  font-family: "Pretendard-ExtraBold";
  width: 15vw;
  height: 3.5vw;
  border-radius: 1vw;
  border-color: #aecbcc;
  font-size: 2vw;
  color: white;
  cursor: pointer;
  margin-top: 1vw;
  ${({ backgroundColor }) => {
    return backgroundColor ? `background-color: ${backgroundColor}` : null;
  }}
`;

const SectionPage = (sectionState) => {
  if (sectionState === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextFive marginTop={"2vw"}>메타버스 바로 알기</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            '로블록스'를 기반으로 한 메타버스 플랫폼을
          </text>
        </LineTextThree>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>배우고 이해합니다.</text>
        </LineTextThree>
        <LineTextFour marginTop={"2vw"}>메타버스 개념과 시장전망</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          메타버스에서 발생할 수 있는 가상경제 모델에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          Agile 기반의 프로젝트 관리 환경 구축에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          로블록스에서 사용되는 Lua Script 활용에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          메타버스 플랫폼 개발에 필요한 기초 프로그래밍 학습
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextFive marginTop={"2vw"}>메타버스 프로그래밍</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>'메타버스 월드' 제작을 위한</text>
        </LineTextThree>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>프로그래밍을 학습합니다.</text>
        </LineTextThree>
        <LineTextFour marginTop={"2vw"}>
          메타버스 구현에 활용되는 다양한 플랫폼 환경에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>메타버스 플랫폼 설계</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          메타버스 백엔드 프로그래밍
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          블록체인 및 NFT의 개념과 활용 사례에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          플레이어 아바타 및 이벤트 프로그래밍
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          Unity3D 엔진 심화 그래픽과 서버
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 3) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextFive marginTop={"2vw"}>참여기업 프로젝트</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>기업 요구사항에 맞추어</text>
        </LineTextThree>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            '상용화' 프로젝트를 진행합니다.
          </text>
        </LineTextThree>
        <LineTextFour marginTop={"2vw"}>
          협약기업 요구사항 분석 및 설계
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          분석한 데이터를 기반으로 메타버스 플랫폼 개발 환경 만들기
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          팀 단위로 협약기업에서 제시한 요구사항을 바탕으로 메타버스 프로젝트를
          제작
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          협약기업이 참관하고 프로젝트 제작 발표회 진행
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 4) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LineTextFive marginTop={"2vw"}>취업을 위한 준비</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            '프로젝트 결과물'을 기반으로 취업 컨설팅을
          </text>
        </LineTextThree>
        <LineTextThree>
          {" "}
          <text style={{ color: "#0d7377" }}>통해 취업을 준비합니다.</text>
        </LineTextThree>

        <LineTextFour marginTop={"2vw"}>
          이력서 {"&"} 자기소개서 작성
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          취업용 포트폴리오 문서 작성
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          프로젝트 결과물 기반 프로필 문서 작성
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>기술 면접 준비</LineTextFour>
        <LineTextFour marginTop={"1vw"}>기업 코딩 테스트 준비</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          기업 가이드라인 제시 및 정보 제공
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          최신 입사 트렌드를 반영한 현업인 초청 모의면접
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          MOU 및 다양한 루트를 통한 취업 연계
        </LineTextFour>
      </div>
    );
  }
};

const ContentsThree = () => {
  const [sectionState, setSectionState] = useState(1);
  return (
    <ContentsThreeContainer>
      <LineTextOne marginTop={"5vw"}>불필요한 내용은 빼고</LineTextOne>
      <LineTextOne>
        <text style={{ color: "#0d7377" }}>취업에 꼭 필요한 내용</text>으로
        채웠습니다
      </LineTextOne>
      <div
        style={{
          backgroundColor: "#0d7377",
          width: "60vw",
          height: "3vw",
          textAlign: "center",
          paddingTop: "0.2vw",
          marginTop: "0.5vw",
        }}
      >
        <LineTextTwo>
          <text
            style={{
              color: "white",
              letterSpacing: "0.5vw",
              wordSpacing: "1vw",
            }}
          >
            게임 개발사 대표가
          </text>
          <text
            style={{
              color: "#aecbcc",
              letterSpacing: "0.5vw",
              wordSpacing: "1vw",
              marginLeft: "1vw",
            }}
          >
            직접 설계한 40주 커리큘럼
          </text>
        </LineTextTwo>
        <div
          style={{
            width: "60vw",
            height: "25vw",
            marginTop: "1vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "25vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            {sectionState === 1 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(1);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 1
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(1);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 1
              </SectionBox>
            )}
            {sectionState === 2 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(2);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 2
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(2);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 2
              </SectionBox>
            )}

            {sectionState === 3 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(3);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 3
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(3);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 3
              </SectionBox>
            )}
            {sectionState === 4 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(4);
                }}
                backgroundColor={"#0d7377"}
              >
                Section 4
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(4);
                }}
                backgroundColor={"#aecbcc"}
              >
                Section 4
              </SectionBox>
            )}
          </div>
          <div
            style={{
              width: "70%",
              height: "25vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {SectionPage(sectionState)}
          </div>
        </div>
      </div>
    </ContentsThreeContainer>
  );
};

export default ContentsThree;