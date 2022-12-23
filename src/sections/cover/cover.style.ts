import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";

export const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BackgroundContainer = styled(ColumnContainer)<{ backgroundImage: string }>`
  width: 100vw;
  height: 75vw;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  box-shadow: inset 0 0 0 2000px ${({ theme }) => theme.colors.black(0.4)};
  background-attachment: fixed;
  justify-content: flex-start;
`;

export const BackgroundInnerContainer = styled(ColumnContainer)`
  width: 80vw;
  max-width: 600px;
  height: 100vh;
`;

export const SubtitleWrapper = styled(ColumnContainer)`
  box-shadow: inset 0 0 0 2000px ${({ theme }) => theme.colors.black(0.5)};
  padding: 40px;
`;

export const Title = styled(ColumnContainer)`
  text-transform: uppercase;
  color:  ${({ theme }) => theme.colors.white()};
  font-size: 48px;
  text-align: center;
  font-family: Impact, fantasy;
`;

export const Subtitle = styled(ColumnContainer)`
  color:  ${({ theme }) => theme.colors.white()};
  font-size: 18px;
  text-align: center;
`;

export const OurMissionWrapper = styled(ColumnContainer)`
  width: 100%;
  min-height: 100px;
  background: ${({ theme }) => theme.colors.orange()};
`;

export const AboutUsWrapper = styled(ColumnContainer)`
  width: 100%;
  min-height: 600px;
  background: ${({ theme }) => theme.colors.darkGray()};
`;
