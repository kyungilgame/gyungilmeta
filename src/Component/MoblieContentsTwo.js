import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 160vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;
const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const ImageContainerOne = styled.div`
  width: 15vw;
  height: 15vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const MiddleLineContainer = styled.div`
  width: 100%;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vw;
  margin-top: 8vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  margin-top: 3vw;
  background-size: 8vw 1.5vw;
  background-image: url(${ShortLine});
  background-position: right 37% bottom 69%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 15vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 63% bottom 68%;
  background-repeat: no-repeat;
  margin-top: 3vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const GreenBoxWrapperThree = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 10vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 67% bottom 60%;
  background-repeat: no-repeat;
  margin-top: 3vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const MobileContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeTwo marginTop={"6vw"}>
        <text style={{ color: "#353535" }}>
          미리 앞서간 10%의 사람들이 나머지 90% 기회를 독점합니다.
        </text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text style={{ color: "#353535" }}>
          2022년 가장 경쟁력 있는 기술 중 단연코 '메타버스'가 있습니다.
        </text>
      </LineSizeTwo>
      <LineSizeOne marginTop={"2vw"}>그래서 디지털 교육에 특화된</LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#0d7377" }}>
          경일과 고용노동부가 준비했습니다
        </text>
      </LineSizeOne>
      <div
        style={{
          width: "50vw",
          height: "10vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5vw",
        }}
      >
        <ImageContainerOne src={Logo}></ImageContainerOne>
        <div>
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </div>
        <ImageContainerOne src={MinistryImage}></ImageContainerOne>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "15%", height: "0.5vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>부트캠프 수강생을 위한 </text>
          <text style={{ color: "#0d7377" }}>혜택!</text>
        </LineSizeOne>
        <div
          style={{ width: "15%", height: "0.5vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>수강료 0원</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>K-Digital Training으로</text>
            <text>40주간 무료로 강의를 듣고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>메타버스 개발자로 취업하세요</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>기업 프로젝트 진행</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>협약 기업을 통해</text>{" "}
            <text>상용화 프로젝트를 직접 참여하여</text>
          </LineSizeSix>

          <LineSizeSix>
            <text>기업 문제를 해결하고</text> <text>실무능력을 기릅니다</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperThree>
          <LineSizeFive marginTop={"3vw"}>취업할 때까지</LineSizeFive>
          <LineSizeFive>1:1 취업 컨설팅 진행</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>프로필, 기술이력서, 포트폴리오</text>{" "}
            <text>면접준비까지?</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>취업할 때까지 지속적인 컨설팅 제공!</text>
          </LineSizeSix>
        </GreenBoxWrapperThree>
      </GreenBoxContainer>
    </ContentsTwoContainer>
  );
};

export default MobileContentsTwo;
