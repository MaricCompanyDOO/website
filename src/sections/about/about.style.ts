import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const AboutWrapper = styled(ColumnContainer)`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 64px;
  background: ${({ theme }) => theme.colors.white()};
`;

export const AboutInnerWrapper = styled(RowContainer)`
  width: 1032px;

  @media (max-width: ${breakpoints.desktop_s}px) {
    width: calc(100% - 2 * 24px);
  }

  @media (max-width: ${breakpoints.mobile_l}px) {
    width: calc(100% - 2 * 16px);
  }
`;

export const AboutImage = styled.div<{ backgroundImage: string }>`
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  aspect-ratio: 716 / 533;
  min-width: 560px;
  display: flex;

  @media (max-width: ${breakpoints.desktop_s}px) {
    width: calc(100% - 2 * 16px);
    min-width: 420px;
    max-width: 520px;
  }

  @media (max-width: ${breakpoints.tablet_l}px) {
    display: none;
  }
`;

export const AboutImageMobile = styled.div<{ backgroundImage: string }>`
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  aspect-ratio: 716 / 533;
  display: none;

  @media (max-width: ${breakpoints.tablet_l}px) {
    width: 100%;
    max-width: 560px;
    display: flex;
  }
`;

export const AboutRightRow = styled(ColumnContainer)`
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: ${breakpoints.tablet_l}px) {
    max-width: 560px;
  }
`;

export const AboutSectionSubheading = styled.div`
  color: ${({ theme }) => theme.colors.darkGray(0.8)};
  font-size: 18px;
`;

export const AboutSectionCheckContainer = styled(RowContainer)`
  align-items: flex-start;
`;

export const AboutSectionCheckItem = styled.div`
  color: ${({ theme }) => theme.colors.darkGray(0.8)};
  font-size: 16px;
`;
