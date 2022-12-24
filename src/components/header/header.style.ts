import { RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const StickyHeader = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkGreen()};
  height: 75px;
  z-index: 2;
  overflow: visible;

  @media (max-width: ${breakpoints.mobile_l}px) {
    display: none;
  }
`;

export const StickyHeaderItem = styled.div<{ isActive: boolean }>`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color:  ${({ theme, isActive }) => isActive ? theme.colors.orange() : theme.colors.white()};

  @media (max-width: ${breakpoints.tablet_l}px) {
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange()};
  }
`;

export const StickyHeaderRowContainer = styled(RowContainer)`
  margin-right: 32px;
  grid-gap: 32px;

  @media (max-width: ${breakpoints.tablet_l}px) {
    grid-gap: 12px;
    margin-right: 22px;
  }
`;

export const LogoWrapper = styled.div`
  padding: 8px;
  padding-top: 32px;
  margin-left: 32px;
  top: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.lightGray()}, ${({ theme }) => theme.colors.mediumGray()});
  box-shadow: ${({ theme }) => `0 4px 8px 0 ${theme.colors.darkGray(0.2)}, 0 6px 20px 0 ${theme.colors.darkGray(0.19)}`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet_m}px) {
  }
`;

export const StyledLogo = styled.div<{ backgroundImage: string }>`
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  width: 260px;
  aspect-ratio: 3080 / 931;
  
  @media (max-width: ${breakpoints.tablet_m}px) {
    width: 150px;
  }
`;
