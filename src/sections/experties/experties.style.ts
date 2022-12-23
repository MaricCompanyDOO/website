import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const ExpertiesRelativeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExpertiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BackgroundContainer = styled(ColumnContainer)<{ backgroundImage: string }>`
  width: 100vw;
  aspect-ratio: 978 / 1385;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  box-shadow: inset 0 0 0 2000px ${({ theme }) => theme.colors.black(0.7)};
  justify-content: flex-start;
  -webkit-filter: grayscale(70%);
  filter: grayscale(70%);
`;

export const BackgroundFixedContainer = styled(ColumnContainer)`
  position: sticky;
  top: 0;
  height: 100vh;
`;

export const FixedHeading = styled.div`
  color: ${({ theme }) => theme.colors.white()};
  font-size: 46px;
  font-family: cursive;
  text-align: center;

  @media (max-width: ${breakpoints.mobile_l}px) {
    font-size: 32px;
  }
`;

export const FixedSubheading = styled(FixedHeading)`
  font-weight: bold;
  font-family: Impact, fantasy;
`;

export const GridSeparator = styled.div`
  height: 16px;
`;

export const GridContainer = styled(RowContainer)``;

export const GridItemTopLeft = styled(ColumnContainer)`
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 250px;
  width: 250px;
  text-align: right;
  padding-bottom: 16px;

  @media (max-width: ${breakpoints.mobile_l}px) {
    max-width: 100px;
    width: 100px;
  }
`;

export const GridItemTopRight = styled(ColumnContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 250px;
  width: 250px;
  text-align: left;
  padding-bottom: 16px;

  @media (max-width: ${breakpoints.mobile_l}px) {
    max-width: 100px;
    width: 100px;
  }
`;

export const GridItemBottomLeft = styled(ColumnContainer)`
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 250px;
  width: 250px;
  text-align: right;
  padding-top: 16px;

  @media (max-width: ${breakpoints.mobile_l}px) {
    max-width: 100px;
    width: 100px;
  }
`;

export const GridItemBottomRight = styled(ColumnContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 250px;
  width: 250px;
  text-align: left;
  padding-top: 16px;

  @media (max-width: ${breakpoints.mobile_l}px) {
    max-width: 100px;
    width: 100px;
  }
`;


export const GridItemHeading = styled.div`
  color: ${({ theme }) => theme.colors.white()};
  font-size: 28px;

  @media (max-width: ${breakpoints.mobile_l}px) {
    font-size: 22px;
    overflow-wrap: break-word;
  }
`;

export const GridItemSeparatorVertical = styled.div`
  background: ${({ theme }) => theme.colors.white()};
  width: 1px;
  height: 100%;
`;

export const GridItemSeparatorHorizontal = styled.div`
  background: ${({ theme }) => theme.colors.white()};
  width: 100%;
  height: 1px;
`;
