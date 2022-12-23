import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const ProductsContainer = styled(ColumnContainer)`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  background: ${({ theme }) => theme.colors.white()};

  @media (max-width: ${breakpoints.tablet_l}px) {
    align-items: flex-start;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 16px;
  padding: 24px;

  @media (max-width: ${breakpoints.desktop_s}px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: ${breakpoints.tablet_l}px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: ${breakpoints.mobile_l}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductsHeaddingWrapper = styled(ColumnContainer)`
  align-items: flex-start;
  max-width: 260px;
`;

export const ProductItemsWrapper = styled(ColumnContainer)`
  align-items: flex-start;
  justify-content: flex-start;
  width: 160px;
`;

export const ProductItemWrapper = styled(RowContainer)`
  align-items: flex-start;
`;

export const ProductItem = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkGray()};
`;

export const ProductsGridrapper = styled(ColumnContainer)`
  align-items: flex-start;
  grid-column: span 2;

  @media (max-width: ${breakpoints.mobile_l}px) {
    display: none;
  }
`;

export const ProductsGridrapperMobile = styled(ColumnContainer)`
  align-items: flex-start;
  grid-column: span 1;
  display: none;

  @media (max-width: ${breakpoints.mobile_l}px) {
    display: flex;
  }
`;

export const ProductImage = styled.div<{ backgroundImage: string }>`
  width: 260px;
  aspect-ratio: 3 / 4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
`;