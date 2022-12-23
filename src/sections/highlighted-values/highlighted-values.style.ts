import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const HighlightedValuesContainer = styled(ColumnContainer)`
  width: 100%;
  margin-bottom: 32px;
`;

export const HighlightedValuesInnerContainer = styled(RowContainer)`
  margin-top: -200px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet_xl}px) {
    margin-top: 24px;
  }
`;
