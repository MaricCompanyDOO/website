import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const NotFoundWrapper = styled(ColumnContainer)`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGreen()};
`;

export const LogoWrapper = styled.div`
  padding: 16px;
  top: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.lightGray()}, ${({ theme }) => theme.colors.mediumGray()});
  box-shadow: ${({ theme }) => `0 4px 8px 0 ${theme.colors.darkGray(0.2)}, 0 6px 20px 0 ${theme.colors.darkGray(0.19)}`};
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: -48px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLogo = styled.div<{ backgroundImage: string }>`
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  width: 260px;
  aspect-ratio: 3080 / 931;

  @media (max-width: ${breakpoints.mobile_l}px) {
    width: 200px;
  }
`;

export const NotFoundTextWrapper = styled(ColumnContainer)`
  background: ${({ theme }) => theme.colors.white()};
  padding: 32px;
  border-radius: 22px;
  max-width: calc(100% - 2 * 64px);
  min-height: 320px;
  text-align: center;
`;


export const NotFoundText = styled.div`
  color: ${({ theme }) => theme.colors.darkGray()};
  font-size: 18px;
`;
