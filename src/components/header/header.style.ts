import { ColumnContainer, RowContainer } from "../../style/global-style";
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
  background: ${({ theme }) => theme.colors.darkBlue()};
  height: 75px;
  z-index: 2;

  @media (max-width: ${breakpoints.mobile_l}px) {
    display: none;
  }
`;

export const StickyHeaderItem = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color:  ${({ theme }) => theme.colors.white()};

  @media (max-width: ${breakpoints.tablet_l}px) {
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange()};
  }
`;

export const StickyHeaderRowContainer = styled(RowContainer)`
  margin-right: 32px;
`;
