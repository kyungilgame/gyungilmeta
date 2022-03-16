import styled from "styled-components";
import "../styles/css/App.css";

import Image from "../Image/MobileBackgroundImage.png";

const ContentsOneContainer = styled.div`
  width: 100%;
  height: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  background-size: 100% 50%;
  background-image: url(${Image});
  background-position: center top;
  background-repeat: no-repeat;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.5vw;
  color: #0d7377;
  margin-top: 4vw;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  color: #101010;
`;

const ContentsBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  margin-top: 2vw;
  width: 75vw;
  height: 60vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLineInnerBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  color: #0d7377;
  margin-top: 4vw;
  margin-bottom: 1vw;
`;

const LastLineInnerBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 1vw;
  width: 100%;
  height: 10vw;
  background-color: #101010;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InnerContentsBox = ({ title, duration }) => {
  return (
    <>
      <div style={{ marginTop: "1vw" }}>
        <text style={{ fontFamily: "Pretendard-Bold", fontSize: "3vw" }}>
          {`${title}`}
        </text>
      </div>
      <div
        style={{
          width: "4vw",
          height: "0.15vw",
          backgroundColor: "#0d7377",
          marginTop: "1.5vw",
        }}
      ></div>
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: "2.5vw",
            marginTop: "1.5vw",
          }}
        >
          {`${duration}`}
        </text>
      </div>
    </>
  );
};

const MobileContentsOne = () => {
  return (
    <>
      <ContentsOneContainer>
        <FirstLine>국내 최초 로볼록스 기반</FirstLine>
        <SecondLine>'메타버스 월드'</SecondLine>
        <SecondLine>게임 개발자 부트캠프</SecondLine>
        <ContentsBox>
          <FirstLineInnerBox>GDB 부트캠프 36기</FirstLineInnerBox>
          <InnerContentsBox
            title={"모집기간"}
            duration={"2022.04.04 ~ 2023.01.23"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"시간"}
            duration={"AM 09:00 ~ PM 18:00"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"마감일"}
            duration={"2022.03.30"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"합격자 발표일"}
            duration={"2022.04.01"}
          ></InnerContentsBox>
          <LastLineInnerBox
            as={"a"}
            href={"https://forms.gle/bNkmRwr2wMwfHBZp7"}
          >
            <text
              style={{
                fontSize: "4vw",
                color: "white",
              }}
            >
              부트캠프 36기
            </text>
            <text
              style={{
                fontSize: "4vw",
                color: "#00ffd6",
                marginLeft: "0.5vw",
              }}
            >
              바로 지원하기
            </text>
          </LastLineInnerBox>
        </ContentsBox>
      </ContentsOneContainer>
    </>
  );
};

export default MobileContentsOne;