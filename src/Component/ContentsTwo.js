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
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeOnePlus = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
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
  background-position: right 50% bottom 66%;
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
  width: 26vw;
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
        <text style={{ color: "#0d7377" }}>???, ??????????????????????????</text>
      </LineSizeOne>
      <LineSizeOnePlus marginTop={"3vw"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>????????? ??????????????????????????????, ?????????????????? ???????????? ??????</text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOnePlus>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>
            [??????] ????????? '???????????? ????????????' ?????????YG??????????? ???????????? 150??? ??????
          </text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOnePlus>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>???????????? ????????? MS, ???????????? '????????????'</text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOnePlus>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>???????????????, ??? ????????? ?????? '????????????' ?????? ?????? ??????</text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOne marginTop={"4vw"}>
        ?????? ????????? ?????? ??????, ????????? ?????? KGA
      </LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#0d7377" }}>
          ????????? ?????? ???????????? ????????? ????????????. ?????? ???????????????!????
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
          <text>??????????????? </text>
          <text style={{ color: "#0d7377" }}>????????? ?????????!</text>
        </LineSizeOne>
        <div
          style={{ width: "30%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>??????</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>?????? ????????? ??????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>???????????? ???????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>?????? ????????? ??????</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>??????/??????/?????? ??????</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>???????????? ?????? </text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????? ????????? ????????????,</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>???????????? ????????? ??????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????? ??????</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>??????????????? NFT</LineSizeFive>

          <LineSizeSix marginTop={"3vw"}>
            <text>????????? ????????? ????????? ??????,</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????? ??? ?????? ????????? ????????? ??????</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
      </GreenBoxContainer>
      <LineSizeOne marginTop={"10vw"}>
        <text style={{ color: "#0d7377" }}>?????? ????????? ??????????</text>
      </LineSizeOne>
      <LineSizeOne>
        <text>???????????? ?????? ?????? ?????? ??????!</text>
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
              <text style={{ color: "#00ffd6" }}>
                ???????????? ???????????? ???????????? ????????? ?????????
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                ????????? ????????? ????????? ????????? ?????????
              </text>
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
                ??????, ??????, ????????????, ????????????,
              </text>
            </LineSizeTwo>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                ??????????????? ????????? ????????? ?????????
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                ??????????????? ???????????? ???????????? NFT ?????????
              </text>
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
              ???????????? ??????????????? ???????????????????
            </text>
          </LineSizeOne>
        </div>
        <LineSizeThree marginTop={"2vw"}>
          <text style={{ color: "white" }}>
            ???????????? ???, ????????? ????????? ??????
          </text>
        </LineSizeThree>
        <LineSizeThree>
          <text style={{ color: "#00ffd6" }}>
            ?????? ???????????? ????????? ????????? ???????????????!
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
              <text style={{ color: "#101010" }}>???????????? ????????????</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>????????? ?????? ?????????</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>TREND</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>
                2022??? ?????? ???????????? ??????
              </text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>'????????????'</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>SECRET</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>????????? ?????? ?????? ??????</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>?????? ?????????????</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
        </div>
      </LastContentsWrapper>
    </ContentsTwoContainer>
  );
};

export default ContentsTwo;
