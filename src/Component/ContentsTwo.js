import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 140vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;
const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSeven = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const ImageContainerOne = styled.div`
  width: 10vw;
  height: 5vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const ImageContainerTwo = styled.div`
  width: 14vw;
  height: 7vw;
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
  margin-top: 5vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vw;
  margin-top: 5vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 25vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 6vw 1.5vw;
  background-image: url(${ShortLine});
  background-position: right 29% bottom 66%;
  background-repeat: no-repeat;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 25vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 12vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 66% bottom 67%;
  background-repeat: no-repeat;
`;

const ContentsBoxContainer = styled.div`
  width: 100%;
  height: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3vw;
`;

const BlackBoxWrapper = styled.div`
  width: 25vw;
  height: 6vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LastContentsWrapper = styled.div`
  width: 100%;
  height: 45vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LastContentsInnerBox = styled.div`
  width: 20vw;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne marginTop={"5vw"}>
        <text style={{ color: "#0d7377" }}>
          미리 앞서간 10%의 사람들이 나머지 90% 기회를 독점
        </text>
        <text>합니다</text>
      </LineSizeOne>
      <LineSizeOne>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>2022년</text>
          <div
            style={{
              width: "51vw",
              height: "3vw",
              backgroundColor: "#00ffd6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "1vw",
            }}
          >
            <text style={{ color: "black" }}>
              가장 경쟁력 있는 기술 중 단연코 `메타버스`
            </text>
          </div>

          <text>가 답이다!</text>
        </div>
      </LineSizeOne>
      <LineSizeOne marginTop={"4vw"}>그래서 디지털 교육에 특화된</LineSizeOne>
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
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "1vw",
        }}
      >
        <ImageContainerOne src={Logo}></ImageContainerOne>
        <div>
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </div>
        <ImageContainerTwo src={MinistryImage}></ImageContainerTwo>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "30%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>부트캠프 수강생을 위한 </text>
          <text style={{ color: "#0d7377" }}>혜택!</text>
        </LineSizeOne>
        <div
          style={{ width: "30%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>수강료 0원</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>K-Digital Training으로</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>40주간 무료로 강의를 듣고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>메타버스 개발자로 취업하세요</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>기업 프로젝트 진행</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>협약 기업을 통해</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>상용화 프로젝트를 직접 참여하여</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>기업 문제를 해결하고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>실무능력을 기릅니다</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"3vw"}>취업할 때까지</LineSizeFive>
          <LineSizeFive>1:1 취업 컨설팅 진행</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>프로필, 기술이력서, 포트폴리오</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>면접준비까지?</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>취업할 때까지 지속적인 컨설팅 제공!</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
      </GreenBoxContainer>
      <LineSizeOne marginTop={"10vw"}>
        <text style={{ color: "#0d7377" }}>솔직하게 묻겠습니다</text>
      </LineSizeOne>
      <ContentsBoxContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "55vw",
            justifyContent: "space-around",
          }}
        >
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>수많은 온라인강의</text>
            </LineSizeTwo>
          </BlackBoxWrapper>
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>독학으로 허송한 시간</text>
            </LineSizeTwo>
          </BlackBoxWrapper>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "55vw",
            justifyContent: "space-around",
            marginTop: "2vw",
          }}
        >
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                대학 졸업 후 취업 미스매칭
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>코로나로 인한 펜데믹</text>
            </LineSizeTwo>
          </BlackBoxWrapper>
        </div>
      </ContentsBoxContainer>
      <LastContentsWrapper>
        <div
          style={{
            width: "43vw",
            height: "3vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6vw",
          }}
        >
          <LineSizeOne>
            <text style={{ color: "black" }}>
              여러분의 취업준비는 안녕하십니까?
            </text>
          </LineSizeOne>
        </div>
        <LineSizeThree marginTop={"2vw"}>
          <text style={{ color: "white" }}>
            막연함의 끝, 완전한 확신의 준비
          </text>
        </LineSizeThree>
        <LineSizeThree>
          <text style={{ color: "#00ffd6" }}>
            이제 똑똑하고 독하게 제대로 시작하세요!
          </text>
        </LineSizeThree>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "65vw",
            height: "11vw",
            marginTop: "2vw",
          }}
        >
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>FOCUS</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>취업까지 끝장내는</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>개발자 취업 스터디</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>TREND</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>
                2022년 가장 트렌디한 기술
              </text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>'메타버스'</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>SECRET</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>단기간 취업 비결 공개</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>면접 족보까지?</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
        </div>
      </LastContentsWrapper>
    </ContentsTwoContainer>
  );
};

export default ContentsTwo;
